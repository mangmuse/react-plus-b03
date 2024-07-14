import Page from "@/components/Page";
import Calendar from "../../_components/Calendar";
import TodoDate from "../../_components/TodoDate/TodoDate";
import TodoList from "../../_components/TodoList";
import useMyScheduleQuery from "@/hooks/useQuery/useMyScheduleQuery";

const ImportantTodosPage = () => {
  return (
    <Page title="IMPORTANT">
      <TodoDate />

      <TodoList isImportantPage={true} />
      <Calendar initialDate={new Date()} />
    </Page>
  );
};

export default ImportantTodosPage;
