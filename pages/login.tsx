import NavbarContainer from '@components/navbar'
import LogInContainer from '@components/logincontainer'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function LogIn() {
  return (
    <NavbarContainer bg_enabled logged_in>
      <LogInContainer></LogInContainer>
    </NavbarContainer>
  )
}
