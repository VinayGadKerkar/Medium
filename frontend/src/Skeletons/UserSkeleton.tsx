

export function UserSkeleton() {

    return <div className="flex justify-center">


        <div role="status" className=" animate-pulse">
            <div className="flex justify-center m-12 w-[75%]">
                <div>
                    <div className="flex h-24 ">
                        <div className="flex justify-center flex-col mr-14" >
                            <div className="h-24 w-20 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
                        </div>
                        <div className="text-lg m-2 w-64">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                          
                        </div>

                    </div>


                </div>
            </div>

            <span className="sr-only">Loading...</span>
        </div>
    </div>

}