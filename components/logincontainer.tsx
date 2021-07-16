import Link from 'next/link'
import NavbarContainer from './navbar'

export default function LogInContainer() {
  return (
    <div className="flex flex-col text-blue-500 bg-white bg-opacity-30 w-80 h-68 m-auto border-black border border-opacity-20 rounded-xl font-semibold">
      <label className="mx-6 mt-5 font-semibold">
        Username
        <form className="flex mt-1">
          <input
            className="bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 border-gray h-10 rounded flex-1"
            placeholder="Enter Username"
          ></input>
        </form>
      </label>
      <label className="mx-6 mt-2 font-semibold">
        Password
        <form className="flex mt-1">
          <input
            className="bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 border-gray h-10 rounded flex-1"
            placeholder="Enter Username"
          ></input>
        </form>
      </label>
      <div className="flex flex-row justify-between align-center mt-6 pr-7 mb-5">
        <button className="ml-6 font-semibold text-align-center w-20 h-10 text-white rounded-lg bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 hover:from-purple-400 hover:via-indigo-400 hover:to-blue-300">
          Login
        </button>
        <li className="pt-2">
          <Link href="/about">Forgot password?</Link>
        </li>
      </div>
    </div>
  )
}
