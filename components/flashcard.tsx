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
        enter="transform ease-out duration-300 origin-top"
        enterFrom="transform opacity-100 scale-100"
        enterTo="transform opacity-100 scale-100"
        leave="transform ease-in duration-300 transition delay-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-0"
      >
        <button 
            onClick={() => setIsFront((isFront) => !isFront)}
            className="flex-inital mt-40 bg-white w-96 h-72 fixed rounded-md shadow-md">
          Q: Who is a butt?
        </button>
      </Transition>

      {/*Back Card*/}
      <Transition
        as={Fragment}
        show={!isFront}
        enter="transform ease-out duration-300 origin-bottom"
        enterFrom="transform opacity-100 scale-100"
        enterTo="transform opacity-100 scale-100"
        leave="transform ease-in duration-300 transition delay-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-0"
      >
        <button 
            onClick={() => setIsFront((isFront) => !isFront)}
            className="flex-inital mt-40 bg-white w-96 h-72 fixed rounded-md shadow-md">
          A: Zhi is a butt.
        </button>
      </Transition>
      {/*Flip Button*/}
      {/* <button
        onClick={() => setIsFront((isFront) => !isFront)}
        className="font-semibold text-align-center w-20 h-10 text-white 
                    rounded-lg bg-gradient-to-t from-purple-700 to-blue-400
                    hover:from-purple-400 hover:via-indigo-400 hover:to-blue-300 mt-8
                    focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-70
                    cursor-pointer"
      >
        Flip
      </button> */}
    </>
  )
}
