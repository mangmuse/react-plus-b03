import Image from "next/image";
import Link from "next/link";
//import { useState } from "react";

const SideBar = () => {
  //const [count, setCount] = useState(0);
  return (
    <aside className="fixed w-64 min-h-screen bg-white h-screen">
      <div className="bg-white h-full p-5 drop-shadow-2xl top-0 left-0">
        <p className="font-semibold text-lg">유저 정보</p>
        <div className="mt-6">
          <div className="mb-6">
            <span className="block font-semibold text-xl">TODO</span>
            <ul className="mt-4">
              <li className="flex items-center mb-4">
                <Image
                  src="/icons/TODAY.png"
                  alt="today 아이콘"
                  width={15}
                  height={15}
                />
                <Link href="/todos/today" className="ml-3 flex items-center">
                  TODAY
                  <span className="bg-red-500 text-white ml-2 px-2 py-1 text-xs rounded-lg">
                    2
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
                <Image
                  src="/icons/IMPORTANT.png"
                  alt="important icon"
                  width={15}
                  height={15}
                />
                <Link href="/todos/important" className="ml-3">
                  IMPORTANT
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="block text-xl font-semibold">CALENDAR</p>
            <ul className="mt-4">
              <li className="flex items-center mb-2">
                <Image
                  src="/icons/calendar-check.png"
                  alt="일정보기 icon"
                  width={17}
                  height={17}
                />
                <Link href="/calendar/my" className="ml-3">
                  내 일정보기
                </Link>
              </li>
              <li className="flex items-center mb-2">
                <Image
                  src="/icons/calendar-check.png"
                  alt="일정보기 icon"
                  width={17}
                  height={17}
                />
                <Link href="/calendar/shared" className="ml-3">
                  공유 일정보기
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
