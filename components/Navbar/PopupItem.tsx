import Image from "next/image";
import Link from "next/link";

interface PopupItemProps {
  title: string;
  image: string;
}

const PopupItem: React.FC<PopupItemProps> = ({ title, image }) => {
  return (
    <Link href={"#"}>
      <div className="flex gap-2 items-center">
        <Image src={image} width={20} height={20} alt="profile" />
        <p className="text-base font-bold text-lightGray">{title}</p>
      </div>
    </Link>
  );
};

export default PopupItem;
