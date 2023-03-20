import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [clicked, setClicked] = React.useState(0);
  const { theme, setTheme } = useTheme();

  function handleClick() {
    setClicked(clicked + 1);
    console.log("button clicked");
  }
  function darkMode() {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log({ theme });
  }
  return (
    <>
      <nav className="flex flex-row justify-between w-full py-3 px-64 mx-auto text-black top-0 fixed bg-white border-b">
        <h1 className="font-bold text-lg">Rework Monitoring</h1>
        <ul className="flex flex-row justify-between items-center gap-5">
          <Link
            href="/"
            className={currentRoute === "/" ? "text-blue-600" : ""}
          >
            <p className="hover:text-zinc-300">Homepage</p>
          </Link>
          <Link
            href="/dashboard"
            className={currentRoute === "/dashboard" ? "text-blue-600" : ""}
          >
            <p className="hover:text-zinc-300">Dashboard</p>
          </Link>
          <button onClick={darkMode}>DarkMode</button>
        </ul>
      </nav>
    </>
  );
}
