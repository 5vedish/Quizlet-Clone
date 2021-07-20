import 'tailwindcss/tailwind.css'
import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'

export default function FlashCard() {
  let [isFront, setIsFront] = useState(true)
  return (
    <>
      {/*Front Card*/}
      <Transition
        as={Fragment}
        show={isFront}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95"
      >
        <div className="flex-inital mt-52 bg-white w-96 h-96 rounded-md shadow-md">
          Front
        </div>
      </Transition>

      {/*Back Card*/}
      <Transition
        as={Fragment}
        show={!isFront}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95"
      >
        <div className="flex-inital mt-52 bg-white w-96 h-96 rounded-md shadow-md">
          Back
        </div>
      </Transition>

      {/*Flip Button*/}
      <button
        onClick={() => setIsFront((isFront) => !isFront)}
        className="font-semibold text-align-center w-20 h-10 text-white 
                    rounded-lg bg-gradient-to-t from-purple-700 to-blue-400
                    hover:from-purple-400 hover:via-indigo-400 hover:to-blue-300 mt-8
                    focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-70
                    cursor-pointer"
      >
        Flip
      </button>
    </>
  )
}
