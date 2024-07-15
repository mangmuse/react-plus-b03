"use client";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../useMutation/useScheduleMutation";
import { Tables } from "@/types/supabase";
import { getCalendars } from "@/utils/api/schedule.api";

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
    queryFn: getCalendars,
  });
  return { calendars, error, isPending };
};

export default useCalendarsQuery;
