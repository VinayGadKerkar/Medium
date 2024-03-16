import { dateConverter } from "../Date/date";
import { Blogs } from "../hooks/blogs";
import { Avatar } from "./BlogsCompo";

 
 export function FullBlogCompo({blog}:{blog:Blogs}){
    const date = dateConverter(blog.publishedDate);
    return  <div className="flex justify-center max-w-screen min-h-screen bg-stone-200">
    <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
        <div className="col-span-8">
            <div className="text-5xl font-extrabold">
                {blog.title}
            </div>
            <div className="text-slate-500 pt-2">
                {date}
            </div>
            <div className="pt-4">
                {blog.content}
            </div>
        </div>
        <div className="col-span-4">
            <div className="text-slate-600 text-lg">
                Author
            </div>
            <div className="flex w-full">
                <div className="pr-4 flex flex-col justify-center">
                    <Avatar  name={blog.user.name} />
                </div>
                <div>
                    <div className="text-xl font-bold">
                        {blog.user.name}
                    </div>
                    <div className="pt-2 text-slate-500">
                        Random catch phrase about the author's ability to grab the user's attention
                    </div>
                </div>
            </div>  
        </div>
        
    </div>
</div>
 }