import Image from "next/image";

type DateSelectorProps = {
  // date: string;
  onPrev?: () => void;
  onNext?: () => void;
};

const DateSelector = ({ onPrev, onNext }: DateSelectorProps) => {
  return (
    <div className="flex justify-center gap-x-4 text-xs py-10 font-semibold">
      <button onClick={onPrev}>
        <Image
          src="/ic-arrow-left.png"
          alt="left arrow icon"
          width={6}
          height={6}
        />
      </button>
      {/* 날짜 받아올때 타입 주석 풀고 {date}로 변경~ */}
      <span>2024. 07. 09</span>
      <button onClick={onNext}>
        <Image
          src="/ic-arrow-right.png"
          alt="right arrow icon"
          width={6}
          height={6}
        />
      </button>
    </div>
  );
};

export default DateSelector;
