import { useParams } from "react-router-dom";
import { AppBar } from "../components/App";
import { FullBlogCompo } from "../components/FullBlog";
import { SingleBlogSkeleton } from "../Skeletons/SingleBlogSkel";
import { useRecoilValueLoadable } from "recoil";
import { blogFamily } from "../blogAtom/atoms";

export function Blog(){
    const {id} = useParams();
    const blog = useRecoilValueLoadable(blogFamily(id||""))
    if(blog.state == "loading"){
        return <div>
            <AppBar/>
            <SingleBlogSkeleton/>
        </div>
    }
    return <div className="bg-stone-200 w-screen h-screen" >
        <AppBar/>
        <FullBlogCompo blog={blog.contents}/>
        
    </div>
}