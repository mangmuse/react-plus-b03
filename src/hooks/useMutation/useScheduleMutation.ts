import { Tables } from "@/types/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  TCalendarForm,
  TDefaultTodoRes,
  TDefaultTodo,
  TTodo,
  TTodoForm,
} from "@/types/scheduler.type";
import {
  deleteDefaultTodo,
  deleteTodo,
  patchDefaultTodo,
  patchTodo,
  postCalendar,
  postDefaultTodo,
  postParticipant,
  postTodo,
} from "@/utils/api/schedule.api";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const useScheduleMutation = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: addCalendar } = useMutation({
    mutationFn: (newCalendar: TCalendarForm) => postCalendar(newCalendar),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["calendars"] });
    },
  });

  const { mutateAsync: addTodo } = useMutation({
    mutationFn: (newTodo: TTodoForm) => postTodo(newTodo),

    onSuccess: (data, variables) => {
      const calendarId = variables.calendarId;
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const { mutateAsync: addDefaultTodo } = useMutation({
    mutationFn: (newTodo: TTodoForm) => postDefaultTodo(newTodo),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["default_todos"] });
    },
  });

  const { mutateAsync: updateTodo } = useMutation({
    mutationFn: (todo: TTodoForm) => patchTodo(todo),
    onMutate: async (newTodo) => {
      const calendarId = newTodo?.calendarId;
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
      queryClient.invalidateQueries({ queryKey: ["todos", { calendarId: context?.calendarId }] });
    },
  });

  const { mutateAsync: updateDefaultTodo } = useMutation({
    mutationFn: (todo: TDefaultTodo) => patchDefaultTodo(todo),
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

  const { mutateAsync: removeTodo } = useMutation({
    mutationFn: (todoId: TTodoForm) => deleteTodo(todoId),
    onMutate: async (toBeDeleted) => {
      const calendarId = toBeDeleted.calendarId;

      await queryClient.cancelQueries({
        queryKey: ["todos", { calendarId: toBeDeleted.calendarId }],
      });

      const previousTodos = queryClient.getQueryData<TTodo[]>([
        "todos",
        { calendarId: toBeDeleted.calendarId },
      ]);

      queryClient.setQueryData<TTodo[]>(["todos", { calendarId: toBeDeleted.calendarId }], (old) =>
        old ? old.filter((todo) => todo.id !== toBeDeleted.id) : [],
      );

      return { previousTodos };
    },

    onError: (err, toBeDeleted, context) => {
      console.error("onError", err);
      queryClient.setQueryData(["todos"], context?.previousTodos);
    },
    onSettled: (toBeDeleted) => {
      queryClient.invalidateQueries({
        queryKey: ["todos", { calendarId: toBeDeleted.calendarId }],
      });
    },
    onSuccess: (toBeDeleted) => {
      queryClient.invalidateQueries({
        queryKey: ["todos", { calendarId: toBeDeleted.calendarId }],
      });
    },
  });

  const { mutateAsync: removeDefaultTodo } = useMutation({
    mutationFn: (todoId: TTodoForm["id"]) => deleteDefaultTodo(todoId),
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
    mutationFn: (newParticipant: { email: string; calendarId: string }) =>
      postParticipant(newParticipant),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["calendars"] });
    },
  });

  return {
    createCalendar: addCalendar,
    addTodo,
    addDefaultTodo,
    updateTodo,
    updateDefaultTodo,
    removeTodo,
    removeDefaultTodo,

    addParticipant,
  };
};

export default useScheduleMutation;
