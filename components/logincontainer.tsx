import Link from 'next/link'
import NavbarContainer from './navbar'
// import PasswordRetrevial from './password_retrieval'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function LogInContainer({
  children,
}: {
  children: React.ReactNode
}) {
  let [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col text-blue-500 bg-white bg-opacity-30 w-80 h-68 m-auto border-black border border-opacity-20 rounded-xl font-semibold">
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="transform ease-out duration-200 origin-top"
            enterFrom="opacity-0 scale-0"
            enterTo="opacity-100 scale-300"
            leave="transform ease-in duration-100 -translate-y-96 origin-bottom"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-0"
          >
            <Dialog.Overlay className="fixed inset-0 flex items-center w-96 h-56 justify-center bg-white rounded-lg mx-auto max-w-sm px-2 mt-24">
              <div>
                <Dialog.Title className="font-semibold text-blue-500 mb-2 ml-4 text-xl mt-4">
                  Reset Password
                </Dialog.Title>
                <p className="text-center">
                  Enter your email associated with your account. Make sure to
                  check your spam.
                </p>
                <form className="flex mt-1">
                  <input
                    className="px-3 bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 border-gray h-10 rounded flex-auto ml-4 mr-4 focus:outline-none focus:ring focus:border-indigo-200"
                    placeholder="Enter Email"
                  ></input>
                </form>
                <button
                  onClick={() => setIsOpen(false)}
                  className="font-semibold text-align-center w-20 h-10 text-white 
                    rounded-lg bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 
                    hover:from-purple-400 hover:via-indigo-400 hover:to-blue-300 mt-2 ml-4 mb-4"
                >
                  Send
                </button>
              </div>
            </Dialog.Overlay>
          </Transition.Child>
        </Dialog>
      </Transition>
      <label className="mx-6 mt-5 font-semibold">
        Username
        <form className="flex mt-1">
          <input
            className="px-3 bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 border-gray h-10 rounded flex-1 focus:outline-none focus:ring focus:border-indigo-200"
            placeholder="Enter Username"
          ></input>
        </form>
      </label>
      <label className="mx-6 mt-2 font-semibold">
        Password
        <form className="flex mt-1">
          <input
            className="px-3 bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 border-gray h-10 rounded flex-1 focus:outline-none focus:ring focus:border-indigo-200"
            placeholder="Enter Password"
          ></input>
        </form>
      </label>
      <div className="flex flex-row justify-between align-center mt-6 pr-7 mb-5">
        <button className="ml-6 font-semibold text-align-center w-20 h-10 text-white rounded-lg bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 hover:from-purple-400 hover:via-indigo-400 hover:to-blue-300">
          Login
        </button>
        <button
          className="pt-1 -mt-1 font-semibold"
          onClick={() => setIsOpen(true)}
        >
          {/* <Link href="/about">Forgot password?</Link> */}
          Forgot Password?
        </button>
      </div>
    </div>
  )
}
