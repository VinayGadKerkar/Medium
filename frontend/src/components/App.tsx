import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogsCompo";
import { useRecoilValue } from "recoil";
import { UserDetails } from "../blogAtom/atoms";

export function AppBar(){
    const userDetails = useRecoilValue(UserDetails)
    const navigate = useNavigate();
    const id = localStorage.getItem("userId")
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={`/blogs`} className="flex justify-center flex-col">
            Medium
        </Link>
        <div>
            <button className="w-24 h-6 bg-blue-600 rounded-full mr-4" onClick={() =>{
                navigate("/publish")
            }}>
                Create Blog
            </button>
            <Link to={`/user/${id}`}>
            <Avatar name = {userDetails.name}/> 
            </Link>
            
        </div>
    </div>
}