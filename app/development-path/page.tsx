"use client";

import { useState, useEffect } from "react";
import { Breadcrumb, Hero, PathInfo } from "@/components";
import { motion } from "framer-motion";
import axios from "axios";

const DevelopmentPath = () => {
  const [developmentPaths, setDevelopmentPaths] = useState<DevelopmentPath>({
    title: "",
    image: "",

    learning_outcomes: [],
    description: "",
    skills: [],
    courses: [],
  });
  const [loading, setLoading] = useState(false);
  const url = ((process.env.NEXT_PUBLIC_BASE_URL as string) +
    process.env.NEXT_PUBLIC_API_KEY) as string;

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);

        setDevelopmentPaths(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative sm:max-w-6xl sm:mx-auto h-auto gap-4 w-full">
      <Breadcrumb />
      {loading ? (
        <div className="text-green text-3xl font-bold flex items-center justify-center self-center h-72">
          {"يتم تحميل البيانات ..  برجاء الانتظار"}
        </div>
      ) : (
        <motion.div
          className="mt-12 sm:p-8 p-4 flex flex-col w-full h-auto"
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
          <Hero
            title={developmentPaths.title}
            image={developmentPaths.image}
            courses={developmentPaths.courses}
          />
          <PathInfo
            learning_outcomes={developmentPaths.learning_outcomes}
            description={developmentPaths.description}
            skills={developmentPaths.skills}
            courses={developmentPaths.courses}
          />
        </motion.div>
      )}
    </div>
  );
};

export default DevelopmentPath;
