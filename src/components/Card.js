import React from "react";
import Image from "next/image";
import hero from '../../public/hero.png'
import gas from '../../public/gas.svg';
import steeringWheel from '../../public/steering-wheel.svg';
import tire from '../../public/tire.svg';
import { calculateCarRent } from "@/utils";
import rightArrow from '../../public/right-arrow.svg';


const Card = ({onView=()=>{} , car={}}) => {
  return (
    <div className="bg-white rounded-lg p-4 max-w-[20rem] card flex flex-col justify-between" key={`${car?.model}-${car?.fuel_type}-${car?.year}`}>
      <h4 className="text-[1.5rem] font-semibold">
        <span className="capitalize">{car?.make}</span>
        <span className="capitalize"> {car?.model}</span>
      </h4>

      <h3 className="text-[2rem] font-bold flex my-6">
        <span className="text-sm font-semibold self-start">$</span>{calculateCarRent(car?.city_mpg , car?.year)}
        <span className="text-sm font-normal self-end">/day</span>
      </h3>

      <Image src={hero} className="max-h-[10rem] w-auto" alt='card-her0' />

      {/* ----button container---- */}
      <div className="mt-4">
        {/* ---info---- */}
        <div className="flex justify-evenly items-center stats-container">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src={steeringWheel} alt='drive-icon' />
            <p>{car?.transmission === "a" ? "Automatic" : "Manual"}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src={tire} height={20} width={20} alt="wheel" />
            <p className="uppercase">{car?.drive}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src={gas} alt='gas' />
            <p className="uppercase text-sm">{car?.city_mpg}</p>
          </div>
        </div>

        {/* ---hovered button--- */}
        <button className="card-button" type="button" onClick={()=> { console.log('hello'); onView()}}>
            <span>View More</span>
            <Image src={rightArrow} className="btn-icon" alt='arrow' />
        </button>
      </div>
    </div>
  );
};

export default Card;
