import { createClient } from "@/utils/supabase/server";
import { NextResponse, type NextRequest } from "next/server";

export async function POST (request : NextRequest) {
    const reqData = await request.json();
    const email = reqData.email as string;
    const password = reqData.password as string;

    const supabase = createClient();
    const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });


      if(error) {
        return NextResponse.json({ error: error.message }, {status: 401});
      }

    return NextResponse.json(data.user);
 }