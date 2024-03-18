import { Link, useNavigate, useParams } from "react-router-dom";
import { AppBar } from "../components/App"
import { useUserDetails } from "../hooks/blogs";
import { BlogCompo } from "../components/BlogsCompo";
import { UserSkeleton } from "../Skeletons/UserSkeleton";
import { BlogSkeleton } from "../Skeletons/BlogSkeleton";

export function UserDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { details, loading } = useUserDetails({
        id: id || ""
    })

    if (loading) {
        return <div>
            <AppBar />

            <UserSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />

        </div>
    }
    return <div>
        <AppBar />
        {id == localStorage.getItem("userId") ? <div className="flex justify-center  w-[70%]">
            <div className="flex justify-end w-full">
                <button className="w-28 h-6 bg-slate-600 text-white rounded " onClick={() => {
                    navigate('/update/user');
                }}>Update User</button>
            </div>
        </div> : null}
        <div className="flex justify-center mx-12  mb-12 w-full ">


          

                <div className="flex h-36 w-[50%] " >
                    <div className="flex justify-center flex-col pr-14" >
                        <div className=" flex justify center flex-col relative inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <span className="font-sm text-gray-600 dark:text-gray-300 text-5xl">{details.name[0]}</span>
                        </div>
                    </div>
                    <div className="text-lg w-[60%]">
                        <div className="mb-4">
                            {details.name}
                        </div>
                        <div className="">
                            {details.description}
                        </div>

                    </div>



                


            </div>
        </div>
        <div className="flex justify-center ">
            <div className="w-[50%]">
                <div className="text-xl p-2 border-b-2 border-slate-500 text-center w-24 ">Posts</div>

                {details.posts.map(blog => {

                    return <div className="m-2">

                        <div className=" max-w-full shadow-lg">
                            <Link to={`/blog/${blog.id}`}>

                                <BlogCompo author={details.name} title={blog.title} content={blog.content} publishedDate={blog.publishedDate} authorId={blog.authorId} />

                            </Link>
                            {id == localStorage.getItem("userId") ? <div className="flex justify-end pb-2">

                                <button className="w-28 h-6 bg-blue-600 rounded-full mr-4" onClick={() => {
                                    navigate(`/update/${blog.id}`);
                                }}>Update Blog</button>
                            </div> : null}

                        </div>

                    </div>

                })}
            </div>



        </div>
    </div>

}