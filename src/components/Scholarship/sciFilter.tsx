"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaGlobe, FaGraduationCap, FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const filters = [
  { label: "Country", icon: <FaGlobe />, options: ["USA", "UK", "Canada", "Australia"] },
//   { label: "Program", icon: <FaBook />, options: ["Engineering", "MBA", "Arts", "Science"] },
  { label: "Degree", icon: <FaGraduationCap />, options: ["Bachelors", "Masters", "PhD"] },
  { label: "Tuition Range", icon: <FaMoneyBillWave />, options: ["$0-$10k", "$10k-$20k", "$20k+"] },
  { label: "Application Deadline", icon: <FaCalendarAlt />, options: ["Jan", "Feb", "Mar", "Apr"] },
];

export default function SciFilterSection() {
  const [selected, setSelected] = useState(filters.map(f => f.options[0]));

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 px-4 flex flex-wrap justify-center gap-4 md:gap-6">
      {filters.map(({ label, icon, options }, idx) => (
        <div key={label} className="w-full sm:w-auto relative">
          <Listbox value={selected[idx]} onChange={(val) => setSelected(prev => {
            const copy = [...prev];
            copy[idx] = val;
            return copy;
          })}>
            <div className="relative">
              <Listbox.Button className="relative w-44 bg-white border border-gray-300 rounded-xl pl-3 pr-10 py-2 text-left cursor-default shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  {icon}
                  {selected[idx]}
                </span>
                <ChevronUpDownIcon className="w-5 h-5 text-gray-400" />
              </Listbox.Button>

              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto z-10">
                  {options.map((option) => (
                    <Listbox.Option
                      key={option}
                      className={({ active }) =>
                        `cursor-pointer select-none relative py-2 pl-3 pr-10 ${
                          active ? "bg-blue-100 text-blue-900" : "text-gray-700"
                        }`
                      }
                      value={option}
                    >
                      {({ selected: isSelected }) => (
                        <>
                          <span className={`block ${isSelected ? "font-medium" : "font-normal"}`}>
                            {option}
                          </span>
                          {isSelected ? (
                            <CheckIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-600" />
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      ))}
    </div>
  );
}
