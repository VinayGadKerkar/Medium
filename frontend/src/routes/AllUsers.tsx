import { useRecoilValue } from "recoil";
import { BlogSkeleton } from "../Skeletons/BlogSkeleton";
import { AppBar } from "../components/App";
import { Users } from "../components/Users";
import { useUsers } from "../hooks/blogs";
import { UserDetails } from "../blogAtom/atoms";



export function AllUsers(){
     const userCheck = useRecoilValue(UserDetails)
     const {users , loading} = useUsers();
     if (loading) {
        return <div>
           <AppBar />
           <BlogSkeleton />
           <BlogSkeleton />
          
  
        </div>
     }
     return <div>
        {userCheck.admin? <div>
        <AppBar/>
       {
           users.map((user) =>{
              return <div>
               <Users email={user.email} id={user.id}/>
              </div>
           })
       }
   </div>:<div>
   <section className="relative z-10  py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[50px] font-bold text-blue-500 leading-none text-white sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold text-blue-500 leading-tight text-white">
                  Oops! That page can’t be found
                </h4>
                <p className="mb-8 text-lg text-white text-blue-500">
                  The page you are looking for it maybe deleted
                </p>
            
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div className="flex h-full w-1/3">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div>
      </section>
    </div>}
     
     </div>
}
