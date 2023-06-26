export default function Loading() {
    return(
        
        <div className="animate-pulse p-2">
            <div className="grid grid-cols gap-2 p-2">
                <div>

            <div className="rounded w-full h-52 bg-gray-400"></div>
            <div className="flex flex-col mt-5">
                <div className="w-full h-5 bg-gray-400 rounded"></div>
                <div className="mt-2 w-10/12 h-3 bg-gray-400 rounded"></div>
                <div className="mt-2 w-8/12 h-3 bg-gray-400 rounded"></div>
            </div>
            <div className="flex flex-col mt-5">
                <div className="w-full h-5 bg-gray-400 rounded"></div>
                <div className="mt-2 w-3/12 h-3 bg-gray-400 rounded"></div>
                <div className="mt-2 w-1/12 h-3 bg-gray-400 rounded"></div>
            </div>
        </div>
        
      
            </div>
        </div>
        
    )
}
