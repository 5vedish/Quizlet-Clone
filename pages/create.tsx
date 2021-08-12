import NavbarContainer from '@components/navbar'
import CreateFlashcard from '@components/flashcards/createFlashcard'
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
        <div className="mt-20 w-screen h-full flex flex-col justify-start items-center">
          {/*Fixed 'Create a new study set' and 'Create' button header*/}
          <div className="w-screen h-16 bg-white shadow-2xl flex justify-center">
            <div className="w-5/6 flex flex-row justify-between items-center text-xl font-black text-left text-gray-700">
              <div>Create a new study set</div>
              <button
                className="font-semibold text-base text-align-center w-20 h-10 text-white rounded-lg
          bg-purple-500 active:bg-purple-600 cursor-pointer"
              >
                Create
              </button>
            </div>
          </div>
          <div className="overflow-auto w-screen h-5/6 flex flex-col justify-start items-center">
            {/*Flashcard set title and description*/}
            <div className="w-full h-60 bg-white flex flex-none justify-center">
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
            {/*Add flashcards*/}
            <div className="mt-10 w-5/6 grid grid-cols-1 gap-10 auto-rows-max xl:grid-cols-2 ">
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
