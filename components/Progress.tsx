import React from "react";

interface ProgressProps {
  progress: number;
}

const Progress: React.FC<ProgressProps> = ({ progress }) => {
  const containerStyles =
    "w-[240px] sm:w-[220px] h-[8px] rounded-full bg-gray-200";
  const progressStyles = `h-full rounded-full ${
    progress === 100 ? "bg-[#02C39A]" : "bg-red"
  }`;

  return (
    <div className={containerStyles}>
      <div className={progressStyles} style={{ width: `${progress}%` }} />
    </div>
  );
};

export default Progress;
