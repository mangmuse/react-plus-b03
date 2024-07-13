"use client";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../useMutation/useScheduleMutation";
import { useUserStore } from "@/store/useasdStore";

export type calendars = {
  calendars: {
    createdAt: string;
    description: string;
    id: string;
    name: string;
    ownerId: string;
    participantCount: number;
  }[];
};

const useCalendarsQuery = () => {
  const { id } = useUserStore();
  const {
    data: calendars,
    error,
    isPending,
  } = useQuery<calendars["calendars"], Error>({
    queryKey: ["calendars"],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/api/calendars`);

      if (!res.ok) {
        throw new Error("캘린더를 가져오지 못했습니다.");
      }
      const calendars: calendars = await res.json();
      return calendars.calendars || [];
    },
  });
  return { calendars, error, isPending };
};

export default useCalendarsQuery;
