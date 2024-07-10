import Page from "@/components/Page";
import DateSelector from "../../_components/DateSelector";
import TodoList from "../../_components/TodoList";

const TodayTodosPage = () => {
  return (
    <Page title="TODAY">
      <DateSelector />

      <TodoList />
    </Page>
  );
};

export default TodayTodosPage;
