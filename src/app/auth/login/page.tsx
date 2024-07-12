"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { getSupabaseClient } from "@/utils/supabase/client";
import { useUserStore } from "@/store/useasdStore";
import { getUserData } from "@/app/api/supabase/user";


export default function LoginPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const setUser = useUserStore((state) => state.setUser);

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // 기존 오류 메시지 초기화

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      setError("모든 항목을 입력해주세요.");
      return;
    }

    const supabase = getSupabaseClient(); 

    try {
      const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      } else {
        if (data.user) {
          // Supabase에서 사용자 정보 가져오기
          const { data: userData, error: userError } = await getUserData(email);

          if (userError) {
            alert("사용자 정보를 가져오는 데 실패했습니다.");
            console.error("userError:", userError);
          } else {
            // Zustand 상태 업데이트
            setUser(userData.id, userData.email, userData.nickname ?? "");
            alert("로그인 성공");
            router.push("/");
          }
        }
      }
      console.log("login");
      router.push("/todos/today");
    } catch (error) {
      console.error("Login error:", error);
      setError("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-y-2 border-2 w-96 items-center p-4 bg-white rounded shadow-md">
        <div className="w-full flex items-center justify-between mb-4">
          <label htmlFor="email" className="mr-2">이메일</label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            placeholder="이메일을 입력하세요."
            className="border-2 border-gray-300 rounded-md p-1 w-full"
          />
        </div>
        <div className="w-full flex items-center justify-between mb-4">
          <label htmlFor="password" className="mr-2">비밀번호</label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요."
            className="border-2 border-gray-300 rounded-md p-1 w-full"
          />
        </div>
        <div className="w-full p-4 flex flex-col gap-y-2">
          <button
            className="w-full bg-blue-500 text-white p-2 rounded-md">로그인</button>
          <Link href="/auth/signup">
            <button
              type="button"
              className="w-full bg-black text-white p-2 rounded-md">
              회원가입 가기
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}