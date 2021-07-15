import 'tailwindcss/tailwind.css'
import { Menu } from '@headlessui/react'

export default function NavbarContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-screen h-20 flex-col items-center justify-items-center">
      <nav className="flex w-screen h-20 bg-green-500"></nav>
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
