"use client";

import Button from "@/components/Button";
import Page from "@/components/Page";
import { useModal } from "@/services/modal/modal.context";
import TodoDate from "../../_components/TodoDate/TodoDate";
import TodoList from "../../_components/TodoList";

const TodayTodosPage = () => {
  return (
    <Page title="TODAY">
      <TodoDate />
      <TodoList />
    </Page>
  );
};

export default TodayTodosPage;
