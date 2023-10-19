import Image from "next/image";

const Breadcrumb = () => {
  return (
    <div
      className="bg-transparent z-40 flex items-center gap-2 rounded-full"
      // style={{ position: "fixed" }}
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
