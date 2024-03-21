import { useRecoilValue } from "recoil";
import { dateConverter } from "../Date/date";
import { Blogs } from "../hooks/blogs";
import { Avatar } from "./BlogsCompo";
import { UserDetails } from "../blogAtom/atoms";
import axios from "axios";
import { BACKEND_URL } from "../config";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

 
 export function FullBlogCompo({blog}:{blog:Blogs}){
    const navigate = useNavigate();
    const date = dateConverter(blog.publishedDate);
    const user = useRecoilValue(UserDetails);
    return  <div className="flex justify-center max-w-screen min-h-screen bg-stone-200">
    <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
        <div className="col-span-8">
            <div className=" text-3xl md:text-5xl font-extrabold">
                {blog.title}
            </div>
            <div className="text-slate-500 pt-2">
                {date}
            </div>
            <div className="pt-4">
                {blog.content}
            </div>
           {user.admin||localStorage.getItem("userId") == blog.user.id?<div className="flex justify-center mt-28">
            <button className="w-28 h-6 bg-slate-600 text-white rounded-full" onClick={async () =>{
                try{
                     await axios.delete(`${BACKEND_URL}/api/v1/admin/delete/blog/${blog.id}`,{
                       
                            headers:{
                                Authorization: "Bearer " +localStorage.getItem("token")
                            }
                    })
                    swal("Success","Blog was deleted" , "success")
                    navigate("/blogs")

                }
                catch(e){
                    console.log(e)
                    swal("Opps","Blog was not deleted" , "error")
                }

                
            }}>Delete Blog</button>
           </div>:null}
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
                        {blog.user.description}
                    </div>
                </div>
            </div>  
        </div>
        
    </div>
</div>
 }