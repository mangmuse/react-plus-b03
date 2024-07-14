"use client";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../useMutation/useScheduleMutation";
import { Tables } from "@/types/supabase";

export type TCalendar = Tables<"calendars"> & {
  participantCount: number;
  ownerNickname: {
    nickname: string;
  };
};

export type TcalendarsResponse = {
  calendars: TCalendar[];
};

const useCalendarsQuery = () => {
  const {
    data: calendars,
    error,
    isPending,
  } = useQuery<TCalendar[], Error>({
    queryKey: ["calendars"],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/api/calendars`);

      if (!res.ok) {
        throw new Error("캘린더를 가져오지 못했습니다.");
      }
      const calendars: TcalendarsResponse = await res.json();
      return calendars.calendars || [];
    },
  });
  return { calendars, error, isPending };
};

export default useCalendarsQuery;
