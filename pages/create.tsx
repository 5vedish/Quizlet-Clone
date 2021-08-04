import NavbarContainer from '@components/navbar'
import CreateFlashcard from '@components/flashcards/createFlashcard'

export default function create() {
  return (
    <>
      <NavbarContainer bg_enabled={true} logged_in={true} authing={false}>
        <div className="w-full h-72 bg-white flex flex-none">
          {/*Create a new study set and button header*/}
          <div className="mx-40 mt-10 w-5/6 inline">
            <div className="text-xl font-black text-left text-gray-700 flex items-center justify-between sticky">
              Create a new study set
              <button
                className="font-semibold text-base text-align-center w-20 h-10 text-white rounded-lg
          bg-purple-500 active:bg-purple-600 cursor-pointer"
              >
                Create
              </button>
            </div>
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
        <div className="mt-10 w-5/6 flex flex-col gap-y-10">
            <CreateFlashcard />
            <CreateFlashcard />
        </div>
       
      </NavbarContainer>
    </>
  )
}
