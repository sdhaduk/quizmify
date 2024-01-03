import SignInButton from "@/components/nav/SignInButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    //logged in
    return redirect("/dashboard");
  }

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to Quizmify!</CardTitle>
          <CardDescription>
            Quizmify is a app that allows users to create and share quizzes with
            their friends!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In with Google!"></SignInButton>
        </CardContent>
      </Card>
    </div>
  );
}
