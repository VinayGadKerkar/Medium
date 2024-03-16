import { useState } from "react";
import { AppBar } from "../components/App";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


export function PublishBlog(){
    const navigate = useNavigate();
    const  [title , setTitle] = useState("");
    const [content , setContent] = useState("");


    return <div>
        <AppBar/>
        <div className="flex justify-center "> 
        <div className="w-[50%] pt-6 ">
            <input type="text" placeholder="Title" className="border border-slate-300 border-1 w-full h-8 p-2 bg-stone-200" onChange={(e) =>{
                setTitle(e.target.value)
            }}/>
            <textarea id="editor"  rows={10} placeholder="Write your blog" className="block border border-slate-300 border-1 w-full p-2 mt-2 bg-stone-200" required onChange={(e) =>{
               setContent(e.target.value)
            }}>
                
            </textarea>
            <button className="w-24 h-6 bg-blue-600 rounded mt-2" onClick={async () =>{
                try{

                    const blog = await axios.post(`${BACKEND_URL}/api/v1/blog` , {
                        title , 
                        content
                    },
                    {
                        headers:{
                            Authorization: "Bearer "+ localStorage.getItem("token")
                        }
                    }
                    )
                    swal("Blog Posted" , " ","success");
                    navigate(`/blog/${blog.data.blogId}`)
                }
                catch{
                    swal ( "Oops" ,  "Something went wrong!" ,  "error" );
                }

            }}>Publish</button>

        </div>
        </div>
    </div>
}