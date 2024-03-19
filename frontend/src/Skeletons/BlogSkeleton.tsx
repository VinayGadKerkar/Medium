


export function BlogSkeleton() {
    return <div className="">

        <div className="flex justify-center ">
            <div className="w-full md:w-[50%]">
                <div role="status" className=" animate-pulse">
                    <div className=" m-12">
                        <div className="flex my-2">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

                            <div className="px-2 font-normal"><div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div></div>
                            <div className="flex justify-center flex-col pr-1">
                                <div className="h-1 w-1 rounded-full bg-slate-400"></div>
                            </div>
                            <div className="text-slate-500 font-light"><div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div></div>
                        </div>

                        <div className="font-bold text-xl"><div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div></div>
                        <div className="text-slate-700"><div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div></div>
                        <div className="py-8 pl-2 text-sm text-slate-400"><div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div></div>
                        <div className="h-0.5 bg-slate-200"><div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div></div>
                    </div>


                    <span className="sr-only">Loading...</span>
                </div>



            </div>



        </div>



    </div>
}