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

const manufactures = [
  "Tesla",
  "Toyota",
  "Hyundai",
  "Mercedes",
  "Nissan",
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

const Searchbar = ({ onSearch = () => {} }) => {
  const [company, setCompany] = useState("");
  const [searchQuery , setSearchQuery] = useState({
    make: '',
    model: '',
    fuel_type: '',
    year: '',
  })
  const [query, setQuery] = useState("");

  const filteredResults = (searchFrom = "model") => {
    return query === ""
      ? manufactures
      : manufactures.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  };

  const handleSearch = () => {

    onSearch(searchQuery)
  }

  return (
    <div className="flex justify-between flex-wrap gap-4">
      <div className="flex flex-wrap gap-2">
        {/* --company--- */}
        <Combobox
          value={searchQuery.make}
          onChange={(e) => {
            let temp = { ...searchQuery}
            temp.make = e.toLowerCase();

            setSearchQuery(temp);
          }}
          className="w-min relative"
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
          <Combobox.Options className="bg-white rounded-lg shadow p-2 mt-2 absolute w-full">
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
            onChange={(e) => {
                let temp = { ...searchQuery};
                temp.model = e.target.value.toLowerCase();
                setSearchQuery(temp);
            }}
            className="outline-primary-500 pl-[3rem] py-2 rounded-full"
          />
          <Image src={modelLogo} className="absolute inset-1 h-8 w-8" alt='model' />
        </div>

        <button type='button'onClick={()=>handleSearch()} className="btn p-3 shadow hover:shadow-lg transition bg-light-500 -ml-8 z-10"><FaMagnifyingGlass/></button>
      </div>

      {/* ---selections--- */}
      <div className="flex gap-4">
        <Select placeholder="Fuel Type.." options={fuelType} onChange={(e) => {
           let temp = { ...searchQuery};
                temp.fuel_type = e.toLowerCase();
                setSearchQuery(temp);
        }} />
        <Select placeholder="Model Year.." options={modelYear}  onChange={(e) => {
           let temp = { ...searchQuery};
                temp.year = e;
                setSearchQuery(temp);
        }} />
      </div>
    </div>
  );
};

export default Searchbar;
