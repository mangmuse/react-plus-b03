import Page from "@/components/Page";
import Calendar from "../../_components/Calendar";
import TodoDate from "../../_components/TodoDate/TodoDate";
import TodoList from "../../_components/TodoList";

const ImportantTodosPage = () => {
  return (
    <Page title="IMPORTANT">
      <TodoDate />

      <TodoList isImportantPage={true} />
    </Page>
  );
};

export default ImportantTodosPage;
