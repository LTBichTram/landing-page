import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  subTitle: string;
  image: StaticImageData;
  name: string;
  subName: string;
  className?: string;
};

const Card = (props: Props) => {
  const { image, subTitle, title, name, subName } = props;

  return (
    <div className="rounded-xl bg-white w-80 p-7 flex flex-col gap-3 text-text">
      <span className="text-base font-bold text-black">{title}</span>
      <span className="text-base font-bold">{subTitle}</span>
      <div className="pt-2 flex gap-3 items-center">
        <Image
          src={image}
          alt="Example Image"
          width={42}
          height={42}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-sm text-black">{name}</span>
          <span className="text-xs">{subName}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
