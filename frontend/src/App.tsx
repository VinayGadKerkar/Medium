import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Signup } from './routes/Signup'
import { Signin } from './routes/Signin'
import { Blog } from './routes/Blog'
import { Blogs } from './routes/Blogs'
import { PublishBlog } from './routes/Publish'
import { UserDetails } from './routes/UserDetails'
import { RecoilRoot } from 'recoil'
import { UpdateBlog } from './routes/UpdateBlogs'
import { UpdateUser } from './routes/UpdateUser'
import AdminSignupInt from './components/AdminSignup'
import { AllUsers } from './routes/AllUsers'

function App() {


  return (
    <>
      <div className='font-sans bg-stone-200 min-w-screen min-h-screen bg-stone-200'>

        <RecoilRoot>

          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Signup></Signup>}></Route>
              <Route path='/signin' element={<Signin></Signin>}></Route>
              <Route path='/blog/:id' element={<Blog></Blog>}></Route>
              <Route path='/blogs' element={<Blogs></Blogs>}></Route>
              <Route path='/publish' element={<PublishBlog></PublishBlog>}></Route>
              <Route path='/user/:id' element={<UserDetails></UserDetails>}></Route>
              <Route path='/update/:id' element={<UpdateBlog></UpdateBlog>}></Route>
              <Route path='/update/user' element={<UpdateUser></UpdateUser>}></Route>
              <Route path='/admin/signup' element={<AdminSignupInt></AdminSignupInt>}></Route>
              <Route path='/admin/getusers' element={<AllUsers/>}></Route>
            </Routes>

          </BrowserRouter>
        </RecoilRoot>



      </div>
    </>
  )
}

export default App
