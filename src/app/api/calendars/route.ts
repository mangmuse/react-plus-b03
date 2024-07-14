import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { TCalendar } from "@/hooks/useQuery/useCalendarsQuery";
import { Tables } from "@/types/supabase";

export async function GET(req: NextRequest) {
  //
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (user && !userError) {
    const { id: userId } = user;
    if (userError) return NextResponse.json(";ㅅ;");
    const { data: calendarIds, error: calendarError } = await supabase
      .from("participants")
      .select("calendarId")
      .eq("userId", userId);

    if (calendarIds && calendarIds.length > 0) {
      const calendarPromises = calendarIds.map(async (item: { calendarId: string }) => {
        const { data: calendarData, error } = await supabase
          .from("calendars")
          .select("*")
          .eq("id", item.calendarId)
          .single();

        if (error) {
          console.error(error.message);
          return null;
        }

        const { data: participantData, error: countError } = await supabase
          .from("participants")
          .select("id")
          .eq("calendarId", item.calendarId);

        if (countError) {
          console.error(countError.message);
          return null;
        }

        const { data: ownerNickname, error: userError } = await supabase
          .from("users")
          .select("nickname")
          .eq("id", userId)
          .single();

        if (userError) {
          return NextResponse.json({ error: "닉네임을 가져오지 못했습니다" });
        }

        const participantCount = participantData.length;

        return { ...calendarData, participantCount, ownerNickname } as TCalendar;
      });

      const calendarsData = await Promise.all(calendarPromises);

      return NextResponse.json({ calendars: calendarsData });
    }
    if (calendarError) {
      console.error(calendarError.message);
      return NextResponse.json(calendarError);
    }
  }

  return NextResponse.json(";ㅅ;");
}
