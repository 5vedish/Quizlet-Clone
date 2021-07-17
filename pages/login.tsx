import NavbarContainer from '@components/navbar'
import LoginCard from '@components/login'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function LogIn() {
  return (
    <NavbarContainer bg_enabled logged_in={false} authing>
      <LoginCard />
    </NavbarContainer>
  )
}
