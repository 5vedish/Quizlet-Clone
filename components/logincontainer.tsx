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
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <Dialog.Overlay className="fixed inset-0 flex items-center w-96 h-44 justify-center bg-white rounded-lg mt-24 mx-auto">
            <div className="bg-white rounded max-w-sm mx-auto px-2">
              <Dialog.Title className="font-bold text-blue-500">Reset Password</Dialog.Title>
              <p>
                To reset your password, enter the email you used to create the account
              </p>
              <form className="flex mt-1">
                <input
                  className="bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 border-gray h-10 rounded flex-1"
                  placeholder="Enter Email"
                ></input>
              </form>
              <button 
                onClick={() => setIsOpen(false)} 
                className="font-semibold text-align-center w-20 h-10 text-white 
                rounded-lg bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 
                hover:from-purple-400 hover:via-indigo-400 hover:to-blue-300 mt-2">Send</button>
            </div>
          </Dialog.Overlay>
      </Dialog>
      <label className="mx-6 mt-5 font-semibold">
        Username
        <form className="flex mt-1">
          <input
            className="bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 border-gray h-10 rounded flex-1"
            placeholder="Enter Username"
          ></input>
        </form>
      </label>
      <label className="mx-6 mt-2 font-semibold">
        Password
        <form className="flex mt-1">
          <input
            className="bg-white border-2 text-black placeholder-gray-400 focus:placeholder-gray-300 border-gray h-10 rounded flex-1"
            placeholder="Enter Password"
          ></input>
        </form>
      </label>
      <div className="flex flex-row justify-between align-center mt-6 pr-7 mb-5">
        <button className="ml-6 font-semibold text-align-center w-20 h-10 text-white rounded-lg bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 hover:from-purple-400 hover:via-indigo-400 hover:to-blue-300">
          Login
        </button>
        <button className="pt-1 font-semibold" onClick={() => setIsOpen(true)}>
          {/* <Link href="/about">Forgot password?</Link> */}
          Forgot Password?
          
        </button>
      </div>
    </div>
  )
}
