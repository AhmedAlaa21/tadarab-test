import Image from "next/image";
import Progress from "../Progress";
import { formatTime } from "@/utils/formatTime";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const {
    title,
    image,
    progress_percentage,
    category,
    number_of_lessons,
    total_hours_in_seconds,
    trainer_image,
    trainer_name,
  } = course;

  const { arabicHours, arabicMinutes } = formatTime(total_hours_in_seconds);

  const ProgressionDecision = (progress_percentage: number) => {
    if (progress_percentage === 100) {
      return (
        <div
          className="flex items-center justify-center text-base text-red bg-red bg-opacity-10
          text-center font-bold gap-4 w-[260px] h-[60px] p-4 rounded-lg cursor-pointer"
        >
          <Image
            src={"/assets/images/certificate.svg"}
            width={22.27}
            height={20}
            alt="certificate"
          />
          <p>أعرض شهادة الدورة</p>
        </div>
      );
    } else if (progress_percentage > 0 && progress_percentage < 100) {
      return (
        <div
          className="flex items-center justify-center text-base bg-red
           text-center text-white font-bold w-[260px] h-[60px] gap-4 p-4 rounded-lg cursor-pointer"
        >
          <Image
            src={"/assets/images/play.svg"}
            width={22.27}
            height={20}
            alt="play"
          />
          <p>أكمل مشاهدة الدورة</p>
        </div>
      );
    } else {
      return (
        <div
          className="flex items-center justify-center text-xs bg-black bg-opacity-5 text-center text-white font-bold 
        w-[260px] h-[60px] gap-4 p-4 rounded-lg cursor-pointer"
        >
          <Image
            src={"/assets/images/lock-solid.svg"}
            width={22.27}
            height={20}
            alt="lock"
          />
          <div className="flex flex-col justify-start items-start">
            <p className="text-sm text-black font-extrabold">دورة مغلقة</p>
            <p className="text-xs text-[#555555] font-normal">
              يجب إتمام الدورات السابقة لبدء الدورة
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className={`bg-white shadow rounded-lg p-5 flex flex-col gap-6 items-center
        md:flex-row lg:gap-0 md:justify-between w-full lg:max-w-6xl md:max-w-4xl
        ${
          progress_percentage === 0
            ? "cursor-not-allowed bg-[#222222] bg-opacity-[2%]"
            : "cursor-pointer transition hover:bg-gray-300 hover:bg-opacity-5"
        }`}
    >
      <div className=" w-full md:max-w-lg lg:w-auto flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div className="relative rounded-md w-[300px] md:w-[180px] h-[120px] overflow-hidden aspect-video">
          <Image
            src={image}
            fill
            className="rounded-md object-cover h-full w-full"
            alt={title}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div
            className={`flex items-center justify-center text-xs text-center text-white
            font-bold w-[90px] h-9 p-2 rounded-full
            ${
              progress_percentage === 100
                ? "bg-[#C15258]"
                : progress_percentage > 0 && progress_percentage < 100
                ? "bg-purple"
                : "bg-green"
            }`}
          >
            {category}
          </div>
          <p className="font-extrabold text-[18px] text-black">{title}</p>
          <div className="flex gap-2 items-center">
            <Progress progress={progress_percentage} />
            <p className="text-base text-normalGray">{progress_percentage}%</p>
          </div>
          <div className="flex justify-between gap-[6px] items-center max-w-[290px]">
            <div className="flex gap-2 items-center">
              <Image
                src={trainer_image}
                width={22}
                height={22}
                alt={trainer_name}
                className="rounded-full"
              />
              <p className="text-sm text-lightGray font-bold">{trainer_name}</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[16px] h-[16px] bg-lightGray rounded-full text-white">
                <Image
                  src="/assets/images/lessons.svg"
                  width={22}
                  height={22}
                  alt={"lessons"}
                  className="rounded-full"
                />
              </div>
              <p className="text-sm text-lightGray font-bold">
                {number_of_lessons} <span className="font-normal">درس</span>
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <div className="w-[16px] h-[16px] bg-lightGray rounded-full text-white">
                <Image
                  src={"/assets/images/time.svg"}
                  width={22}
                  height={22}
                  alt={"time"}
                  className="rounded-full"
                />{" "}
              </div>
              <p className="text-sm text-lightGray font-bold">
                {`${arabicHours}`}
                <span className="font-normal">س</span> : {`${arabicMinutes}`}
                <span className="font-normal">د</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {ProgressionDecision(progress_percentage)}
    </div>
  );
};

export default CourseCard;
