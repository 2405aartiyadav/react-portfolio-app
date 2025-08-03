import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
export default function Experience() {
  return (
    <div className="bg-gray-800 min-h-screen">
       <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-center from-green-400 to-blue-500">
          Work Experience
        </h2>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <ExperienceCard />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <EducationCard />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
