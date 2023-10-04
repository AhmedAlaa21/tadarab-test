import Image from "next/image";

const Breadcrumb = () => {
  return (
    <div
      className="sticky top-[9.92rem] bg-gray-700 bg-opacity-90 sm:top-[6.2rem] z-40 flex items-center gap-2 px-4 py-2 rounded-full"
      style={{ position: "fixed" }}
    >
      <button className="text-lightGray">مسارتي</button>
      <Image
        src={"/assets/images/arrow.svg"}
        alt="arrow"
        width={5}
        height={9}
      />
      <p className="text-[#BBBABF] text-sm">
        {"تفاصيل المسار (مسار التنمية البشرية)"}
      </p>
    </div>
  );
};

export default Breadcrumb;
