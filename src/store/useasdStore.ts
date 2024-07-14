import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type UserState = {
  id: string | null;
  email: string | null;
  nickname: string | null;
  image_url: string | null;
  setUser: (id: string, email: string, nickname: string, image_url: string) => void;
};

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        id: null,
        email: null,
        nickname: null,
        image_url: null,
        setUser: (id, email, nickname, image_url) => set({ id, email, nickname, image_url }),
      }),
      {
        name: "user-storage", 
      },
    ),
  ),
);





