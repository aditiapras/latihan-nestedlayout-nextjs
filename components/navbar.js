import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-between w-full py-3 px-64 text-white top-0 fixed bg-zinc-900">
        <h1 className="font-bold text-xl">Navigation</h1>
        <ul className="flex flex-row justify-between gap-5">
          <Link href="/">
            <p className="hover:text-zinc-300">Homepage</p>
          </Link>
          <Link href="/dashboard">
            <p className="hover:text-zinc-300">Dashboard</p>
          </Link>
        </ul>
      </nav>
    </>
  );
}
