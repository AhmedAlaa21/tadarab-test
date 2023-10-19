import Heading from "./Heading";

interface SkillProps {
  skills: string[];
}
const Skills: React.FC<SkillProps> = ({ skills }) => {
  return (
    <>
      <Heading title="المهارات المستفادة" />
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            className="cursor-pointer bg-black bg-opacity-5 text-darkGray 
              p-1.5 rounded-lg font-bold text-[12px]"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
};

export default Skills;
