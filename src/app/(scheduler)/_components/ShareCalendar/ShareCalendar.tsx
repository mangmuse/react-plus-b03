import Content from "@/components/Content";
import ContentInput from "@/components/ContentInput";

import CalendarSection from "@/components/CalendarSection";
import { useCommentQuery } from "@/hooks/useQuery/useCommentsQuery";
import { Ttodo } from "@/hooks/useQuery/useTodoQuery";

const ShareCalendar = ({ calendarId, todos }: { calendarId: string; todos?: Ttodo[] }) => {
  const { data: comments, error, isPending } = useCommentQuery(calendarId);

  return (
    <div className="flex flex-col">
      <CalendarSection todos={todos} />
      <ContentInput calendarId={calendarId} />
      {comments?.map((comment) => (
        <Content key={comment.id} comment={comment} calendarId={calendarId} />
      ))}
    </div>
  );
};

export default ShareCalendar;
