import Section from "@/components/Section";
import React from "react";

type SharedCalendarPageProps = {
  params: {
    calendarId: string;
  };
};

const sharedCalenderPage = ({ params: { calendarId } }: SharedCalendarPageProps) => {
  return <Section calendarId={calendarId} />;
};

export default sharedCalenderPage;
