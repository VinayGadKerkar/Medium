import { useRecoilValueLoadable } from "recoil";
import { AppBar } from "../components/App";
import {  useParams } from "react-router-dom";
import { blogFamily } from "../blogAtom/atoms";
import { UpdateCompo } from "../components/UpdateCompo";
import { UpdateBlogSkel } from "../Skeletons/UpdateBlogSkel";


export function UpdateBlog() {
    
    const { id } = useParams();
    const blog = useRecoilValueLoadable(blogFamily(id || ""))
    if (blog.state == "loading") {
        return <div>
            <AppBar />
            <UpdateBlogSkel/>
        </div>
    }
    return <div className="bg-stone-200 w-screen h-screen" >
        <AppBar />
        <UpdateCompo id = {id || ""} blog = {blog.contents} ></UpdateCompo>
    </div>


}
