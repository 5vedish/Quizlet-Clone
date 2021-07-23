import 'tailwindcss/tailwind.css'
import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { SSL_OP_EPHEMERAL_RSA } from 'constants'

export default function FlashCard({
  flash_card,
}: {
  flash_card: {
    front: String
    back: String
  }
}) {
  let [isFront, setIsFront] = useState(true)

  return (
    <>
      {/*Front Card*/}
      <Transition
        as={Fragment}
        show={isFront}
        enter="transform duration-200 ease-out transition delay-200"
        enterFrom="opacity-100 scale-y-0"
        enterTo="opacity-100 scale-y-100"
        leave="transform transition duration 200"
        leaveFrom="opacity-100 scale-y-100"
        leaveTo="opacity-100 scale-y-0"
      >
        <button
          onClick={() => setIsFront((isFront) => !isFront)}
          className="flex-inital mt-52 fixed bg-white w-1/4 h-1/2 rounded-md shadow-lg focus:outline-none p-2"
        >
          <p>{flash_card.front}</p>
        </button>
      </Transition>

      {/*Back Card*/}
      <Transition
        as={Fragment}
        show={!isFront}
        enter="transform duration-200 ease-out transition delay-200"
        enterFrom="opacity-100 scale-y-0"
        enterTo="opacity-100 scale-y-100"
        leave="transform transition duration-200"
        leaveFrom="opacity-100 scale-y-100"
        leaveTo="opacity-100 scale-y-0"
      >
        <button
          onClick={() => setIsFront((isFront) => !isFront)}
          className="flex-inital mt-52 fixed bg-white w-1/4 h-1/2 rounded-md shadow-lg focus:outline-none"
        >
          {flash_card.back}
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
