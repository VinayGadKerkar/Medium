

export function SingleBlogSkeleton() {
    return <div className="">


        <div role="status" className=" animate-pulse">
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full pt-12">
                    <div className="col-span-8">
                        <div className="text-5xl font-extrabold">
                            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        </div>
                        <div className="text-slate-500 pt-2">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        </div>
                        <div className="pt-4">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="text-slate-600 text-lg">
                            <div className="h-2  w-8 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        </div>
                        <div className=" w-full">
                            <div className="pr-4 flex flex-col justify-center">

                            </div>
                            <div>
                                <div className="text-xl font-bold">
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                </div>
                                <div className="pt-2 text-slate-500">
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <span className="sr-only">Loading...</span>
            </div>



        </div>
    </div>
}