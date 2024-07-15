"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getSupabaseClient } from "@/utils/supabase/client"; // Supabase 클라이언트 가져오기

export default function SignUpPage() {
	const [email, setEmail] = useState("");
	const [nickname, setNickname] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [error, setError] = useState({
		password: "",
		passwordConfirm: "",
	});

	const router = useRouter();

	const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
		if (e.target.value.length < 6) {
			setError({
				...error,
				password: "비밀번호는 최소 6자 이상입니다.",
			});
		} else {
			setError({
				...error,
				password: "",
			});
		}
	};

	const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPasswordConfirm(e.target.value);
		if (e.target.value.length < 6) {
			setError({
				...error,
				passwordConfirm: "비밀번호 확인은 최소 6자 이상입니다.",
			});
		} else {
			setError({
				...error,
				passwordConfirm: "",
			});
		}
	};

	const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNickname(e.target.value);
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (email === "" || password === "" || passwordConfirm === "") {
			alert("모든 항목을 입력해주세요.");
			return;
		}

		if (password !== passwordConfirm) {
			alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
			return;
		}

		const supabase = getSupabaseClient();

		const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
			email,
			password,
			options: {
				data: {
					nickname: nickname,
				},
			},
		});

		if (signUpError) {
			return alert(signUpError.message);
		}

		// 사용자 데이터 업데이트
		const { error: updateError } = await supabase.from('users').insert([
			{ id: signUpData.user?.id, email, nickname },
		]);

		if (updateError) {
			return alert(updateError.message);
		}

		alert("회원가입이 완료되었습니다.");
		router.replace("/"); // 뒤로가기 시 회원가입 페이지로 이동 X
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 px-4">
		  <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">회원가입</h1>
		  <form onSubmit={onSubmit} className="p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
			<div className="flex flex-col">
			  <label htmlFor="email" className="mb-2 text-gray-700 font-semibold">이메일</label>
			  <input
				type="email"
				id="email"
				value={email}
				onChange={onChangeEmail}
				placeholder="이메일을 입력하세요."
				className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
			  />
			</div>
			<div className="flex flex-col">
			  <label htmlFor="nickname" className="mb-2 text-gray-700 font-semibold">닉네임</label>
			  <input
				type="text"
				id="nickname"
				value={nickname}
				onChange={onChangeNickname}
				placeholder="닉네임을 입력하세요."
				className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
			  />
			</div>
			<div className="flex flex-col">
			  <label htmlFor="password" className="mb-2 text-gray-700 font-semibold">비밀번호</label>
			  <input
				type="password"
				id="password"
				value={password}
				onChange={onChangePassword}
				placeholder="비밀번호를 입력하세요."
				className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
			  />
			</div>
			{error.password && <p className="text-red-500">{error.password}</p>}
			<div className="flex flex-col">
			  <label htmlFor="passwordConfirm" className="mb-2 text-gray-700 font-semibold">비밀번호 확인</label>
			  <input
				type="password"
				id="passwordConfirm"
				value={passwordConfirm}
				onChange={onChangePasswordConfirm}
				placeholder="비밀번호를 다시 입력하세요."
				className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
			  />
			</div>
			{error.passwordConfirm && <p className="text-red-500">{error.passwordConfirm}</p>}
			<button type="submit" className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300">
				가입하기
			</button>
		  <div className="mt-6 text-center">
		  계정이 있으신가요?
        <Link href="/auth/login" className="underline text-blue-500 hover:text-blue-700 ml-2">
           로그인하러 가기
        </Link>
		  </div>
		  </form>
		</div>
	  );
	};
	