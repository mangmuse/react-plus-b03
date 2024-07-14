import { Tables } from "@/types/supabase";
import { create } from "zustand";

export type todo = Partial<Tables<"todos">>;

type TodoState = {
  selectedTodo: todo | null;
  setSelectedTodo: (todo: todo) => void;
};

const useTodoStore = create<TodoState>((set) => ({
  selectedTodo: null,
  setSelectedTodo: (todo) => set({ selectedTodo: todo }),
}));

export default useTodoStore;
