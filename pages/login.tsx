import NavbarContainer from '@components/navbar'
import LogInContainer from '@components/logincontainer'

export default function LogIn() {
  return (
    <NavbarContainer bg_enabled logged_in>
      <LogInContainer></LogInContainer>
    </NavbarContainer>
  )
}
