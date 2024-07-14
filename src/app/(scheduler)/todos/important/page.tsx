import Page from "@/components/Page";
import Calendar from "../../_components/Calendar";
import TodoDate from "../../_components/TodoDate/TodoDate";
import TodoList from "../../_components/TodoList";

const ImportantTodosPage = () => {
  return (
    <Page title="IMPORTANT">
      <section className="flex flex-col items-center">
        <TodoDate />
        <TodoList isImportantPage={true} />
      </section>
    </Page>
  );
};

export default ImportantTodosPage;
