import { Tables } from "./supabase";

export type TTodoForm = Partial<Tables<"todos">> & {};

export type TTodo = Tables<"todos"> & {
  dateArray: string[];
  nickname?: string;
};

export type TDefaultTodo = Partial<Tables<"default_todos">> & {
  dateArray?: string[];
};

export type TDefaultTodoRes = Tables<"default_todos"> & {
  dateArray: string[];
  nickname: string;
};

export type TCalendarForm = Partial<Tables<"calendars">>;
