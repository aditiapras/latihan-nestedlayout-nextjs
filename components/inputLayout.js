"use-client";
import Link from "next/link";
import { useRouter } from "next/router";
import { FcAddDatabase } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcDataSheet } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
import { Menu, Transition } from "@headlessui/react";

export default function inputLayout({ children }) {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <div className="flex flex-col w-full h-full py-12 bg-white items-center">
        <div className="flex justify-end py-5 w-2/3">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex gap-1 w-full h-10 px-2 items-center justify-center rounded-xl hover:bg-slate-100 border">
                <FcSettings size={20}></FcSettings>
                <p>Settings</p>
              </Menu.Button>
            </div>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="flex flex-col gap-3 p-3 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg border">
                <Menu.Item className="hover:bg-slate-200 px-3 py-1 rounded-md">
                  {({ active }) => (
                    <a className={`${active && ""}`} href="#">
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item className="hover:bg-slate-200 px-3 py-1 rounded-md">
                  {({ active }) => (
                    <a className={`${active && ""}`} href="#">
                      Change Password
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item className="hover:bg-slate-200 px-3 py-1 rounded-md">
                  {({ active }) => (
                    <a className={`${active && ""}`} href="#">
                      Sign Out
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="flex flex-row h-full w-2/3">
          <div className="flex flex-col gap-3 items-start px-3 w-1/6">
            <h1 className="text-3xl font-bold px-2">Dashboard</h1>
            <Link
              href="/dashboard/input"
              className={
                currentRoute === "/dashboard/input"
                  ? "w-full py-2 px-2 group hover:bg-blue-100 rounded-lg bg-blue-100 text-blue-500 transition"
                  : "w-full py-2 px-2 group hover:bg-blue-100 rounded-lg transition"
              }
            >
              <p className="group-hover:text-blue-500 flex items-center gap-2">
                <span>
                  <FcAddDatabase size={24}></FcAddDatabase>
                </span>
                Input Barcode
              </p>
            </Link>
            <Link
              href="/dashboard/performances"
              className={
                currentRoute === "/dashboard/performances"
                  ? "w-full py-2 px-2 group hover:bg-blue-100 rounded-lg bg-blue-100 text-blue-500 transition"
                  : "w-full py-2 px-2 group hover:bg-blue-100 rounded-lg transition"
              }
            >
              <p className="group-hover:text-blue-500 flex items-center gap-2">
                <span>
                  <FcBullish size={24}></FcBullish>
                </span>
                Performances
              </p>
            </Link>
            <Link
              href="/dashboard/sheets"
              className={
                currentRoute === "/dashboard/sheets"
                  ? "w-full py-2 px-2 group hover:bg-blue-100 rounded-lg bg-blue-100 text-blue-500 transition"
                  : "w-full py-2 px-2 group hover:bg-blue-100 rounded-lg transition"
              }
            >
              <p className="group-hover:text-blue-500 flex items-center gap-2">
                <span>
                  <FcDataSheet size={24}></FcDataSheet>
                </span>
                Sheets
              </p>
            </Link>
          </div>

          <div className="flex items-center bg-slate-50 justify-center w-5/6 border-2 rounded-xl border-dashed">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
