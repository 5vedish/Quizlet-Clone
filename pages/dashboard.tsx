import NavbarContainer from '@components/navbar'
import Dashboard from '@components/dashboard'

export default function dashboard() {
  return (
    <NavbarContainer bg_enabled logged_in={true} authing={false}>
      <div className="max-h-full w-screen flex-grow overflow-auto mt-20">
        <Dashboard />
      </div>
    </NavbarContainer>
  )
}
