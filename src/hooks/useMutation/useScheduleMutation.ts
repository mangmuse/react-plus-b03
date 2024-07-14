import { Tables } from "@/types/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TDefaultTodo } from "../useQuery/useMyScheduleQuery";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const useScheduleMutation = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: createCalendar } = useMutation({
    mutationFn: async (newCalendar: Partial<Tables<"calendars">>) => {
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
    mutationFn: async (newTodo: Partial<Tables<"todos">>) => {
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
    mutationFn: async (newTodo: Partial<Tables<"todos">>) => {
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
    mutationFn: async (todo: Partial<Tables<"todos">>) => {
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
    onSuccess: (todo) => {
      queryClient.invalidateQueries({ queryKey: ["todos", { todoId: todo.id }] });
    },
  });

  const { mutateAsync: updateDefaultTodo } = useMutation({
    mutationFn: async (todo: Partial<Tables<"todos">>) => {
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["default_todos"] });
    },
  });

  const { mutateAsync: deleteTodo } = useMutation({
    mutationFn: async (todoId: Partial<Tables<"todos">>["id"]) => {
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const { mutateAsync: deleteDefaultTodo } = useMutation({
    mutationFn: async (todoId: Partial<Tables<"todos">>["id"]) => {
      const res = await fetch(`${BASE_URL}/api/todo/my`, {
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
    onSuccess: () => {
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

  const { mutate: updateIsImportant } = useMutation({
    mutationFn: async (todo: Partial<Tables<"todos">>) => {
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
      await queryClient.cancelQueries({ queryKey: ["default_todos", { todoId: newTodo.id }] });

      const previousTodo = queryClient.getQueryData<TDefaultTodo>([
        "default_todos",
        { todoId: newTodo.id },
      ]);

      queryClient.setQueryData<TDefaultTodo>(
        ["default_todos", { todoId: newTodo.id }],
        (old: any) => {
          if (old) {
            return { ...old, isImportant: newTodo.isImportant };
          }
          return old;
        },
      );

      return { previousTodo };
    },

    onError: (err, newTodo, context) => {
      if (context?.previousTodo) {
        queryClient.setQueryData(["default_todos", { todoId: newTodo.id }], context.previousTodo);
      }
    },
    onSettled: (newTodo) => {
      queryClient.invalidateQueries({ queryKey: ["default_todos", { todoId: newTodo?.id }] });
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
    updateIsImportant,
    addParticipant,
  };
};

export default useScheduleMutation;
