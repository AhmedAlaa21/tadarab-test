import Image from "next/image";
import Progress from "./Progress";

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
    <div className="h-px max-w-4xl w-[40px]  sm:w-full  bg-gray-300" />
  );

  return (
    <div className="flex flex-col gap-6 mt-5">
      <h2 className="font-extrabold text-2xl">ماذا سوف تتعلم في هذا المسار؟</h2>
      <ul className="list-none flex flex-col gap-4">
        {learning_outcomes.map((outcome) => (
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
      <Horizontal />
      <div className="flex flex-col gap-4">
        <h2 className="font-extrabold text-2xl text-justify">تفاصيل المسار</h2>
        <p className="sm:max-w-4xl text-base text-normalGray text-justify">
          {description}.
        </p>
      </div>
      <Horizontal />
      <div className="flex flex-col gap-4">
        <h2 className="font-extrabold text-2xl text-justify">
          المهارات المستفادة
        </h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              className="bg-black bg-opacity-5 text-darkGray 
              p-3 rounded-lg font-bold text-sm"
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>
        <Horizontal />
        <div className="flex flex-col gap-4">
          <h2 className="font-extrabold text-2xl text-justify">
            دورات المسار ({courses.length})
          </h2>
          <div className="flex flex-col gap-6">
            {courses.map((course) => (
              <div
                className="bg-white shadow rounded-lg p-5 flex flex-col gap-6 items-center
               sm:flex-row sm:gap-0 sm sm:justify-between w-full sm:max-w-4xl"
              >
                <div className="flex  items-center gap-6">
                  <div>
                    <Image
                      src={course.image}
                      width={180}
                      height={120}
                      className="rounded-lg"
                      alt={course.title}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div
                      className="flex items-center justify-center text-xs bg-[#C15258] text-center text-white
                  font-bold w-[100px] h-10 p-4 rounded-full"
                    >
                      {course.category}
                    </div>
                    <p className="font-extrabold text-[18px] text-black">
                      {course.title}
                    </p>
                    <div className="flex gap-2 items-center">
                      <Progress progress={course.progress_percentage} />
                      <p className="text-base text-normalGray">
                        {course.progress_percentage}%{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="w-[260px] h-[60px] rounded-lg bg-red flex
            items-center justify-center text-center text-white font-bold text-base"
                >
                  {course.progress_percentage === 100 ? (
                    <p>أعرض شهادة الدورة</p>
                  ) : course.progress_percentage > 0 &&
                    course.progress_percentage < 100 ? (
                    <p>أكمل مشاهدة الدورة</p>
                  ) : (
                    <p>يجب إتمام الدورات السابقة لبدء الدورة</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathInfo;
