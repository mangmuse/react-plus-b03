"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getSupabaseClient } from '@/utils/supabase/client'; // 클라이언트 사이드에서 Supabase 클라이언트를 가져오는 함수

const Mypage = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);
  const [isNicknameEditable, setIsNicknameEditable] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // 사용자 정보를 가져오는 함수
    const fetchUserProfile = async () => {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.auth.getUser();

      if (data?.user) {
        const { user } = data;
        const { data: profile, error: profileError } = await supabase
          .from('users')
          .select('nickname, email, image_url')
          .eq('id', user.id) // 'id' 필드를 사용하여 사용자를 식별합니다.
          .single();

        if (profileError) {
          console.error('Error fetching user profile:', profileError);
        } else {
          setNickname(profile.nickname);
          setEmail(profile.email);
          setImagePreview(profile.image_url);
        }
      } else if (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      setProfileImage(e.target.files[0]);
    }
  };

  const handleImageRemove = () => {
    setProfileImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.getUser();

    if (data?.user) {
      const userId = data.user.id;

      const profile = {
        email,
        nickname,
        image_url: profileImage ? URL.createObjectURL(profileImage) : ''
      };

      const response = await fetch('/api/auth/mypage', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, profile }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result.message);
        router.push('/todos/today');
      } else {
        console.error(result.error);
      }
    } else if (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">김성준 페이지</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="profileImage" className="block text-gray-700 font-bold mb-2">프로필 사진:</label>
            <input type="file" id="profileImage" accept="image/*" onChange={handleImageChange} />
            <div className="mt-2">
              {imagePreview ? (
                <img src={imagePreview as string} alt="프로필 미리보기" className="w-24 h-24 rounded-full object-cover" />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">미리보기 없음</span>
                </div>
              )}
              {imagePreview && (
                <button
                  type="button"
                  onClick={handleImageRemove}
                  className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  프로필 사진 삭제
                </button>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="nickname" className="block text-gray-700 font-bold mb-2">닉네임:</label>
            <div className="flex">
              <input
                type="text"
                id="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                disabled={!isNicknameEditable}
              />
              <button
                type="button"
                onClick={() => setIsNicknameEditable(!isNicknameEditable)}
                className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              >
                {isNicknameEditable ? '수정 완료' : '닉네임 수정'}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">이메일:</label>
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-200 cursor-not-allowed"
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Mypage;