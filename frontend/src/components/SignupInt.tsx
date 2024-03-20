import { SignupInput } from "@vinay!2/project-common";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config";
import swal from "sweetalert";

export default function SignupInt(){
    const navigate = useNavigate();
    const [authorDetails , setAuthorDetails] = useState<SignupInput>({
      email:"",
      name:"",
      password:""
})
    async function  createUser(){
      try{

        const userCreated = await axios.post(`${BACKEND_URL}/api/v1/user/signup` , authorDetails);
        const token = userCreated.data.jwt;
        const userId = userCreated.data.userId;
        localStorage.setItem("token" , token);
        localStorage.setItem("userId" ,userId);
        swal("Congrats!", "Your account is created!", "success");
        navigate("/blogs");
      }
      catch(e){
        swal ( "Oops" ,  "Something went wrong!" ,  "error" )
      }
    }
    return <div className="flex justify-center ">
      <div className=" h-screen ">
        <div className="mt-14 text-center text-2xl font-bold">Create an account </div>

        <div className="flex m-6 text-gray-500">
            <div>Already have an account?</div>
            <button className="underline" onClick={() =>{
              navigate("/signin")
            }}>Login</button>
        </div>

        <div className="py-2 font-bold">Username</div>
        <input type="text" className="border border-gray-500 border-2 w-full p-1 rounded bg-stone-200" onChange={(e) =>{
          setAuthorDetails({
            ...authorDetails , 
            name:e.target.value
          })
        }}/>

        <div className="py-2 font-bold">Email</div>
        <input type="text" className="border border-gray-500 border-2 w-full p-1 rounded bg-stone-200" onChange={(e) =>{
          setAuthorDetails({
            ...authorDetails , 
            email:e.target.value
          })
        }}/>

        <div className="py-2 font-bold">Password</div>
        <input type="password" className=" border border-gray-500 border-2 w-full p-1 rounded bg-stone-200" onChange={(e) =>{
          setAuthorDetails({
            ...authorDetails , 
            password:e.target.value
          })
        }}/>

        <button className="mt-6 text-center text-white bg-black rounded w-full py-2" onClick={createUser}>Sign up</button>
      </div>

    </div>
}