import 'tailwindcss/tailwind.css'
import { Menu } from '@headlessui/react'

export default function NavbarContainer({
  children,
  bg_enabled,
}: {
  children: React.ReactNode
  bg_enabled: boolean
}) {
  console.log(bg_enabled)

  const background = bg_enabled
    ? ' bg-gradient-to-br from-purple-300 via-pink-200 to-blue-400'
    : ''

  return (
    <div
      className={`flex flex-col w-screen h-screen justify-start items-center ${background}`}
    >
      <nav className="flex flex-row w-screen h-20 bg-indigo-600"></nav>
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
