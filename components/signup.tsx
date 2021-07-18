import 'tailwindcss/tailwind.css'

export default function SignupCard() {
  return (
    <>
      <span className="md:w-auto mt-10 items-center text-8xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-t from-purple-600 to-blue-400 filter drop-shadow-md">
        Signup
      </span>

      <div className="flex flex-col text-blue-500 w-96 h-96 m-20 bg-white bg-opacity-30 border-black border border-opacity-20 rounded-2xl p-2">
        <label className="mx-6 mt-5 font-semibold">
          Username
          <form className="flex mt-1">
            <input
              className="bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 focus:outline-none focus:ring focus:border-indigo-200 border-gray h-10 rounded flex-1  px-2"
              placeholder="Enter Username"
            ></input>
          </form>
        </label>

        <label className="mx-6 mt-1 font-semibold">
          Email
          <form className="flex mt-1">
            <input
              className="bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 focus:outline-none focus:ring focus:border-indigo-200 border-gray h-10 rounded flex-1  px-2"
              placeholder="Enter Email"
            ></input>
          </form>
        </label>

        <label className="mt-1 mx-6 font-semibold">
          Password
          <form className="flex mt-1">
            <input
              className="bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 focus:outline-none focus:ring focus:border-indigo-200 border-gray h-10 rounded flex-1 px-2"
              placeholder="Enter Password"
            ></input>
          </form>
        </label>

        <label className="mx-6 mt-1 font-semibold">
          Confirm Password
          <form className="flex mt-1">
            <input
              className="bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 focus:outline-none focus:ring focus:border-indigo-200 border-gray h-10 rounded flex-1  px-2"
              placeholder="Confirm Password"
            ></input>
          </form>
        </label>

        <button className="ml-6 font-semibold text-align-center w-20 h-10 text-white border-2 rounded-lg mt-4 border-indigo-700 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 hover:from-purple-400 hover:via-indigo-400 hover:to-blue-300">
          Sign Up
        </button>
      </div>
    </>
  )
}
