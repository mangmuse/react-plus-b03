"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useasdStore"; // 필요한 상태 관리 훅

const LogoutButton = () => {
  const router = useRouter();
  const { setUser } = useUserStore(); // 상태 초기화를 위한 액션

  const handleLogout = async () => {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (response.ok) {
      setUser(null, null, null, null); // 상태 초기화
      router.push("/auth/login"); // 로그아웃 후 로그인 페이지로 리다이렉트
    } else {
      console.error("Failed to log out");
    }
  };

  return (
    <button onClick={handleLogout} className="bg-slate-900 border rounded-3xl p-2 px-5 text-white">
      로그아웃
    </button>
  );
};

export default LogoutButton;