import NavbarContainer from '@components/navbar'
import CreateFlashcard from '@components/flashcards/createFlashcard'
import { prisma } from '@lib/prisma'
import { useState } from 'react'

//flashcards.push(<CreateFlashcard index={flashcards.length} removeIndex={removeIndex}></CreateFlashcard>)
export default function create() {
  const [flashcards, setFlashcards] = useState<any>([])
  // const [indices, setIndices] = useState([])
  // const [removeIndex2, setRemoveIndex] = useState(0)

  const removeIndex = (index: number) => {
    let newFlashcards = flashcards.map((flashcard: any) => flashcard)
    newFlashcards.splice(index, 1)
    setFlashcards(newFlashcards)
    console.log(flashcards)
  }

  // const addCard = () => {
  //   let listFlashCards = indices.map((index) =>
  //     <CreateFlashcard index={index}></CreateFlashcard>
  //   );
  // }

  const addCard = () => {
    let newFlashcards = flashcards.map((flashcard: any) => flashcard)
    newFlashcards.push(
      <CreateFlashcard
        index={flashcards.length}
        removeIndex={removeIndex}
      ></CreateFlashcard>,
    )
    setFlashcards(newFlashcards)
    console.log(flashcards)
  }

  return (
    <>
      <NavbarContainer bg_enabled={true} logged_in={true} authing={false}>
        <div className="mt-20 w-screen inline h-full flex flex-col justify-start">
          <div className="text-xl mx-10 font-black text-left text-gray-700 flex items-center justify-between h-1/6">
            Create a new study set
            <button
              className="font-semibold text-base text-align-center w-20 h-10 text-white rounded-lg
          bg-purple-500 active:bg-purple-600 cursor-pointer"
            >
              Create
            </button>
          </div>
          <div className="overflow-auto h-5/6 flex flex-col justify-start">
            <div className="w-full h-2/5 bg-white flex flex-none justify-center">
              {/*Create a new study set and button header*/}
              <div className="mt-10 w-5/6 inline">
                <div>
                  <form className="flex mt-5">
                    <input
                      className="px-3 bg-gray-100 text-black placeholder-gray-400 focus:placeholder-gray-300 h-10 flex-1 
              focus:outline-none cursor-auto rounded-sm"
                      placeholder="Enter a title, like 'Bio 103'"
                    ></input>
                  </form>
                  <form className="flex mt-5">
                    <input
                      type="text"
                      className="px-3 bg-gray-100 text-black placeholder-gray-400 focus:placeholder-gray-300 h-20 flex-1 
              focus:outline-none cursor-auto rounded-sm"
                      placeholder="Enter a description"
                    ></input>
                  </form>
                </div>
              </div>
            </div>
            <div className="px-4 mt-10 w-5/6 xl:grid xl:grid-cols-2 xl:auto-rows-max xl:gap-10">
              {flashcards}
              <div>
                <button
                  className="w-full h-40 bg-white rounded-lg shadow-lg flex justify-center items-center font-black text-xl text-purple-500 
          focus:outline-none active:bg-gray-50 active:text-purple-600"
                  onClick={() => addCard()}
                >
                  Add card +
                </button>
              </div>
            </div>
          </div>
        </div>
      </NavbarContainer>
    </>
  )
}
