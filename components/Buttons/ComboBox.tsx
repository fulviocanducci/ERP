/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { MouseEventHandler, useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Combobox } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface AppProps {
  icon?: Function;
  text?: string;
  onChange?: any;
  btnClass?: string;
  iconClass?: string;
  data: string[];
  state: any;
  setState: any;
  defaultState?: boolean;
}

export default function ComboBox(props: AppProps) {
  const [query, setQuery] = useState("");
  const Toggle = () => {
    props.onChange();
  };

  const filteredPeople =
    query === ""
      ? props.data
      : props.data.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={props.state} onChange={props.setState}>
      {/* <Combobox.Label className="block text-sm font-medium text-gray-700">
        Assigned to
      </Combobox.Label> */}
      <div className="relative mt-1">
        <Combobox.Input
          className={`inline-flex items-center px-2 py-2 text-sm font-medium rounded-md ${props.btnClass}`}
          //   onChange={(event) => setQuery(event.target.value)}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>
        {filteredPeople.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.map((person) => (
              <Combobox.Option
                key={person}
                value={person}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-indigo-600 text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        "block truncate",
                        selected && "font-semibold"
                      )}
                    >
                      {person}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-indigo-600"
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
