import NavbarContainer from '@components/navbar'
import SignupCard from '@components/signup'

export default function SignUp() {
  return (
    <NavbarContainer bg_enabled={true} logged_in={false} authing>
      <SignupCard></SignupCard>
    </NavbarContainer>
  )
}
