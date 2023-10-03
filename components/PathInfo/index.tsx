import LearningOutcomes from "./LearningOutcomes";
import Description from "./Description";
import Skills from "./Skills";
import Courses from "./Courses";

interface PathInfoProps {
  learning_outcomes: string[];
  description: string;
  skills: string[];
  courses: Course[];
}

const PathInfo: React.FC<PathInfoProps> = ({
  learning_outcomes,
  description,
  skills,
  courses,
}) => {
  const Horizontal = () => (
    <div className="h-px max-w-4xl w-[40px] sm:w-full bg-gray-300" />
  );

  return (
    <div className="flex flex-col gap-6 mt-5">
      <LearningOutcomes learningOutcomes={learning_outcomes} />
      <Horizontal />
      <Description description={description} />
      <Horizontal />
      <div className="flex flex-col gap-4">
        <Skills skills={skills} />
        <Horizontal />
        <div className="flex flex-col gap-4">
          <Courses courses={courses} />
        </div>
      </div>
    </div>
  );
};

export default PathInfo;
