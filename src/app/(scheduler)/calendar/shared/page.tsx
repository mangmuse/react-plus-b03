import Page from "@/components/Page";
import TodoItem from "../../_components/TodoItem/TodoItem";

const SharedCalendarPage = () => {
  return (
    <Page title="공유 캘린더" isTitleHidden={true}>
      공유 캘린더 페이지
      <TodoItem />
    </Page>
  );
};

export default SharedCalendarPage;
