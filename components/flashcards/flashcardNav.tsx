import 'tailwindcss/tailwind.css'

export default function FlashCardNav (){
    return (
        <div className="flex fixed bottom-0 h-12 w-full bg-white items-center p-4">
            <div>
                <p className="text-gray-700 ">
                    Showing
                    <span className="font-medium font-bold"> 1 </span>
                    to
                    <span className="font-medium font-bold"> 10 </span>
                    of
                    <span className="font-medium font-bold"> 25 </span>
                    cards
                </p>
            </div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                
            </nav>
        </div>
    )
}