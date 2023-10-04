import Heading from "./Heading";
import CourseCard from "./CourseCard";
import Timeline from "./Timeline";

interface CoursesProps {
  courses: Course[];
}

const Courses: React.FC<CoursesProps> = ({ courses }) => {
  return (
    <>
      <Heading title={`دورات المسار (${courses.length})`} />
      <div className="flex flex-col gap-6">
        <Timeline courses={courses} />
        {/* {courses.map((course) => (
          <CourseCard course={course} />
        ))} */}
      </div>
    </>
  );
};

export default Courses;
