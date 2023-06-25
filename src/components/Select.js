import { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { AiOutlineCheck } from "react-icons/ai";
import { HiOutlineSelector } from 'react-icons/hi'

const Select = ({
  placeholder = "Select...",
  onChange = () => {},
  options = [],
}) => {
  const [selected, setSelected] = useState();

  const dummy = [
    {
      name: "test",
      value: "test",
    },
    {
      name: "test1",
      value: "test2",
    },
  ];

  return (
    <Listbox
    as='div'
    className='max-w-[10rem] relative'
      value={selected}
      onChange={(e) => {
        const obj = options.find(el => el.value === e)
        console.log(obj)
        setSelected(obj);
      }}
    >
      <Listbox.Button className="bg-white rounded-lg py-2 px-4 w-full flex justify-between items-center whitespace-nowrap">
        <span>{selected ? selected?.name : placeholder}</span>
        <HiOutlineSelector className="ml-[2rem]" />
      </Listbox.Button>
      <Listbox.Options className='mt-2 bg-white rounded py-2 absolute z-20 w-full'>
        {options.map((option) => (
          <Listbox.Option
            key={option.value}
            value={option.value}
            // disabled={person.unavailable}
          >
            {({ active, selected }) => (
              <div className={`flex items-center gap-3 cursor-pointer ${active && 'bg-primary-500 text-white px-2'}`}>
                {selected ? (
                  <AiOutlineCheck className="text-primary-500 font-bold" />
                ) : (
                  <span className="mx-2" />
                )}
                {option.name}
              </div>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default Select;
