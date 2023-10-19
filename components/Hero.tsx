import { formatTime } from "@/utils/formatTime";
import Image from "next/image";

interface HeroProps {
  title: string;
  image: string;
  courses: Course[];
}

const Hero: React.FC<HeroProps> = ({ title, image, courses }) => {
  const sumOfSeconds = () => {
    let totalSeconds = 0;
    courses.forEach((course) => {
      totalSeconds += course.total_hours_in_seconds;
    });
    return totalSeconds;
  };

  const { arabicHours, arabicMinutes } = formatTime(sumOfSeconds());

  return (
    <div
      className="relative bg-transparent rounded-2xl shadow bg-cover 
      bg-no-repeat sm:max-w-[700px] bg-center w-full md:w-[700px] h-[380px] 
      flex items-end p-3 sm:p-4 text-white"
      style={{
        backgroundImage: `url(${image || "/assets/images/course2.png"})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 rounded-2xl" />
      <div className="flex flex-col gap-4 z-10">
        <div>
          <p className=" text-[30px] font-extrabold">{title}</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-1">
            <Image
              src={"/assets/images/lessons.svg"}
              alt="lessons"
              width={16}
              height={16}
            />
            <p className="text-base ">
              <span className="font-bold inline-block ml-1">
                {courses.length}
              </span>
              <span className="font-normal text-sm">دورات تدريبية</span>
            </p>
          </div>
          <div className="flex gap-1">
            <Image
              src={"/assets/images/time.svg"}
              alt="lessons"
              width={16}
              height={16}
            />
            <p className="text-base">
              <span className="font-bold">{`${arabicHours}`}</span>
              <span className=" font-normal text-sm">س</span> :{" "}
              <span className="font-bold">{`${arabicMinutes}`}</span>
              <span className="font-normal text-sm">د</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
