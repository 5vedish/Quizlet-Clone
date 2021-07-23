import QuestionBox from './question'

export default function Questions({
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
    <div className="flex flex-col h-auto w-full justify-start items-center mt-24 overflow-y-auto">
      {question_bank.map((question, index) => (
        <QuestionBox question={question} index={index}></QuestionBox>
      ))}
    </div>
  )
}
