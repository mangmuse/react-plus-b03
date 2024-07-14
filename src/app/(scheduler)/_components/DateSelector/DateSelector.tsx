import { format } from "date-fns";
import Image from "next/image";

type DateSelectorProps = {
  selectedDate: Date;
  onPrev: () => void;
  onNext: () => void;
};

const DateSelector = ({ selectedDate, onPrev, onNext }: DateSelectorProps) => {
  return (
    <div className="flex justify-center gap-x-6 text-xs pt-6 pb-12 font-semibold">
      <button onClick={onPrev}>
        <Image src="/ic-arrow-left.png" alt="left arrow icon" width={6} height={6} />
      </button>
      <span className="text-sm">{format(selectedDate, "yyyy. MM. dd")}</span>
      <button onClick={onNext}>
        <Image src="/ic-arrow-right.png" alt="right arrow icon" width={6} height={6} />
      </button>
    </div>
  );
};

export default DateSelector;
