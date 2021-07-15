import NavbarContainer from "@components/navbar";
import SignupCard from "@components/signup_container";

export default function SignUp(){
    return (
        <NavbarContainer bg_enabled={true}>
            <SignupCard></SignupCard>
        </NavbarContainer>
    )
}