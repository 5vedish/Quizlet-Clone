import NavbarContainer from '@components/navbar'
import FlashCard from '@components/flashcards/flashcard'
import FlashCardNav from '@components/flashcards/flashcardNav'

export default function Study() {
  return (
    <NavbarContainer bg_enabled={true} logged_in={true} authing={false}>
      <FlashCard></FlashCard>
      <FlashCardNav></FlashCardNav>
    </NavbarContainer>
  )
}
