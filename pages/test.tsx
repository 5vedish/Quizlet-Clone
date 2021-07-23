import NavbarContainer from '@components/navbar'
import Questions from '@components/test.tsx/questions'
import { getQuestions } from '@lib/questions'
import { GetServerSideProps } from 'next'

export default function Testing({
  question_bank,
}: {
  question_bank: {
    type: String
    question: String
    choices: String[]
    answer: String
  }[]
}) {
  return (
    <NavbarContainer bg_enabled logged_in authing={false}>
      <Questions question_bank={question_bank}></Questions>
    </NavbarContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getQuestions()

  const question_bank = data?.question_bank

  return {
    props: {
      question_bank,
    },
  }
}
