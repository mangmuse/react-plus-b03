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
		<div className="flex items-center justify-center min-h-screen">
			<form
				onSubmit={onSubmit}
				className="flex flex-col gap-y-2 border-2 w-96 items-center p-4 bg-white rounded shadow-md"
			>
				<div className="w-full flex items-center justify-between mb-4">
					<label htmlFor="email" className="mr-2">
						이메일
					</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={onChangeEmail}
						placeholder="이메일을 입력하세요."
						className="border-2 border-gray-300 rounded-md p-1 w-full"
					/>
				</div>
				<div className="w-full flex items-center justify-between mb-4">
					<label htmlFor="nickname" className="mr-2">
						닉네임
					</label>
					<input
						type="text"
						id="nickname"
						value={nickname}
						onChange={onChangeNickname}
						placeholder="닉네임을 입력하세요."
						className="border-2 border-gray-300 rounded-md p-1 w-full"
					/>
				</div>
				<div className="w-full flex items-center justify-between mb-4">
					<label htmlFor="password" className="mr-2">
						비밀번호
					</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={onChangePassword}
						placeholder="비밀번호를 입력하세요."
						className="border-2 border-gray-300 rounded-md p-1 w-full"
					/>
				</div>
				{error.password && <p className="text-red-500">{error.password}</p>}
				<div className="w-full flex items-center justify-between mb-4">
					<label htmlFor="passwordConfirm" className="mr-2">
						비밀번호 확인
					</label>
					<input
						type="password"
						id="passwordConfirm"
						value={passwordConfirm}
						onChange={onChangePasswordConfirm}
						placeholder="비밀번호를 입력하세요."
						className="border-2 border-gray-300 rounded-md p-1 w-full"
					/>
				</div>
				{error.passwordConfirm && (
					<p className="text-red-500">{error.passwordConfirm}</p>
				)}
				<div className="w-full p-4 flex flex-col gap-y-2">
					<button className="w-full bg-blue-500 text-white p-2 rounded-md">
						회원가입
					</button>
					<Link href="/auth/login">
						<button type="button" className="w-full bg-black text-white p-2 rounded-md">
							로그인하러 가기
						</button>
					</Link>
				</div>
			</form>
		</div>
	);
}