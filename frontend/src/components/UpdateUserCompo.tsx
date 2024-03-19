import { useState } from "react";
import { AppBar } from "./App";
import axios from "axios";
import { BACKEND_URL } from "../config";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useUserDetails } from "../hooks/blogs";
import { SingleBlogSkeleton } from "../Skeletons/SingleBlogSkel";
import { UpdateUserSkel } from "../Skeletons/UserUpdateSkel";

type userType = {
    name: string,
    description: string
}

export function UpdateUserCompo() {
    // const [name, setName] = useState("");
    // const [description, setDescription] = useState("");
    


    const {details , loading} = useUserDetails({
        id:localStorage.getItem("userId") ||""
    }
        );
        const [userDetails , setUserDetails] = useState<userType>({
            name:details.name,
            description:details.description
        })
    const navigate = useNavigate();
    if(loading){
        return <div>
             <AppBar />
             <UpdateUserSkel/>
        </div>
    }

    return <div>

        <AppBar />
        <div className="flex justify-center bg-stone-200 h-screen">
            <div className="border-gray-200  m-10 w-full md:w-[50%] h-[85%] border border-gray-200 border-2 bg-white rounded">
                <div className="grid place-items-center m-5 font-sans">

                    <div className="p-2 font-bold text-3xl">Update User</div>
                    <p className="p-2 text-base text-gray-500 text-sm">Enter the changes</p>
                    <div className=" w-full">
                        <div className="py-2">Name</div>
                        <input type="text" defaultValue={details.name} className="border border-slate-300 border-1 w-full h-8 p-2 bg-stone-200" onChange={(e) => {
                            setUserDetails({...userDetails,
                            name:e.target.value
                        });
                        }} />
                    </div>
                    <div className=" w-full">
                        <div className="py-2">Decription</div>
                        <textarea id="editor" rows={4} placeholder="Add description" defaultValue={details.description} className="block border border-slate-300 border-1 w-full p-2 mt-2 bg-stone-200" required onChange={(e) => {
                            setUserDetails({...userDetails,
                            description:e.target.value
                        });
                        }} />
                    </div>
                    <div className="w-full flex justify-center mt-4">
                        <button className="w-36 h-8 bg-blue-600 rounded mt-2 text-white" onClick={async () => {
                            try {

                                await axios.put(`${BACKEND_URL}/api/v1/user/getuser/update`, {
                                    name: userDetails.name == ""?details.name:userDetails.name,
                                    description: userDetails.description == ""?details.description:userDetails.description
                                },
                                    {
                                        headers: {
                                            Authorization: "Bearer " + localStorage.getItem("token")
                                        }
                                    }
                                )
                                swal("User Details Updated", " ", "success");
                                navigate(`/user/${localStorage.getItem("userId")}`);
                            }
                            catch {
                                swal("Oops", "Something went wrong!", "error");
                            }
                        }}>Save changes</button>
                    </div>

                </div>
            </div>
        </div>

    </div>
}