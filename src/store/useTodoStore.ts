import { Tables } from "@/types/supabase";
import { create } from "zustand";

export type todo = Partial<Tables<"todos">>;

type TodoState = {
  selectedTodo: todo | null;
  setSelectedTodo: (todo: todo) => void;
  calendarId: string | null;
  setCalendarId: (calendarId: string) => void;
};

const useTodoStore = create<TodoState>((set) => ({
  selectedTodo: null,
  setSelectedTodo: (todo) => set({ selectedTodo: todo }),
  calendarId: null,
  setCalendarId: (calendarId: string) => set({ calendarId }),
}));

export default useTodoStore;
