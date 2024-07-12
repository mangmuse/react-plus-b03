import Button from "../Button";
import Input from "../Input";

const MdSharedCalendarForm = () => {
  return (
    <div>
      <Input required label="공유 일정 이름" />
      <Input label="공유 일정 상세" />

      <Button size="lg" className="mt-8 mx-auto w-full">
        공유 캘린더 추가
      </Button>
    </div>
  );
};

export default MdSharedCalendarForm;
