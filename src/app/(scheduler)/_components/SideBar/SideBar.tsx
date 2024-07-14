"use client";
import Image from "next/image";
import TestComponent from "@/components/TestComponent";
import Link from "next/link";
import useMyScheduleQuery from "@/hooks/useQuery/useMyScheduleQuery";

const SideBar = () => {
  const { todos, isPending, error } = useMyScheduleQuery();

  return (
    <aside className="fixed w-64 min-h-screen bg-white h-screen">
      <div className=" bg-white h-full p-5 drop-shadow-2xl top-0 left-0">
        <div className="flex items-center">
          <p className="bg-white border rounded-3xl text-xs w-12 h-12">
            <Image
              src="/icons/sidebar/ic-user-image.png"
              alt=""
              width={15}
              height={15}
              className="mt-4 ml-3.5"
            />
          </p>
          <div className="ml-4">

            <ul className="flex flex-col">
              <li className="flex items-center gap-1">
                <Image src="/icons/sidebar/ic-user-page.png" alt="" width={17} height={10} />
                <Link href="">마이페이지</Link>
              </li>
              <li className="font-semibold text-center">유저 정보</li>
            </ul>

          </div>
        </div>
        <div className="mt-6 ml-7">
          <div className="mb-6">
            <span className="block font-semibold text-xl">TODO </span>
            <ul className="mt-4">
              <li className="flex items-center mb-4">
                <Image
                  src="/icons/sidebar/ic-today.png"
                  alt="today 아이콘"
                  width={15}
                  height={15}
                />
                <Link href="/todos/today" className="ml-3 flex items-center">
                  TODAY
                  {todos && (
                    <span className="bg-red-500 text-white ml-2 px-2 py-1 text-xs rounded-lg">
                      {todos.length}
                    </span>
                  )}
                </Link>
              </li>
              <li className="flex items-center">
                <Image
                  src="/icons/sidebar/ic-important.png"
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
                  src="/icons/sidebar/ic-calendar-check.png"
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
                  src="/icons/sidebar/ic-calendar-check.png"
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
          <div className="flex gap-3 absolute bottom-10 right-16">
            <button className="bg-slate-900 border rounded-3xl p-2 px-5 text-white flex gap-3 items-center">
              로그아웃
              <Image src="/icons/sidebar/ic-logout.png" alt="" width={17} height={17} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
