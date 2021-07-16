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
      <nav className="flex flex-row w-screen h-20 bg-indigo-600 justify-between">
        <div className="flex w-16 h-16 border-4 rounded border-white mt-2 ml-6 justify-center items-center">
          <p className="text-white font-bold font-trial">Testlet</p>
        </div>

        {!logged_in || authing ? (
          <div className="flex flex-row mt-8 mr-16">
            <button className="flex w-16 h-4 text-white justify-end">
              Login
            </button>
            <div className="mx-4 text-white font-bold">|</div>
            <button className="flex w-16 h-4 text-white justify-start">
              Signup
            </button>
          </div>
        ) : null}
      </nav>
      {children}
    </div>
  )
}

// /* Name */

// position: absolute;
// width: 128px;
// height: 96px;
// left: -24px;
// top: -8px;

// font-family: Neuton;
// font-style: normal;
// font-weight: normal;
// font-size: 22px;
// line-height: 150%;
// /* or 33px */
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;
