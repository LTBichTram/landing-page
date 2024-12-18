import MySwipper from "./MySwipper";

const page = () => {
  return (
    <div className="w-full overflow-hidden xl:py-16 py-32 flex flex-col gap-16">
      <div className="max-w-[1440px] m-auto sm:px-8 px-4 text-center flex flex-col gap-4 items-center">
        <span className="text-black font-semibold text-5xl">
          What Agents Are Saying
        </span>
        <span className="font-medium text-2xl text-text max-w-[483px]">
          Discover what our satisfied customers have to say about their
          experiences with our services
        </span>
      </div>
      <MySwipper />
    </div>
  );
};

export default page;
