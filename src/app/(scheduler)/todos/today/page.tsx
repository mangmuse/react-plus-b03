"use client";

import Button from "@/components/Button";
import Page from "@/components/Page";
import { useModal } from "@/services/modal/modal.context";
import TodoDate from "../../_components/TodoDate/TodoDate";
import TodoList from "../../_components/TodoList";
import useMyTodoQuery from "@/hooks/useQuery/useMyTodoQuery";

const TodayTodosPage = () => {
  const modal = useModal();

  const handleOpenModal = () => {
    modal.open({ type: "confirm", content: "이건 확인 모달" });
  };

  return (
    <Page title="TODAY">
      <TodoDate />

      <TodoList />

      <Button onClick={handleOpenModal}>modal test</Button>
    </Page>
  );
};

export default TodayTodosPage;
