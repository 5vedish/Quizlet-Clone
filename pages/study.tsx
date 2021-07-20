import NavbarContainer from '@components/navbar'
import FlashCard from '@components/flashcard'

export default function Study(){
    return (
        <NavbarContainer bg_enabled={true} logged_in={true} authing={false}>
            <FlashCard></FlashCard>
        </NavbarContainer>
    )
}