import { useEffect, useState } from 'react'
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
  const [score, setScore] = useState(0)
  const [record, setRecord] = useState<{ [key: string]: any }>({})

  const recordChoice = (index: number, choice: String) => {
    setRecord({ ...record, [index]: choice })
  }

  const calcScore = () => {
    setScore(
      question_bank.reduce(
        (sum, { answer }, index) => (answer === record[index] ? sum + 1 : sum),
        0,
      ),
    )
  }

  useEffect(() => {
    ;(async () => {})()
  }, [])

  return (
    <div className="flex flex-col h-auto w-full justify-start items-center mt-24 overflow-y-auto">
      {question_bank.map((question, index) => (
        <QuestionBox
          question={question}
          index={index}
          recordChoice={recordChoice}
        ></QuestionBox>
      ))}

      <div className="flex flex-row w-screen h-auto justify-end">
        <button
          className="flex h-12 w-20 justify-center items-center bg-indigo-600 mr-44 rounded-md shadow-md text-white hover:bg-indigo-500"
          onClick={() => {
            calcScore()
            console.log(
              'Your score is ' + score + '/' + question_bank.length + '.',
            )
          }}
        >
          <p>Submit</p>
        </button>
      </div>
    </div>
  )
}
