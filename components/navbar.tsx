import 'tailwindcss/tailwind.css'
import { Menu } from '@headlessui/react'

export default function NavbarContainer({
  children,
  bg_enabled,
  logged_in,
  authing,
}: {
  children: React.ReactNode
  bg_enabled: boolean
  logged_in: boolean
  authing: boolean
}) {
  const background = bg_enabled
    ? ' bg-gradient-to-br from-purple-300 via-pink-200 to-blue-400'
    : ''

  return (
    <div
      className={`flex flex-col w-screen h-screen justify-start items-center ${background}`}
    >
      <nav className="flex flex-row w-screen h-20 bg-indigo-600 justify-between shadow-md">
        <div className="flex w-16 h-16 border-4 rounded border-white mt-2 ml-6 justify-center items-center cursor-pointer">
          <p className="text-white font-bold font-trial">Testlet</p>
        </div>

        {!logged_in || authing ? (
          <div className="flex flex-row mt-8 mr-16">
            <button className="flex w-10 h-4 text-white justify-end">
              Login
            </button>
            <div className="mx-4 text-white font-bold">|</div>
            <button className="flex mr-6 w-10 h-4 text-white justify-start">
              Signup
            </button>
          </div>
        ) : null}
      </nav>
      {children}
    </div>
  )
}
