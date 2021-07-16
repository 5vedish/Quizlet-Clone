import NavbarContainer from '@components/navbar'
import LogInContainer from '@components/logincontainer'

export default function LogIn() {
  return (
    <NavbarContainer bg_enabled authing logged_in={false}>
      <LogInContainer></LogInContainer>
    </NavbarContainer>
  )
}
