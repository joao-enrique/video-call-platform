import useMeetingActions from "@/Hooks/useMeetingActions"
import { Doc } from "../../convex/_generated/dataModel"
import { getMeetingStatus } from "@/lib/utils";
import { format } from "date-fns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Calendar1Icon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type Interview = Doc<"interviews">

function MeetingCard({interview}: {interview:Interview}) {
    const { joinMeeting } = useMeetingActions();

    const status = getMeetingStatus(interview);
    const formettedDate = format(new Date(interview.startTime), "EEEE, MMMM d · h:mm a")
  return (
    <Card>
        <CardHeader className="space-y-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar1Icon className="h-4 w-4"/>
                    {formettedDate}
                </div>

                <Badge variant={status === "live" ? "default": status === "upcoming" ? "secondary" : "destructive"}>
                    {status === "live" ? "Live Now" : status === "upcoming" ? "Upcoming" : "completed"}
                </Badge>
            </div>

            <CardTitle>{interview.title}</CardTitle>
            { interview.description && (
                <CardDescription className="line-clamp-2">`{interview.description}</CardDescription>
            )}
        </CardHeader>

        <CardContent>
            {status === "live" && (
                <Button className="w-full" onClick={() => joinMeeting(interview.streamCallId)}>
                    Join Meeting
                </Button>
            )}

            {status === "upcoming" && (
                <Button variant="outline" className="w-full" disabled>
                    Waiting to Start
                </Button>
            )}
        </CardContent>
    </Card>
  )
}

export default MeetingCard
