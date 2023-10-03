import { Hero } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <div className="flex flex-col max-w-6xl mx-auto h-[400px] gap-4 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2">
          <button className="text-lightGray">مسارتي</button>
          <Image
            src={"/assets/images/arrow.svg"}
            alt="arrow"
            width={5}
            height={9}
          />
          <p className="text-[#BBBABF] text-sm">
            تفاصيل المسار (مسار التنمية البشرية)
          </p>
        </div>
        {/* Hero */}
        <Hero />
      </div>
    </main>
  );
}
