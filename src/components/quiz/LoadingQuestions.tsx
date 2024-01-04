"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Progress } from "../ui/progress";
type Props = {
  finished: boolean;
};

const LoadingQuestions = ({ finished }: Props) => {
  const loadingTexts = [
    "Hold on tight! We're crafting a challenging quiz just for you.",
    "Preparing a mind-boggling quiz tailored to your expertise.",
    "Quiz in the oven! Please wait while we bake the perfect questions.",
    "Gearing up for an intellectual showdown. Your personalized quiz is on its way!",
    "Generating a quiz that'll make your neurons do the tango. Almost there!",
    "Patience is key! Your custom quiz is being meticulously curated.",
    "Just a moment! We're assembling a quiz that matches your knowledge profile.",
    "Exciting times ahead! Your quiz is in the works - get ready for the challenge!",
    "Quiz creation in progress. Grab a snack, and get ready to flex those brain muscles!",
    "In the lab of wisdom, we're concocting a quiz potion just for you.",
    "Generating brainy vibes! Your quiz is about to take center stage.",
    "Hold onto your thinking cap! Your quiz adventure is moments away.",
  ];

  const [progress, setProgress] = useState<number>(0);
  const [loadingText, setLoadingText] = useState<string>(loadingTexts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loadingTexts.length);
      setLoadingText(loadingTexts[randomIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (finished) return 100;
        if (prev === 100) {
          return 0;
        }
        if (Math.random() < 0.1) {
          return prev + 2;
        }
        return prev + 0.5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [finished]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] md:w-[60vw] flex flex-col items-center">
      <Image
        src={"/Classroom.gif"}
        width={400}
        height={400}
        alt="loading animation"
      />
      <Progress value={progress} className="w-full mt-4" />
      <h1 className="mt-2 text-xl">{loadingText}</h1>
    </div>
  );
};

export default LoadingQuestions;
