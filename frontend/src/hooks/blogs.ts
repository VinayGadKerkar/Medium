import axios from "axios";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";
import swal from "sweetalert";
// import { useRecoilValueLoadable } from "recoil";
// import { blogFamily } from "../blogAtom/atoms";

 
export interface Blogs {
    title:string , 
    content:string ,
    id:string , 
    authorId:string,
    publishedDate:string,
    user :{
        id:string,
        name:string,
        description:string
    }
}

 export function useBlogs(){
    const [loading , setLoading] = useState(true);
    const [blogs , setBlogs] = useState<Blogs[]>([])
    useEffect(() =>{
        try{

            axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                headers:{
                    Authorization: "Bearer " +localStorage.getItem("token")
                }
            })
            .then((res) => {
                setBlogs(res.data);
                setLoading(false);
            })
        }
        catch{
            swal ( "Oops" ,  "Something went wrong!" ,  "error" );
        }
    } ,[])
    
    return {
        loading ,
        blogs
    }
 }
 type UserDetails = {
    name: string,
    description:string,
    admin:boolean,
    posts: 
        {
            id: string,
            title:string ,
            content:string ,
            published: boolean,
            publishedDate:string,
            authorId:string 
        }[]
    
}

 
 export function useUserDetails({id}:{id:string}){
    const [loading , setLoading] = useState(true);
    const [details , setDetails] = useState<UserDetails>({
        name:"",
        description:"",
        admin:false,
        posts:[]
    })
    useEffect(() =>{
        try{

            axios.get(`${BACKEND_URL}/api/v1/user/getuser/${id}`,{
                headers:{
                    Authorization: "Bearer " +localStorage.getItem("token")
                }
            })
            .then((res) => {
                setDetails(res.data);
                setLoading(false);
            })
        }
        catch{
            swal ( "Oops" ,  "Something went wrong!" ,  "error" );
        }
    } ,[id])
    
    return {
        loading ,
        details
    }
 }

 type Users = {
    email:string,
    name:string,
    id:string
 }

 export function useUsers(){
    const [loading , setLoading] = useState(true);
    const [users , setUsers] = useState<Users[]>([]);
    useEffect(() =>{
        try{

            axios.get(`${BACKEND_URL}/api/v1/admin/delete/users`,{
                headers:{
                    Authorization: "Bearer " +localStorage.getItem("token")
                }
            })
            .then((res) => {
                setUsers(res.data);
                setLoading(false);
            })
        }
        catch{
            swal ( "Oops" ,  "Something went wrong!" ,  "error" );
        }
    } ,[])
    
    return {
        loading ,
        users
    }
 }