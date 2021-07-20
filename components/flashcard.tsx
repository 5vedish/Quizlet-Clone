import 'tailwindcss/tailwind.css'
import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { SSL_OP_EPHEMERAL_RSA } from 'constants'

export default function FlashCard() {
  let [isFront, setIsFront] = useState(true)

  return (
    <>
      {/*Front Card*/}
      <Transition
        as={Fragment}
        show={isFront}
        enter="transform duration-200 ease-out transition delay-200"
        enterFrom="opacity-0 -rotate-180 scale-50"
        enterTo="opacity-100 -rotate-1 scale-100"
        leave="transform transition duration-200"
        leaveFrom="opacity-100 rotate-0 scale-100"
        leaveTo="opacity-0 rotate-180 scale-50"
      >
        <button
          onClick={() => setIsFront((isFront) => !isFront)}
          className="flex-inital mt-20 bg-white w-72 h-72 rounded-md shadow-md focus:outline-none"
        >
          Front
        </button>
      </Transition>

      {/*Back Card*/}
      <Transition
        as={Fragment}
        show={!isFront}
        enter="transform duration-200 ease-out transition delay-200"
        enterFrom="opacity-0 -rotate-180 scale-50"
        enterTo="opacity-100 -rotate-1 scale-100"
        leave="transform transition duration-200"
        leaveFrom="opacity-100 rotate-0 scale-100"
        leaveTo="opacity-0 rotate-180 scale-50"
      >
        <button
          onClick={() => setIsFront((isFront) => !isFront)}
          className="flex-inital mt-20 bg-white w-72 h-72 rounded-md shadow-md focus:outline-none"
        >
          Back
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
