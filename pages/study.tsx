import NavbarContainer from '@components/navbar'
import FlashCard from '@components/flashcards/flashcard'
import FlashCardNav from '@components/flashcards/flashcardNav'
import { GetServerSideProps } from 'next'
import { getFlashCards } from '@lib/flash'

export default function Study({
  flash_cards,
}: {
  flash_cards: {
    front: String
    back: String
  }[]
}) {
  return (
    <NavbarContainer bg_enabled={true} logged_in={true} authing={false}>
      <FlashCard flash_card={flash_cards[0]}></FlashCard>
      <FlashCardNav></FlashCardNav>
    </NavbarContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getFlashCards()

  const flash_cards = data?.flash_cards
  console.log(flash_cards)
  return {
    props: {
      flash_cards,
    },
  }
}
