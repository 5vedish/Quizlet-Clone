import Link from "next/link";
import NavbarContainer from "./navbar";

export default function LogInContainer({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="flex text-blue-500 bg-white bg-opacity-30 w-80 h-72 m-auto border-black border border-opacity-20 rounded-xl font-semibold">
            <label className="m-6 ml-9">
                Username
                <input className="bg-white m-2 -ml-2 w-64 h-10 text-black border border-gray rounded-md placeholder-gray-400 focus:placeholder-gray-300" placeholder="Enter Username">
                </input>
                <label className="m-6 -ml-0">
                    Password
                    <input className="bg-white m-2 -ml-2 w-64 h-10 text-black border border-gray rounded-md placeholder-gray-400 focus:placeholder-gray-300" placeholder="Enter Password">
                    </input>
                </label>
                <button className="container bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 hover:from-purple-400 hover:via-indigo-400 hover:to-blue-300 rounded-md w-16 h-10 text-center m-6 -ml-2 text-white font-semibold">
                    Login
                </button>
                <Link href="/about">
                    Forgot password?
                </Link>
            </label>
        </div>
    )
}