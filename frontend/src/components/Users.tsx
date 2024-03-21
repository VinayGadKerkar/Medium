import axios from "axios"
import { BACKEND_URL } from "../config"
import swal from "sweetalert"
import { useNavigate } from "react-router-dom"

export function Users({email , id}:{
   
    email:string,
    id:string
}){
    const navigate = useNavigate();

    return <div>
       
        <div className="flex justify-between p-2 mx-14 my-4 border border-slate-300  rounded ">
            <div>{email}</div>
            <button className="bg-slate-300 px-2 rounded" onClick={async () =>{
                try{
                     await axios.delete(`${BACKEND_URL}/api/v1/admin/delete/user/${id}`,{
                       
                            headers:{
                                Authorization: "Bearer " +localStorage.getItem("token")
                            }
                    })
                    swal("Success","User was deleted" , "success")
                    navigate("/admin/getusers")

                }
                catch(e){
                    console.log(e)
                    swal("Opps","User was not deleted" , "error")
                }

                
            }}>Delete user</button>
        </div>
    </div>

}