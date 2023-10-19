"use client";

import { Breadcrumb, Hero, PathInfo } from "@/components";
import { motion } from "framer-motion";
import useAxios from "@/hooks/useAxios";

const DevelopmentPath = () => {
  const url = ((process.env.NEXT_PUBLIC_BASE_URL as string) +
    process.env.NEXT_PUBLIC_API_KEY) as string;

  const { data, loading, error } = useAxios<DevelopmentPath>(url, {});

  if (error) return <p>حدث خطأ في جلب البيانات .. حاول مرة أخرى</p>;

  return (
    <div className="relative px-4 md:px-5 sm:max-w-6xl sm:mx-auto flex flex-col gap-4 h-auto mt-5 w-full">
      <Breadcrumb />
      {loading || !data ? (
        <div className="text-green text-3xl font-bold flex items-center justify-center self-center h-72">
          {"يتم تحميل البيانات ..  برجاء الانتظار"}
        </div>
      ) : (
        <motion.div
          className=" flex flex-col w-full h-auto"
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          initial={{
            x: 100,
            opacity: 0,
          }}
        >
          <Hero title={data.title} image={data.image} courses={data.courses} />
          <PathInfo
            learning_outcomes={data.learning_outcomes}
            description={data.description}
            skills={data.skills}
            courses={data.courses}
          />
        </motion.div>
      )}
    </div>
  );
};

export default DevelopmentPath;
