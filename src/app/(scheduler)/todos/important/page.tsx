import Page from "@/components/Page";
import DateSelector from "../../_components/DateSelector";
import TodoList from "../../_components/TodoList";

const ImportantTodosPage = () => {
  return (
    <Page title="IMPORTANT">
      <DateSelector />

      <TodoList />
    </Page>
  );
};

export default ImportantTodosPage;
