import { Tables } from "@/types/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  TCalendarForm,
  TDefaultTodoRes,
  TDefaultTodo,
  TTodo,
  TTodoForm,
} from "@/types/scheduler.type";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const useScheduleMutation = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: createCalendar } = useMutation({
    mutationFn: async (newCalendar: TCalendarForm) => {
      const res = await fetch(`${BASE_URL}/api/calendar`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newCalendar),
      });
      if (!res.ok) {
        throw new Error("캘린더 생성 실패");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["calendars"] });
    },
  });

  const { mutateAsync: addTodo } = useMutation({
    mutationFn: async (newTodo: TTodoForm) => {
      const res = await fetch(`${BASE_URL}/api/todo`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      if (!res.ok) {
        throw new Error("Todo 생성 실패");
      }
      return res.json();
    },
    onSuccess: (data, variables) => {
      const calendarId = variables.calendarId;
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const { mutateAsync: addDefaultTodo } = useMutation({
    mutationFn: async (newTodo: TTodoForm) => {
      const res = await fetch(`${BASE_URL}/api/todo/my`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      if (!res.ok) {
        throw new Error("Todo 생성 실패");
      }
      return res.json();
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["default_todos"] });
    },
  });

  const { mutateAsync: updateTodo } = useMutation({
    mutationFn: async (todo: TTodoForm) => {
      const res = await fetch(`${BASE_URL}/api/todo?todoId=${todo.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(todo),
      });

      if (!res.ok) {
        throw new Error("Todo 수정 실패");
      }

      return res.json();
    },
    onMutate: async (newTodo) => {
      const calendarId = newTodo?.calendarId;
      console.log(calendarId);
      await queryClient.cancelQueries({ queryKey: ["todos", { calendarId }] });

      const previousTodos = queryClient.getQueryData<TTodo[]>(["todos", { calendarId }]);

      if (previousTodos) {
        const updatedTodos = previousTodos.map((todo) =>
          todo.id === newTodo.id ? { ...todo, ...newTodo } : todo,
        );
        queryClient.setQueryData<TTodo[]>(["todos", { calendarId }], updatedTodos);
      }

      return { previousTodos, calendarId };
    },
    onError: (err, newTodo, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(
          ["todos", { calendarId: context.calendarId }],
          context.previousTodos,
        );
      }
    },
    onSettled: (newTodo, error, context) => {
      console.log("onSettled triggered", newTodo);
      queryClient.invalidateQueries({ queryKey: ["todos", { calendarId: context?.calendarId }] });
    },
  });

  const { mutateAsync: updateDefaultTodo } = useMutation({
    mutationFn: async (todo: TDefaultTodo) => {
      const res = await fetch(`${BASE_URL}/api/todo/my?todoId=${todo.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      if (!res.ok) {
        throw new Error("defaultTodo 수정 실패");
      }
      return res.json();
    },
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ["default_todos"] });

      const previousTodos = queryClient.getQueryData<TDefaultTodo[]>(["default_todos"]);

      if (previousTodos) {
        queryClient.setQueryData(["default_todos"], (oldTodos: TDefaultTodoRes[]) =>
          oldTodos.map((todo) => (todo.id === newTodo.id ? { ...todo, ...newTodo } : todo)),
        );
      }

      return { previousTodos };
    },
    onError: (err, newTodo, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(["default_todos"], context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["default_todos"] });
    },
  });

  const { mutateAsync: deleteTodo } = useMutation({
    mutationFn: async (todoId: TTodoForm) => {
      const res = await fetch(`${BASE_URL}/api/todo`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(todoId),
      });
      if (!res.ok) {
        throw new Error("Todo 삭제 실패");
      }
      return res.json();
    },
    onMutate: async (toBeDeleted) => {
      const calendarId = toBeDeleted.calendarId;

      console.log("onMutate start", toBeDeleted);
      await queryClient.cancelQueries({
        queryKey: ["todos", { calendarId: toBeDeleted.calendarId }],
      });

      const previousTodos = queryClient.getQueryData<TTodo[]>([
        "todos",
        { calendarId: toBeDeleted.calendarId },
      ]);
      console.log("previousTodos", previousTodos);

      queryClient.setQueryData<TTodo[]>(["todos", { calendarId: toBeDeleted.calendarId }], (old) =>
        old ? old.filter((todo) => todo.id !== toBeDeleted.id) : [],
      );

      console.log("onMutate end");

      return { previousTodos };
    },
    onError: (err, toBeDeleted, context) => {
      console.error("onError", err);
      queryClient.setQueryData(["todos"], context?.previousTodos);
    },
    onSettled: (toBeDeleted) => {
      console.log("onSettled");
      queryClient.invalidateQueries({
        queryKey: ["todos", { calendarId: toBeDeleted.calendarId }],
      });
    },
    onSuccess: (toBeDeleted) => {
      console.log("onSuccess");
      queryClient.invalidateQueries({
        queryKey: ["todos", { calendarId: toBeDeleted.calendarId }],
      });
    },
  });

  const { mutateAsync: deleteDefaultTodo } = useMutation({
    mutationFn: async (todoId: TTodoForm["id"]) => {
      const res = await fetch(`${BASE_URL}/api/todo/my`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id: todoId }),
      });
      if (!res.ok) {
        throw new Error("Todo 삭제 실패");
      }
      return res.json();
    },
    onMutate: async (todoId) => {
      await queryClient.cancelQueries({ queryKey: ["default_todos"] });

      const previousTodos = queryClient.getQueryData<TTodo>(["default_todos"]);

      queryClient.setQueryData<Tables<"todos">[]>(["default_todos"], (old) =>
        old ? old.filter((todo) => todo.id !== todoId) : [],
      );

      return { previousTodos, todoId };
    },
    onError: (err, todoId, context) => {
      queryClient.setQueryData(["default_todos"], context?.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["default_todos"] });
    },
  });

  const { mutateAsync: addParticipant } = useMutation({
    mutationFn: async (newParticipant: { email: string; calendarId: string }) => {
      const res = await fetch(`${BASE_URL}/api/calendar/participant`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newParticipant),
      });
      if (!res.ok) {
        res.status === 409
          ? alert("이미 존재하는 사용자입니다.")
          : alert("사용자를 추가하지 못했습니다.");
      }
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["calendars"] });
    },
  });

  return {
    createCalendar,
    addTodo,
    addDefaultTodo,
    updateTodo,
    updateDefaultTodo,
    deleteTodo,
    deleteDefaultTodo,
    addParticipant,
  };
};

export default useScheduleMutation;
