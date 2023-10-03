import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="relative bg-transparent rounded-2xl shadow bg-cover bg-no-repeat
        bg-center w-[700px] h-[380px] flex items-end p-8 text-white"
      style={{ backgroundImage: "url(/assets/images/course2.png) z-[5]" }}
    >
      <div className="absolute inset-0 bg-black opacity-40 rounded-2xl" />
      <div className="flex flex-col gap-4 z-10">
        <div>
          <p className=" text-3xl text-bold font-bold">مسار التنمية البشرية</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-4">
            <Image
              src={"/assets/images/lessons.svg"}
              alt="lessons"
              width={16}
              height={16}
            />
            <span>4 دورات تدريبية</span>
          </div>
          <div className="flex gap-4">
            <Image
              src={"/assets/images/time.svg"}
              alt="lessons"
              width={16}
              height={16}
            />
            4 دورات تدريبية
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
