import Image from "next/image";
import Heading from "./Heading";

interface LearningOutcomesProps {
  learningOutcomes: string[];
}
const LearningOutcomes: React.FC<LearningOutcomesProps> = ({
  learningOutcomes,
}) => {
  return (
    <>
      <Heading title="ماذا سوف تتعلم في هذا المسار؟" />
      <ul className="list-none flex flex-col gap-4">
        {learningOutcomes.map((outcome) => (
          <li className="flex gap-2" key={outcome}>
            <Image
              src={"/assets/images/Check.svg"}
              alt="learning"
              width={15.63}
              height={12}
            />
            <p className="text-base text-darkGray font-medium">{outcome}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LearningOutcomes;
