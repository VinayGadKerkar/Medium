import { useRecoilValueLoadable } from "recoil";
import { SingleBlogSkeleton } from "../Skeletons/SingleBlogSkel";
import { AppBar } from "../components/App";
import {  useParams } from "react-router-dom";
import { blogFamily } from "../blogAtom/atoms";
import { UpdateCompo } from "../components/UpdateCompo";


export function UpdateBlog() {
    
    const { id } = useParams();
    const blog = useRecoilValueLoadable(blogFamily(id || ""))
    if (blog.state == "loading") {
        return <div>
            <AppBar />
            <SingleBlogSkeleton />
        </div>
    }
    return <div className="bg-stone-200 w-screen h-screen" >
        <AppBar />
        <UpdateCompo id = {id || ""} blog = {blog.contents} ></UpdateCompo>
    </div>


}
