import { useState } from 'react'
import Choice from './choice'

export default function QuestionBox({
  question,
  index,
  recordChoice,
}: {
  question: {
    type: String
    question: String
    choices: String[]
    answer: String
  }
  index: number
  recordChoice: (index: number, choice: String) => void
}) {
  const [selected, setSelected] = useState(-1)

  const selectChoice = async (num: number) => {
    setSelected(num)

    const choice = String.fromCharCode(num + 96)

    recordChoice(index, choice)
  }

  return (
    <div className="flex flex-col h-auto w-3/4 mb-12 bg-white shadow-md rounded-md p-4">
      <div className="flex flex-row h-auto w-auto pb-4">
        <p className="mr-2">{index + 1}</p>
        <p>{question.question}</p>
      </div>
      {question.choices.map((choice, index) => (
        <Choice
          choice={choice}
          selectChoice={selectChoice}
          index={index}
          selected={selected}
        ></Choice>
      ))}
    </div>
  )
}
