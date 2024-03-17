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
            <div className="flex">

        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z"/></svg>
        <div className="pl-2 pt-3">Medium</div>
            </div>
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