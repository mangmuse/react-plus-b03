"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { getSupabaseClient } from "@/utils/supabase/client";

export default function LoginPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

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

    const supabase = getSupabaseClient(); // 싱글톤 클라이언트 사용

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      router.replace("/");
    } catch (error) {
      console.error("Login error:", error);
      setError("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-y-2 border-2 w-96 items-center">
      <div className="w-full flex items-center justify-between p-4">
        <label htmlFor="email" className="mr-2">이메일</label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          placeholder="이메일을 입력하세요."
          className="border-2 border-gray-300 rounded-md p-1"
        />
      </div>
      <div className="w-full flex items-center justify-between p-4">
        <label htmlFor="password" className="mr-2">비밀번호</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          placeholder="비밀번호를 입력하세요."
          className="border-2 border-gray-300 rounded-md p-1"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
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
  );
}