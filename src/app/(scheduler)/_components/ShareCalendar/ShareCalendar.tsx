import Content from "@/components/Content";
import ContentInput from "@/components/ContentInput";

import CalendarSection from "@/components/CalendarSection";
import { useCommentQuery } from "@/hooks/useQuery/useCommentsQuery";

const ShareCalendar = ({ calendarId }: { calendarId: string }) => {
  const { data: comments, error, isPending } = useCommentQuery(calendarId);

  return (
    <div className="flex flex-col">
      <CalendarSection />
      <ContentInput calendarId={calendarId} />
      {comments?.map((comment) => (
        <Content key={comment.id} comment={comment} calendarId={calendarId} />
      ))}
    </div>
  );
};

export default ShareCalendar;
