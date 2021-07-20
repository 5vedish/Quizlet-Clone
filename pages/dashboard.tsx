import NavbarContainer from '@components/navbar'
import Dashboard from '@components/dashboard'

export default function dashboard() {
  return (
    <NavbarContainer bg_enabled logged_in={true} authing={false}>
      <div className="max-h-screen w-screen flex-grow">
        <Dashboard />
      </div>
    </NavbarContainer>
  )
}
