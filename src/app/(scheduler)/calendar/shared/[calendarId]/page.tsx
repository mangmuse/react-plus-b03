import Page from "@/components/Page";
import Section from "@/components/Section";

type SharedCalendarPageProps = {
  params: {
    calendarId: string;
  };
};

const sharedCalenderPage = ({ params: { calendarId } }: SharedCalendarPageProps) => {
  return (
    <Page title="공유 일정보기">
      <Section calendarId={calendarId} />
    </Page>
  );
};

export default sharedCalenderPage;
