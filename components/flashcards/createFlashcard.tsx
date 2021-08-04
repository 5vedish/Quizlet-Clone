import 'tailwindcss/tailwind.css'
import { TrashIcon } from '@heroicons/react/solid'

export default function CreateFlashcard() {
  return (
    <div className="w-full h-48 bg-white rounded-lg shadow-lg">
      <div className="text-lg text-gray-600 font-black flex justify-between p-3 px-5">
        1
        <button>
          <TrashIcon className="h-5 w-5"></TrashIcon>
        </button>
      </div>
      <div className="block bg-gray-200 h-1" />
      <div className="p-5 px-10 w-full flex flex-row justify-between gap-x-8">
        <label className="text-gray-800 flex-grow">
          Term
          <form>
            <input
              type="text"
              className="px-3 text-gray-800 placeholder-gray-400 focus:placeholder-gray-300 border-gray h-10 flex-1 
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
              className="px-3 text-gray-800 placeholder-gray-400 focus:placeholder-gray-300 border-gray h-10 flex-1 
              focus:outline-none cursor-auto break-words whitespace-normal w-full"
            ></input>
            <div className="block bg-purple-300 h-1" />
          </form>
        </label>
      </div>
    </div>
  )
}
