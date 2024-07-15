import React from "react";
import Image from "next/image";

interface UserProfileImageProps {
  imagePreview: string | ArrayBuffer | null;
}
const defaultImageSrc = "/icons/profile/profile-placeholder2.png";
const UserProfileImage: React.FC<UserProfileImageProps> = ({
  imagePreview,
}) => {
  return (
    <div className="mb-2">
      {imagePreview ? (
        <Image
          src={imagePreview as string}
          alt="프로필 미리보기"
          width={50}
          height={50}
          className="w-24 h-24 rounded-full object-cover"
        />
      ) : (
        <Image
          src={defaultImageSrc}
          alt="기본 프로필 이미지"
          width={50}
          height={50}
          className="w-24 h-24 rounded-full object-cover"
        />
      )}
    </div>
  );
};
export default UserProfileImage;