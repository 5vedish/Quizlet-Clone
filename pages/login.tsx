import NavbarContainer from '@components/navbar'
<<<<<<< HEAD
import LogInContainer from '@components/logincontainer'
=======
import LoginCard from '@components/login'
>>>>>>> 0a47c6cc262eb6c7861bfb224bf74953b7430e1f
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function LogIn() {
  return (
    <NavbarContainer bg_enabled logged_in={false} authing>
      <LoginCard />
    </NavbarContainer>
  )
}
