import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type UserState = {
  id: string | null;
  email: string | null;
  nickname: string | null;
  setUser: (id: string, email: string, nickname: string) => void;
};

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        id: null,
        email: null,
        nickname: null,
        setUser: (id, email, nickname) => set({ id, email, nickname }),
      }),
      {
        name: "user-storage", // key 이름
      },
    ),
  ),
);
