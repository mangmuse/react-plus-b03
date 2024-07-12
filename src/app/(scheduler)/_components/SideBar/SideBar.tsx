import TestComponent from "@/components/TestComponent";
import Link from "next/link";

const SideBar = () => {
  return (
    <aside className="fixed w-64 min-h-screen bg-white border-slate-400 ">
      <div className="min-h-full px-12 py-6">
        사이드바입니다
        <ul>
          <span className="block text-xs font-semibold py-4">TODO</span>
          <li>
            <Link href="/todos/today">TODAY</Link>
          </li>
          <li>
            <Link href="/todos/important">IMPORTANT</Link>
          </li>

          <span className="block text-xs font-semibold py-4">CALENDAR</span>
          <li>
            <Link href="/calendar/my">내 일정보기</Link>
          </li>
          <li>
            <Link href="/calendar/shared">공유 일정보기</Link>
          </li>
          <li>
            <Link href="/calendar/notshare">공유 없음</Link>
          </li>
        </ul>
      </div>
      <TestComponent />
    </aside>
  );
};

export default SideBar;
