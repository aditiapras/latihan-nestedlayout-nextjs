import inputLayout from "@/components/inputLayout";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { GrCheckmark } from "react-icons/gr";

export default function input() {
  let [plan, setPlan] = useState("startup");

  return (
    <>
      <div className="flex flex-col items-center gap-10  w-full rounded-md  py-3 px-10">
        <h1 className="text-2xl font-bold">Input Barcode here</h1>
        <input
          type="number"
          className="px-4 py-3 rounded-lg text-3xl font-bold placeholder:text-gray-400"
          placeholder="Barcode..."
        />
        <hr className="border border-gray-200 w-full"></hr>
        <RadioGroup
          value={plan}
          onChange={setPlan}
          className="flex flex-col w-full items-center gap-5"
        >
          <RadioGroup.Label className="font-bold text-2xl">
            Non Conformity
          </RadioGroup.Label>
          <div className="flex w-full justify-between p-3">
            <RadioGroup.Option value="RFV">
              {({ checked }) => (
                <span
                  className={
                    checked
                      ? "flex flex-row items-center text-xl font-bold justify-between gap-3 w-44 px-5 py-2 border rounded-lg bg-blue-300"
                      : "flex flex-row items-center text-xl font-bold justify-between gap-3 w-44 px-5 py-2 border rounded-lg bg-blue-50"
                  }
                >
                  RFV
                  <GrCheckmark
                    className={
                      checked
                        ? "w-6 h-6 stro bg-blue-500 p-1 rounded-full"
                        : "hidden"
                    }
                  ></GrCheckmark>
                </span>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="R1H">
              {({ checked }) => (
                <span
                  className={
                    checked
                      ? "flex flex-row items-center text-xl font-bold justify-between gap-3 w-44 px-5 py-2 border rounded-lg bg-blue-300"
                      : "flex flex-row items-center text-xl font-bold justify-between gap-3 w-44 px-5 py-2 border rounded-lg bg-blue-50"
                  }
                >
                  R1H
                  <GrCheckmark
                    className={
                      checked
                        ? "w-6 h-6 stro bg-blue-500 p-1 rounded-full"
                        : "hidden"
                    }
                  ></GrCheckmark>
                </span>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="DENT">
              {({ checked }) => (
                <span
                  className={
                    checked
                      ? "flex flex-row items-center text-xl font-bold justify-between gap-3 w-44 px-5 py-2 border rounded-lg bg-blue-300"
                      : "flex flex-row items-center text-xl font-bold justify-between gap-3 w-44 px-5 py-2 border rounded-lg bg-blue-50"
                  }
                >
                  DENT
                  <GrCheckmark
                    className={
                      checked
                        ? "w-6 h-6 stro bg-blue-500 p-1 rounded-full"
                        : "hidden"
                    }
                  ></GrCheckmark>
                </span>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="BULG">
              {({ checked }) => (
                <span
                  className={
                    checked
                      ? "flex flex-row items-center text-xl font-bold justify-between gap-3 w-44 px-5 py-2 border rounded-lg bg-blue-300"
                      : "flex flex-row items-center text-xl font-bold justify-between gap-3 w-44 px-5 py-2 border rounded-lg bg-blue-50"
                  }
                >
                  BULG
                  <GrCheckmark
                    className={
                      checked
                        ? "w-6 h-6 stro bg-blue-500 p-1 rounded-full"
                        : "hidden"
                    }
                  ></GrCheckmark>
                </span>
              )}
            </RadioGroup.Option>
          </div>
        </RadioGroup>
        <button className="p-3 bg-blue-600 w-32 mt-10 rounded-lg text-white hover:bg-blue-500">
          Submit
        </button>
      </div>
    </>
  );
}

input.Layout = inputLayout;
