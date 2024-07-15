"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import UserProfileImage from "../_components/UserProfileImage/UserProfileImage";
import { useUserStore } from "@/store/useasdStore";

const Mypage = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);
  const [isNicknameEditable, setIsNicknameEditable] = useState(false);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const router = useRouter();

  const { setUser, id } = useUserStore((state) => ({
    setUser: state.setUser,
    id: state.id,
  }));

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await axios.get("/api/mypage", { params: { userId: id } });
        const profile = response.data;
        if (profile) {
          setNickname(profile.nickname);
          setEmail(profile.email);
          setProfileImage(profile.image_url);
          setImagePreview(profile.image_url);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    getUserProfile();
  }, [id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setProfileImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setProfileImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const profile = {
      email,
      nickname,
      image_url: profileImage,
    };
    try {
      const response = await axios.post("/api/mypage", {
        userId: id,
        profile: profile,
      });
      const success = response.data;
      if (success) {
        console.log("Profile updated successfully");
        if (id) {
          setUser(id, email, nickname, profileImage || ""); 
        } else {
          console.error("User ID is not available.");
        }
        router.push("/todos/today");
      } else {
        console.error("Error updating profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">마이페이지</h1>
      <UserProfileImage imagePreview={imagePreview} />
      <div className="mt-4">
        {isEditingImage ? (
          <>
            <input 
              type="file" 
              id="profileImage" 
              accept="image/*" 
              onChange={handleImageChange} 
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            />
            {imagePreview && (
              <button
                type="button"
                onClick={handleImageRemove}
                className="mt-2 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                프로필 사진 삭제
              </button>
            )}
          </>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditingImage(true)}
            className="mt-2 bg-slate-900 hover:bg-gray-700 text-white  py-2 px-4 rounded-3xl"
          >
            프로필 사진 수정
          </button>
        )}
      </div>
      <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="nickname" className="block text-gray-700 font-bold mb-2">
            닉네임:
          </label>
          <div className="flex">
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="border rounded-3xl py-2 px-3 text-gray-700 leading-tight"
              disabled={!isNicknameEditable}
              placeholder="닉네임을 입력해주세요"
            />
            <button
              type="button"
              onClick={() => setIsNicknameEditable(!isNicknameEditable)}
              className="ml-2 bg-slate-900 hover:bg-gray-700 text-white  py-2 px-4 rounded-3xl"
            >
              {isNicknameEditable ? "수정 완료" : "닉네임 수정"}
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            이메일:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            disabled
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
            placeholder="이메일을 입력해주세요"
          />
        </div>
        <button
          type="submit"
          className="bg-slate-900 hover:bg-gray-700 text-white  py-2 px-4 rounded-3xl"
        >
          프로필 업데이트
        </button>
      </form>
    </div>
  );
};

export default Mypage;