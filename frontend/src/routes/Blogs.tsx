import { Link } from "react-router-dom";
import { BlogCompo } from "../components/BlogsCompo";
import { useBlogs } from "../hooks/blogs";
import { AppBar } from "../components/App";
import { BlogSkeleton } from "../Skeletons/BlogSkeleton";

export function Blogs() {
   const { loading, blogs } = useBlogs();
   if (loading) {
      return <div>
         <AppBar />
         <BlogSkeleton />
         <BlogSkeleton />
        

      </div>
   }

   return <div>
      <AppBar />

      <div className="flex justify-center bg-stone-200">
         <div className="w-[50%] ">

            {blogs.map(blog => {
               return <Link to={`/blog/${blog.id}`}>
                  <div className=" max-w-xl shadow-lg ">
                     <BlogCompo author={blog.user.name} title={blog.title} content={blog.content} publishedDate={blog.publishedDate} authorId={blog.authorId} />
                  </div>
               </Link>

            })}
         </div>



      </div>
   </div>

}