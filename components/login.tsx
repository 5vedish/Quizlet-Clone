import Link from 'next/link'
import NavbarContainer from './navbar'
// import PasswordRetrevial from './password_retrieval'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRef } from 'react'

export default function LogInCard() {
  let [isOpen, setIsOpen] = useState(false)
  let completeButtonRef = useRef(null)
  return (
    <>
      <span className="md:w-auto mt-10 items-center text-8xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-t from-purple-700 to-blue-400 filter drop-shadow-md select-none">
        Login
      </span>

      <div
        className="flex flex-col bg-white w-80 h-68 m-20 bg-opacity-60 rounded-xl
        text-blue-500 font-semibold shadow-md"
      >
        <label className="mx-6 mt-5 font-semibold">
          Username
          <form className="flex mt-1">
            <input
              className="px-3 bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 border-gray h-10 rounded-md flex-1 
              focus:outline-none focus:ring focus:border-indigo-200 cursor-auto"
              placeholder="Enter Username"
            ></input>
          </form>
        </label>
        <label className="mx-6 mt-2 font-semibold">
          Password
          <form className="flex mt-1">
            <input
              className="px-3 bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 border-gray h-10 rounded-md flex-1 
              focus:outline-none focus:ring focus:border-indigo-200
              cursor-auto"
              placeholder="Enter Password"
            ></input>
          </form>
        </label>
        <div className="flex flex-row justify-between align-center mt-6 pr-7 mb-5">
          <button
            className="font-semibold text-align-center w-20 h-10 text-white rounded-lg ml-6
          bg-gradient-to-t from-purple-700 to-blue-400 
          hover:from-purple-400 hover:via-indigo-400 hover:to-blue-300 
          focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-70
          cursor-pointer"
          >
            Login
          </button>
          <button
            className="pt-1 -mt-1 font-semibold cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            {/* <Link href="/about">Forgot password?</Link> */}
            Forgot Password?
          </button>
        </div>
      </div>

      <Transition show={isOpen} as="div">
        <Dialog
          initialFocus={completeButtonRef}
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            leave="ease-in duration-100"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transform ease-in-out duration-200 origin-top"
            enterFrom="transform opacity-100 scale-150 -translate-y-full"
            enterTo="transform opacity-100 scale-100 translate-y-0.5"
            leave="transform ease-in duration-100 -translate-y-full transition delay-100"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-0"
          >
            <div className="fixed inset-0 flex flex-col w-96 h-56 bg-white rounded-lg mx-auto max-w-sm px-2 mt-24 shadow-2xl">
              <Dialog.Title className="font-semibold text-blue-500 text-xl m-3 mt-4">
                Reset Password
              </Dialog.Title>
              <p className="text-center">
                Enter your email associated with your account. Make sure to
                check your spam.
              </p>
              <form className="flex mt-1">
                <input
                  className="px-3 bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 border-gray h-10 rounded-md flex-auto ml-4 mr-4 focus:outline-none focus:ring focus:border-indigo-200"
                  placeholder="Enter Email"
                ></input>
              </form>
              <button
                onClick={() => setIsOpen(false)}
                className="font-semibold text-align-center w-20 h-10 text-white 
                    rounded-lg bg-gradient-to-t from-purple-700 to-blue-400 
                    hover:from-purple-400 hover:via-indigo-400 hover:to-blue-300 mt-4 ml-4 mb-4
                    focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-70
                    cursor-pointer"
              >
                Send
              </button>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
