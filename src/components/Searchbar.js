"use client";

import { useState } from "react";
import { Combobox } from "@headlessui/react";
import Image from "next/image";
import carLogo from "../../public/car-logo.svg";
import MagnifyGlass from "../../public/magnifying-glass.svg";
import modelLogo from "../../public/model-icon.png";
import { AiOutlineCheck } from "react-icons/ai";
import Select from "./Select";
import { FaMagnifyingGlass } from 'react-icons/fa6'

const dummy = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

const fuelType = [
    {
        name: 'Fuel',
        value : 'fuel',
    },
    {
        name: 'Gas',
        value : 'gas',
    },
    {
        name: 'Electricity',
        value : 'electricity',
    },
]
const modelYear = [
    {
        name: '2015',
        value : '2015',
    },
    {
        name: '2016',
        value : '2016',
    },
    {
        name: '2018',
        value : '2018',
    },
]

const Searchbar = () => {
  const [company, setCompany] = useState("");
  const [query, setQuery] = useState("");

  const filteredResults = (searchFrom = "model") => {
    return query === ""
      ? dummy
      : dummy.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        {/* --company--- */}
        <Combobox
          value={company}
          onChange={setCompany}
          className="w-min"
          as="div"
        >
          <div className="relative">
            <Image
              src={carLogo}
              className="absolute inset-1"
              alt="model logo"
            />
            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
              className="outline-primary-500 pl-[3rem] py-2 rounded-full"
              placeholder="Tesla..."
            />
          </div>
          <Combobox.Options className="bg-white rounded-lg shadow p-2 mt-2">
            {filteredResults("model").length ? (
              filteredResults("model").map((el) => (
                <Combobox.Option key={el} value={el}>
                  {({ active, selected }) => (
                    <li className="flex items-center gap-3 cursor-pointer">
                      {selected ? (
                        <AiOutlineCheck className="text-primary-500 font-bold" />
                      ) : (
                        <span className="mx-2" />
                      )}
                      {el}
                    </li>
                  )}
                </Combobox.Option>
              ))
            ) : (
              <p className="text-red-600">No Options Found!</p>
            )}
          </Combobox.Options>
        </Combobox>
        {/* --model--- */}
        <div className="relative">
          <input
            type="text"
            placeholder="Model"
            className="outline-primary-500 pl-[3rem] py-2 rounded-full"
          />
          <Image src={modelLogo} className="absolute inset-1 h-8 w-8" />
        </div>

        <button type='button' className="btn p-3 shadow hover:shadow-lg transition bg-light-500 -ml-8 z-10"><FaMagnifyingGlass/></button>
      </div>

      {/* ---selections--- */}
      <div className="flex gap-4">
        <Select placeholder="Fuel Type.." options={fuelType} />
        <Select placeholder="Model Year.." options={modelYear} />
      </div>
    </div>
  );
};

export default Searchbar;
