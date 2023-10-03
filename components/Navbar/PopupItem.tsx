import Image from "next/image";

interface PopupItemProps {
  title: string;
  image: string;
}

const PopupItem: React.FC<PopupItemProps> = ({ title, image }) => {
  return (
    <div className="flex gap-2 items-center">
      <Image src={image} width={20} height={20} alt="profile" />
      <p className="text-base font-bold text-lightGray">{title}</p>
    </div>
  );
};

export default PopupItem;
