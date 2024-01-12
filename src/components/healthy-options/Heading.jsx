import { banner } from "../../data/data";

export default function Heading() {
  return (
    <div className="bg-orange-100 p-5">
      <div className="max-w-[1200px] m-auto md:flex gap-5">
        <div className="">
          <img className="w-full" src={banner.healthyBanner} alt="HEALTHY HEADING" />
        </div>
        <div className="flex flex-col gap-2 pt-4 md:gap-5">
          <h2 className="text-[1.5rem] font-bold">HEALTHIER 2023 KIT</h2>
          <p className="">
            Our selection of ready-to-eat frozen meals comes in a 5-day kit,
            designed to help you establish a healthier routine.
          </p>
          <div className="flex justify-between font-bold">
            <div className="">€85.20</div>
            <div className="">€17.04</div>
          </div>
        </div>
      </div>
    </div>
  );
}
