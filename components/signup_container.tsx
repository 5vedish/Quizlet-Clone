import 'tailwindcss/tailwind.css'

export default function SignupCard(){
    return (
        <div className="flex flex-col text-blue-500 w-80 h-96 m-auto bg-white bg-opacity-30 border-black border border-opacity-20 rounded-2xl p-2">
            <label className="mx-6 mt-1 font-semibold">
                Username
                <form className="flex mt-1">
                    <input className="bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 border-gray h-10 rounded flex-1" placeholder='Enter Username'>
                    </input>
                </form>
            </label>

            <label className="mx-6 mt-1 font-semibold">
                Email
                    <form className="flex mt-1">
                        <input className="bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 border-gray h-10 rounded flex-1" placeholder='Enter Email'>
                        </input>
                    </form>
            </label>

            <label className="mt-1 mx-6 font-semibold">
                    Password
                    <form className="flex mt-1">
                        <input className="bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 border-gray h-10 rounded flex-1" placeholder='Enter Password'>
                        </input>
                    </form>
            </label>

            <label className="mx-6 mt-1 font-semibold">
                Confirm Password
                    <form className="flex mt-1">
                        <input className="bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 border-gray h-10 rounded flex-1" placeholder='Confirm Password'>
                        </input>
                    </form>
            </label>

            <button className="ml-6 font-semibold text-align-center w-20 h-10 text-white border-2 rounded-lg mt-4 border-indigo-700 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 hover:from-purple-400 hover:via-indigo-400 hover:to-blue-300">
                    Sign Up 
            </button>
        </div>
    )
  }