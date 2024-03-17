import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { SigninInput } from "@vinay!2/project-common";
import { BACKEND_URL } from "../config";
import axios from "axios";
import swal from "sweetalert";


export default function SigninInt(){
    const navigate = useNavigate();
    const [authorDetails , setAuthorDetails] = useState<SigninInput>({
          email:"",
          password:""
    }) 
    async function  loginUser(){
      try{

        const userCreated = await axios.post(`${BACKEND_URL}/api/v1/user/signin` , authorDetails);
        const token = userCreated.data.jwt;
        const userId = userCreated.data.userId;
        localStorage.setItem("token" , token);
        localStorage.setItem("userId" ,userId);
        swal("Congrats!", ", You are signed in!", "success");
        navigate("/blogs")
      }
      catch(e){
        swal ( "Oops" ,  "Something went wrong!" ,  "error" )
      }
    }
    return <div className="flex justify-center ">
      <div className=" h-screen ">
        <div className="mt-14 text-center text-2xl font-bold">Login Into your account </div>

        <div className="flex m-6 text-gray-500">
            <div>Don't have an account?</div>
            <button className="underline" onClick={() =>{
                navigate("/signup")
            }}>Sign Up</button>
        </div>

        <div className="py-2 font-bold">Email</div>
        <input type="text" className="border border-gray-500 border-2 w-full p-1 rounded bg-stone-200" onChange={(e) =>{
          setAuthorDetails({
            ...authorDetails , 
            email:e.target.value
          })
        }}/>

        <div className="py-2 font-bold">Password</div> 
        <input type="password" className=" border border-gray-500 border-2 w-full p-1 rounded bg-stone-200"  onChange={(e) =>{
          setAuthorDetails({
            ...authorDetails , 
            password:e.target.value
          })
        }}/>

        <button className="mt-6 text-center text-white bg-black rounded w-full py-2" onClick={loginUser}>Sign in</button>
      </div>

    </div>
}