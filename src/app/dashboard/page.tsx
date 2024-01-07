import HistoryCard from "@/components/dashboard/HistoryCard";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { getAuthSession } from "@/lib/nextauth";
import { Terminal } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export const metadata = {
  title: "Dashboard | Quizmify",
};

const page = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <main className="p-8 mx-auto max-w-7xl">
      <div className="flex items-center">
        <h2 className="mr-20 text-3xl font-bold tracking-tight">Dashboard</h2>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            Vercel's free tier only allows api's 5 seconds to recieve a response
            before killing the request. If you keep getting errors when trying
            to create a quiz, reduce the number of questions to 2-3 because
            chatGPT can sometimes take a while to come up with questions.
          </AlertDescription>
        </Alert>
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <QuizMeCard />
        <HistoryCard />
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        <RecentActivity />
      </div>
    </main>
  );
};

export default page;
