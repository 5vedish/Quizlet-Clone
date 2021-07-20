import 'tailwindcss/tailwind.css'

export default function SignupCard() {
  return (
    <>
      <span className="md:w-auto mt-10 items-center text-8xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-t from-purple-700 to-blue-400 filter drop-shadow-md select-none">
        Signup
      </span>

      <div
        className="flex flex-wrap text-blue-500 w-96 h-80 m-10 bg-white bg-opacity-30 rounded-xl
        text-blue-500 font-semibold shadow-md"
      >
        <label className="mx-6 mt-5 w-32 font-semibold">
          Username
          <form className="flex mt-1">
            <input
              className="bg-white border-2 w-40 text-black placeholder-gray-400 focus:placeholder-gray-300 focus:outline-none focus:ring focus:border-indigo-200 border-gray h-10 rounded-md flex-1 px-2"
              placeholder="Enter Username"
            ></input>
          </form>
        </label>

        <label className="mx-6 mt-5 w-32 font-semibold">
          Email
          <form className="flex mt-1">
            <input
              className="bg-white border-2 w-40 text-black placeholder-gray-400 focus:placeholder-gray-300 focus:outline-none focus:ring focus:border-indigo-200 border-gray h-10 rounded-md flex-1 px-2"
              placeholder="Enter Email"
            ></input>
          </form>
        </label>

        <label className="mx-6 w-96 font-semibold">
          Password
          <form className="flex mt-1">
            <input
              className="bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 focus:outline-none focus:ring focus:border-indigo-200 border-gray h-10 rounded-md flex-1 px-2"
              placeholder="Enter Password"

            ></input>
          </form>
        </label>

        <label className="mx-6 w-96 font-semibold">
          Confirm Password
          <form className="flex mt-1">
            <input
              className="bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 focus:outline-none focus:ring focus:border-indigo-200 border-gray h-10 rounded-md flex-1 px-2"
              placeholder="Confirm Password"
            ></input>
          </form>
        </label>

        <button
          className="font-semibold text-align-center w-20 h-10 text-white 
                    rounded-lg bg-gradient-to-t from-purple-700 to-blue-400
                    hover:from-purple-400 hover:via-indigo-400 hover:to-blue-300 mt-2 ml-6 mb-4
                    focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-70
                    cursor-pointer"
        >
          Sign Up
        </button>
      </div>
    </>
  )
}
