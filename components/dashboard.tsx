import { useState } from 'react'

function TestBox({ testName }: { testName: String }) {
  return (
    <button className="bg-indigo-500 h-64 w-96 rounded-2xl mt-4 hover:bg-indigo-700 shadow-lg">
      <div className="text-white text-3xl">{testName}</div>
    </button>
  )
}

export default function Dashboard() {
  let [user, setUser] = useState('Andrew')
  let [testList, setTestList] = useState([
    'CS 6969',
    'CS 420',
    'CS -500',
    'CS -500',
    'CS -500',
    'CS -500',
    'CS -500',
  ])

  const tests = []
  for (var i = 0; i < testList.length; i += 1) {
    tests.push(<TestBox testName={testList[i]}></TestBox>)
  }

  return (
    <div className="flex flex-row justify-between h-full w-full">
      <div className="flex flex-col w-1/4 bg-white h-full">
        <div className="flex flex-row justify-center">
          <div className="rounded-full bg-purple-400 h-96 w-96 mt-8">
            <div className="mt-8 text-center text-7xl"> {user} </div>
          </div>
        </div>
        <button className="mt-8 bg-purple-500 rounded-2xl h-16 mx-4 hover:bg-purple-600 shadow-lg">
          <div className="text-4xl text-white">Create New Test</div>
        </button>
      </div>

      <div className="flex flex-col justify-start w-3/4 overflow-auto">
        <div className="text-center mt-4 bg-white rounded-2xl h-20 mx-4">
          <div className="text-black text-3xl mt-5 mb-5">Your Collections</div>
        </div>
        <div className="flex ml-5 lg:grid lg:grid-cols-3 lg:gap-x-20">
          {tests}
        </div>
      </div>
    </div>
  )
}
