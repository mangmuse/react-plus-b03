import { TcalendarsResponse } from "@/hooks/useQuery/useCalendarsQuery";
import { TdefaultTodos } from "@/hooks/useQuery/useMyScheduleQuery";
import { TCalendarForm, TDefaultTodo, TTodoForm } from "@/types/scheduler.type";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getCalendars = async () => {
  const res = await fetch(`${BASE_URL}/api/calendars`);

  if (!res.ok) {
    throw new Error("캘린더를 가져오지 못했습니다.");
  }
  const calendars: TcalendarsResponse = await res.json();
  return calendars.calendars || [];
};

export const postCalendar = async (newCalendar: TCalendarForm) => {
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
};

export const getTodos = async (calendarId: string) => {
  const res = await fetch(`${BASE_URL}/api/todos?calendarId=${calendarId}`, {
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("캘린더를 가져오지 못했습니다.");
  }
  const todos = await res.json();
  return todos.todos;
};

export const getDefaultTodos = async () => {
  const res = await fetch(`${BASE_URL}/api/todos/my`);

  if (!res.ok) {
    throw new Error("캘린더를 가져오지 못했습니다.");
  }
  const todos: TdefaultTodos = await res.json();
  return todos.todos || [];
};

export const postTodo = async (newTodo: TTodoForm) => {
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
};

export const postDefaultTodo = async (newTodo: TTodoForm) => {
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
};

export const patchTodo = async (todo: TTodoForm) => {
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
};

export const patchDefaultTodo = async (todo: TDefaultTodo) => {
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
};

export const deleteTodo = async (todoId: TTodoForm) => {
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
};

export const deleteDefaultTodo = async (todoId: TTodoForm["id"]) => {
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
};

export const postParticipant = async (newParticipant: { email: string; calendarId: string }) => {
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
};
