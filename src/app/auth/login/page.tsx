"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { getSupabaseClient } from "@/utils/supabase/client";
import { useUserStore } from "@/store/useUserStore";
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
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error("로그인 실패: " + data.error);
      }

      const { data: userData, error: userError } = await getUserData(email);

      if (userError) {
        alert("사용자 정보를 가져오는 데 실패했습니다.");
        console.error("userError:", userError);
      } else {
        // Zustand 상태 업데이트
        setUser(userData.id, userData.email, userData.nickname ?? "", userData.image_url ?? "");
        alert("로그인 성공");
      }

      router.push("/todos/today");
    } catch (error) {
      console.error("Login error:", error);
      setError("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">로그인</h1>
      <div className=" p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-gray-700 font-semibold">
              이메일
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              placeholder="이메일을 입력하세요."
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-gray-700 font-semibold">
              비밀번호
            </label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요."
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300"
          >
            로그인
          </button>
        </form>
        <div className="mt-6 text-center">
          아직 계정이 없으신가요?
          <Link href="/auth/signup" className="underline text-blue-500 hover:text-blue-700 ml-2">
            회원가입하러 가기
          </Link>
        </div>
      </div>
    </div>
  );
}
