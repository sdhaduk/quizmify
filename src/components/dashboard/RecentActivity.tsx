import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {};

const RecentActivity = (props: Props) => {
  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Recent Activity</CardTitle>
        <CardDescription>You have a played a total of 7 games</CardDescription>
      </CardHeader>
      <CardContent className="max-h-[580px] overflow-scroll">
        recents
      </CardContent>
    </Card>
  );
}; 

export default RecentActivity;
