import axios from "axios";
import { atom , atomFamily, selector, selectorFamily } from "recoil";
import { BACKEND_URL } from "../config";
import swal from "sweetalert";


export const blogFamily = atomFamily({
    key:"blogFamily",
    default: selectorFamily({
        key:"blogSelecFamily",
        get: (id:string) => async () =>{
            try{

                const res = await  axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                    headers:{
                        Authorization: "Bearer " +localStorage.getItem("token")
                    }
                })
                return res.data;
            }
            catch{
                swal ( "Oops" ,  "Something went wrong!" ,  "error" );
            }
        }
    })
})
export const UserDetails = atom({
    key:"userDetails",
    default: selector({
        key:"userSelector",
        get:async () =>{
            try{

                const res = await axios.get(`${BACKEND_URL}/api/v1/user/getuser/${localStorage.getItem("userId")}`,{
                    headers:{
                        Authorization: "Bearer " +localStorage.getItem("token")
                    }
                    
                })
                return res.data;
            }
            catch{
                swal ( "Oops" ,  "Something went wrong!" ,  "error" );
            }
        }
    })
})

