import { Button } from "@/components";
import Card from "./Card";
import percentIcon from "@/assets/percent.svg";
import awardIcon from "@/assets/award.svg";
import pic1Img from "@/assets/pic1.png";
import pic2Img from "@/assets/pic2.png";
import arrowLongDownIcon from "@/assets/arrow-long-down.svg";
import arrowRightIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import circleIcon from "@/assets/circle.svg";
import arrowIcon from "@/assets/arrow.svg";
import mapIcon from "@/assets/map.svg";

const page = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-11 max-w-[1440px] m-auto sm:px-16 px-4 h-[calc(100vh-80px)] py-24 items-center">
      <div className="flex-1 flex flex-col w-full">
        <div className="text-4xl font-bold max-w-[800px]">
          Close More Deals by
          <span className="text-primary">Instantly Matching</span> Buyers to the
          Right Properties
        </div>
        <div className="mt-6 mb-12 max-w-[350px] text-text">
          Revolutionize how you find and present properties—save time and
          impress clients with professional presentation
        </div>
        <div className="flex items-center gap-6">
          <Button
            icon={arrowLongDownIcon}
            iconPosition="right"
            variant="primary"
          >
            Get Started
          </Button>
          <Button icon={arrowRightIcon} iconPosition="right">
            Try Playground
          </Button>
        </div>
      </div>
      <div className="flex-1 relative w-full h-full xl:block flex justify-between md:flex-row flex-col md:items-end">
        <Card
          title="$455,000"
          subTitle="15902 N 170th Ln, Surprise, AZ 85388"
          image={pic1Img}
          icon={awardIcon}
          className="xl:absolute xl:bottom-0 xl:left-5 z-20 relative w-full md:w-auto"
          options={{
            isExist: true,
            title: "2 bedrooms",
          }}
        />
        <Card
          title="$355,000 → 255,000"
          subTitle="6000 E Camelback Rd Unit 7707, Scottsdale, AZ 85251"
          image={pic2Img}
          icon={percentIcon}
          className="xl:absolute xl;top-0 xl:right-5 z-10 h-fit relative w-full md:w-auto"
        />
        <div className="absolute bottom-10 rounded-xl bg-white opacity-80 hidden md:flex gap-4 items-center z-30 w-[500px] p-3 right-0">
          <Image src={circleIcon} alt="Example Image" width={52} height={52} />
          <span>
            I want to find an apartment in Arizona with 2 bedrooms and close to
            school
          </span>
          <Image src={arrowIcon} alt="Example Image" width={32} height={32} />
        </div>
        <div className="absolute right-12 bottom-1/4 hidden md:flex flex-col gap-2 items-center">
          <Image src={mapIcon} alt="Example Image" width={52} height={52} />
          <span className="py-2 px-3 bg-white rounded-full text-sm">
            Arizona
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
