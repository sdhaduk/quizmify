import { prisma } from "@/lib/db";
import { checkAnswerSchema } from "@/schemas/form/quiz";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { compareTwoStrings } from "string-similarity";

export const POST = async (req: Request, res: Response) => {
  try {
    const body = await req.json();
    const { questionId, userAnswer } = checkAnswerSchema.parse(body);

    const question = await prisma.question.findUnique({
      where: { id: questionId },
    });

    if (!question) {
      return NextResponse.json(
        {
          error: "Question not found",
        },
        {
          status: 404,
        }
      );
    }

    await prisma.question.update({
      where: { id: questionId },
      data: {
        userAnswer,
      },
    });

    if (question.questionType === "mcq") {
      const isCorrect =
        question.answer.toLowerCase().trim() ===
        userAnswer.toLowerCase().trim();
      await prisma.question.update({
        where: { id: questionId },
        data: {
          isCorrect,
        },
      });

      return NextResponse.json(
        {
          isCorrect,
        },
        {
          status: 200,
        }
      );
    } else if (question.questionType === "open_ended") {
      let percentageSimiliar = compareTwoStrings(
        userAnswer.toLowerCase().trim(),
        question.answer.toLowerCase().trim()
      );
      percentageSimiliar = Math.round(percentageSimiliar * 100);

      await prisma.question.update({
        where: { id: questionId },
        data: {
          percentageCorrect: percentageSimiliar,
        },
      });
      
      return NextResponse.json(
        {
          percentageSimiliar,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: error.issues,
        },
        {
          status: 400,
        }
      );
    }
  }
};
