"use client";
import { MdOutlineDone } from "react-icons/md";
import CourseCard from "./CourseCard";

interface TimelineProps {
  courses: Course[];
}

const Timeline: React.FC<TimelineProps> = ({ courses }) => {
  return (
    <div className="flex flex-col gap-6">
      {courses.map((course, index) => (
        <div
          key={course.title}
          className="relative flex flex-col-reverse lg:flex-row items-center gap-4"
        >
          <div
            className={`rounded-full w-10 h-10 flex items-center justify-center ${
              course.progress_percentage === 100
                ? "bg-green"
                : "bg-black bg-opacity-10"
            }`}
          >
            {course.progress_percentage === 100 ? (
              <MdOutlineDone color="#fff" size={24} />
            ) : (
              <p className="text-[20px] text-darkGray">{index + 1}</p>
            )}
            {index !== courses.length - 1 && (
              <div className="absolute z-20 -bottom-[46%] right-[18px]  w-2 h-[122px] border-r-[3px] border-r-gray-300 lg:border-dashed rounded-full"></div>
            )}
          </div>
          <CourseCard course={course} />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
