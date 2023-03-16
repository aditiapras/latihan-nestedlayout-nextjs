import Link from "next/link";
export default function inputLayout({children}) {
  return (
    <>
      <div className="flex flex-col w-full h-screen border  bg-zinc-800 text-white items-center">
        <div className="flex w-2/3 py-5 border">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
        <div className="flex flex-row h-full p-3 w-2/3 border">
          <div className="flex flex-col gap-5 items-center p-3 w-1/6 h-90 border">
            <Link href="/dashboard/input">
              <p className="hover:text-teal-200">Menu 1</p>
            </Link>
            <Link href="/dashboard/output">
              <p className="hover:text-teal-200">Menu 2</p>
            </Link>
            <Link href="/dashboard/exput">
              <p className="hover:text-teal-200">Menu 2</p>
            </Link>
          </div>

          <div className="flex items-center justify-center w-5/6 border">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
