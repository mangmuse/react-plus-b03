"use client";

import Button from "@/components/Button";
import Page from "@/components/Page";
import { useModal } from "@/services/modal/modal.context";
import TodoDate from "../../_components/TodoDate/TodoDate";
import TodoList from "../../_components/TodoList";
import useMyTodoQuery from "@/hooks/useQuery/useMyTodoQuery";

const TodayTodosPage = () => {
  const modal = useModal();

  return (
    <Page title="TODAY">
      <TodoDate />
      <TodoList />
    </Page>
  );
};

export default TodayTodosPage;
