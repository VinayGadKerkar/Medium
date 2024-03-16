import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import swal from "sweetalert";
import { Blogs } from "../hooks/blogs";


export function UpdateCompo({id , blog }:{id:string , blog:Blogs}){
    const navigate = useNavigate();
    const  [title , setTitle] = useState("");
    const [content , setContent] = useState("");


    return <div>
             <div className="flex justify-center "> 
        <div className="w-[50%] pt-6 ">
            <input type="text" placeholder={blog.title} className="border border-slate-300 border-1 w-full h-8 p-2 bg-stone-200" onChange={(e) =>{
                e.target.value==""?setTitle(blog.title):setTitle(e.target.value);
            }}/>
            <textarea id="editor"  rows={10} placeholder="Write your blog" defaultValue={blog.content} className="block border border-slate-300 border-1 w-full p-2 mt-2 bg-stone-200" required onChange={(e) =>{
              e.target.value==""?setContent(blog.content):setContent(e.target.value);
            }}>
            </textarea>
            <button className="w-24 h-6 bg-blue-600 rounded mt-2" onClick={async () =>{
                try{

                    const blog = await axios.put(`${BACKEND_URL}/api/v1/blog/update` , {
                        id,
                        title , 
                        content
                    },
                    {
                        headers:{
                            Authorization: "Bearer "+ localStorage.getItem("token")
                        }
                    }
                    )
                    swal("Blog Updated" , " ","success");
                    navigate(`/blogs`);
                }
                catch{
                    swal ( "Oops" ,  "Something went wrong!" ,  "error" );
                }

            }}>Update</button>

        </div>
        </div>
    </div>
   
}