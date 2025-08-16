import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import { useMediaQuery } from "@mui/material";

export default function Experience() {
  const isMdUp = useMediaQuery("(min-width:768px)");

  return (
    <div className=" flex flex-col items-center py-16 px-8 ">
      <h2 className="bg-[#FDFCDC] text-4xl font-extrabold text-[#F07167] bg-clip-text text-center mb-8">
        Work Experience
      </h2>

      <Timeline position={isMdUp ? "alternate" : "right"} >
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
