import React from "react";
import Image from "next/image";
import hero from '../../public/hero.png'
import gas from '../../public/gas.svg';
import steeringWheel from '../../public/steering-wheel.svg';
import tire from '../../public/tire.svg';
import rightArrow from '../../public/right-arrow.svg';


const Card = ({onView=()=>{}}) => {
  return (
    <div className="bg-white rounded-lg p-4 max-w-[20rem] card">
      <h4 className="text-[1.5rem] font-semibold">Car Title</h4>

      <h3 className="text-[2rem] font-bold flex my-6">
        <span className="text-sm font-semibold self-start">$</span>54
        <span className="text-sm font-normal self-end">/day</span>
      </h3>

      <Image src={hero} className="max-h-[10rem] w-auto" alt='card-her0' />

      {/* ----button container---- */}
      <div className="mt-4">
        {/* ---info---- */}
        <div className="flex justify-evenly items-center stats-container">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src={steeringWheel} alt='drive-icon' />
            <p>65</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src={tire} height={20} width={20} alt="wheel" />
            <p>65</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src={gas} alt='gas' />
            <p>65</p>
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
