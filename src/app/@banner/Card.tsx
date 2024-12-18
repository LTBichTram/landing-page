import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import starIcon from "@/assets/star.svg";

type Props = {
  title: string;
  subTitle: string;
  image: StaticImageData;
  icon: string;
  className?: string;
  options?: {
    isExist: boolean;
    title: string;
  };
};

const Card = (props: Props) => {
  const { image, subTitle, title, className, icon, options } = props;

  return (
    <div
      className={cn(
        "relative rounded-xl bg-gradient-to-r from-white via-white/50 to-white/50 w-fit",
        className
      )}
    >
      <div className="gap-4 flex justify-between px-5 py-4">
        <div className="flex flex-col max-w-48">
          <span className="font-bold">{title}</span>
          <span className="text-xs text-text">{subTitle}</span>
        </div>
        <Image src={icon} alt="Example Image" width={36} height={36} />
      </div>
      <div className="relative">
        <Image src={image} alt="Example Image" className="rounded-b-xl" />
      </div>
      {options?.isExist && (
        <span className="py-2 px-3 bg-white rounded-full text-sm absolute bottom-1/3 -left-6 flex gap-3 items-center">
          {options.title}
          <Image src={starIcon} alt="Example Image" />
        </span>
      )}
    </div>
  );
};

export default Card;
