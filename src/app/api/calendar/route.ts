import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: NextRequest) {
  const calendarContent = await req.json();
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (user && !userError) {
    const { id: userId } = user;
    const newCalendar = {
      ...calendarContent,
      ownerId: userId,
    };
    const { status: insertStatus } = await supabase.from("calendars").insert(newCalendar).single();

    return NextResponse.json(insertStatus);
  }

  return NextResponse.json(";ㅅ;", { status: 500 });
}
