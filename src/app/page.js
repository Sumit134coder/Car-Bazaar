"use client";

import Image from "next/image";
import heroBg from "../../public/hero-bg.png";
import pattern from "../../public/pattern.png";
import hero from "../../public/hero.png";
import { Searchbar, Card, Modal } from "@/components";
import { useState, useEffect } from "react";
import { getCars } from "@/services/api";
// import { getCars } from '@/services/api'

export default function Home() {
  // const results =  await getCars()

  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getCars().then((el) => setResults(el));
  }, []);

  return (
    <div className="">
      {/* ---hero section--- */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen py-[4rem]">
        {/* --text--- */}
        <div className="px-global h-full flex flex-col justify-evenly gap-[2rem]">
          <h1 className="text-[4rem] font-bold leading-tight">
            Find, book, rent a car <br /> - quick and super easy!
          </h1>
          <p className="text-[2rem]">
            Streamline your car rental experience with our effortless booking
            process.
          </p>
          <button type="button" className="btn btn-primary w-min">
            Explore
          </button>
        </div>

        {/* --images--- */}
        <div className="h-[20rem] mt-[2rem] md:mt-0 md:h-auto relative overflow-hidden">
          <Image
            src={heroBg}
            height={1000}
            width={1000}
            className="h-full w-full absolute"
            alt="background"
          />
          <Image
            src={hero}
            height={1000}
            width={1000}
            className="h-auto w-auto absolute bottom-0"
            alt="hero-car"
          />
        </div>
      </section>

      {/* ---Catalogue----- */}
      <section className="px-global my-6">
        {/* ---heading--- */}
        <div>
          <h3 className="text-[3rem] font-semibold">Our Car Collection</h3>
          <p className="text-lg">Explore our collection you might like</p>
        </div>

        {/* ----search bars---- */}
        <div className="my-6">
          <Searchbar />
        </div>

        {/* ---card container---- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((car) => (
            <Card
              key={car?.model}
              onView={() => {
                setSelected(car);
                setOpen(true);
              }}
              car={car}
            />
          ))}
        </div>
      </section>

      <Modal isOpen={open} closeModal={setOpen}>
        {/* ----image container ------ */}
        <div>
          <div className="relative h-[10rem]">
            <Image src={pattern} className="h-full" alt="pattern" />
            <Image
              src={hero}
              className="absolute inset-3 h-full w-auto m-auto"
              alt="banner-hero"
            />
          </div>
          <div className="mt-3 flex justify-between items-center gap-3">
            <button type="button" className="p-4 rounded bg-gray-200">
              <Image
                src={hero}
                className="h-[5rem] w-auto m-auto"
                alt="btn-hero"
              />
            </button>
            <button type="button" className="p-4 rounded bg-gray-200">
              <Image
                src={hero}
                className="h-[5rem] w-auto m-auto"
                alt="btn-hero"
              />
            </button>
            <button type="button" className="p-4 rounded bg-gray-200">
              <Image
                src={hero}
                className="h-[5rem] w-auto m-auto"
                alt="btn-hero"
              />
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          { selected && Object.entries(selected).map(([key, value]) => (
            <div className="flex items-center justify-between" key={key}>
              <h4 className="text-grey capitalize font-semibold">
                {key.split("_").join(" ")}
              </h4>
              <p className="text-black-100 font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
