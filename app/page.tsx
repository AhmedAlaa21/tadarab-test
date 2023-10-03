"use client";

import { useState, useEffect } from "react";
import { Breadcrumb, Hero, PathInfo } from "@/components";
import { motion } from "framer-motion";
import axios from "axios";

export default function Home() {
  const [developmentPaths, setDevelopmentPaths] = useState<DevelopmentPath>({
    title: "",
    image: "",

    learning_outcomes: [],
    description: "",
    skills: [],
    courses: [],
  });

  const [loading, setLoading] = useState(false);

  console.log(developmentPaths);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://mocki.io/v1/9b534b4f-b16f-49b0-90a2-759fe429a21c"
        );

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
    <main className="flex min-h-screen w-full flex-col p-8">
      <>
        {loading ? (
          <div className="text-green text-3xl font-bold flex items-center justify-center self-center h-72">
            يتم تحميل البيانات .. برجاء الانتظار
          </div>
        ) : (
          <motion.div
            className="sm:p-8 flex flex-col sm:max-w-6xl sm:mx-auto h-auto gap-4 w-full"
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
            <Breadcrumb />
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
      </>
    </main>
  );
}
