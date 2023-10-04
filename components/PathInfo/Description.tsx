import Heading from "./Heading";

interface DescriptionProps {
  description: string;
}
const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <div className="flex flex-col gap-4">
      <Heading title="تفاصيل المسار" />
      <p className="sm:max-w-[1088px] text-base text-normalGray text-justify">
        {description}.
      </p>
    </div>
  );
};

export default Description;
