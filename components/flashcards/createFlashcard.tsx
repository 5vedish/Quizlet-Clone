import 'tailwindcss/tailwind.css'

export default function CreateFlashcard() {
  return (
    <div className="w-full h-40 bg-white rounded-lg shadow-lg">
      <div className="text-lg text-gray-600 font-black flex justify-between p-3 px-5">
        1
        <button className="focus:outline-none text-white bg-red-600 rounded-full active:text-red-600 active:bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
      <div className="block bg-gray-200 h-1" />
      <div className="p-4 px-6 w-full flex flex-row justify-between gap-x-8">
        <label className="text-gray-800 flex-grow">
          Term
          <form>
            <input
              type="text"
              name="term"
              className="px-3 text-gray-800 placeholder-gray-400 focus:placeholder-gray-300 border-gray h-8 flex-1 
              focus:outline-none cursor-auto break-words whitespace-normal w-full"
            ></input>
            <div className="block bg-purple-300 h-1" />
          </form>
        </label>
        <label className="text-gray-800 flex-grow">
          Definition
          <form>
            <input
              type="text"
              name="definition"
              className="px-3 text-gray-800 placeholder-gray-400 focus:placeholder-gray-300 border-gray h-8 flex-1 
              focus:outline-none cursor-auto break-words whitespace-normal w-full"
            ></input>
            <div className="block bg-purple-300 h-1" />
          </form>
        </label>
      </div>
    </div>
  )
}
