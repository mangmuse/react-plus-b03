import { create } from "zustand";

export type TDateStore = {
  selectedDate: Date;
  setSelectedDate: (date: Date | ((prevDate: Date) => Date)) => void;
};

const useDateStore = create<TDateStore>((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (date) => {
    set((state) => ({
      selectedDate: typeof date === "function" ? date(state.selectedDate) : date,
    }));
  },
}));

export default useDateStore;
