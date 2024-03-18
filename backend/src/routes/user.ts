import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign , verify } from 'hono/jwt'
import { signininput, signupinput } from '@vinay!2/project-common'


 export const userRouter = new Hono<{
    Bindings:{
       DATABASE_URL: string,
       JWT_SECRET:string
    },
    Variables: {
       userId:string
 
    }
 }>()


 userRouter.post('/signup' , async (c) =>{
    const prisma = new PrismaClient({
       datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{

       const body = await c.req.json();
       const response = signupinput.safeParse(body);
       if(!response.success){
         c.status(411);
         return c.json({
            message:"Invalid Inputs"
         })
       }
       const userCreated = await prisma.user.create({
          data: {
             email:body.email ,
             name:body.name,
             password: body.password
          }
       })
       const token = await sign({id:userCreated.id} , c.env.JWT_SECRET)
       return c.json({
          jwt: token,
          userId:userCreated.id
       })
    }
    catch(e){
      console.log(e);
      c.status(403);
      return c.json({
         message: "ERROR",
         err:e
         
      })
    }
 }) 
 
 
 userRouter.post('/signin' , async (c) =>{
    const prisma = new PrismaClient({
       datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{

       const body = await c.req.json();
       const response = signininput.safeParse(body);
       if(!response.success){
         c.status(411);
         return c.json({
            message:"Invalid Inputs"
         })
      }
    
       const user = await prisma.user.findFirst({
          where: {
             email: body.email , 
             password: body.password
          }
       })
       if(!user){
          c.status(404);
          return c.json({
             message:"user not found"
          })
       }
       const token = await sign({id:user.id} , c.env.JWT_SECRET)
       return c.json({
          jwt: token,
          userId:user.id
       })
    }
    catch(e){
      c.status(403);
      return c.json({
         message: "ERROR"
      })
    }
 
 })
 userRouter.use('/getuser/*', async (c, next) => {
   const header = c.req.header("Authorization") || "";
   const token = header.split(" ")[1];
   const response = await verify(token, c.env.JWT_SECRET);
   if (!response) {
      c.status(401);
      return c.json({
         error: "Not signed in"
      })
   }
   c.set("userId", response.id)
   await next();


})
userRouter.put('/getuser/update' , async (c) =>{
   const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
   }).$extends(withAccelerate())
   const body = await c.req.json();
   const id = c.get("userId");
   try{

      const user = await prisma.user.update({
         where:{
            id:id
         },
         data:{
            name:body.name,
            description:body.description ||""
            
         }
      })   
      if(!user){
         c.status(403);
         return c.json({
            message:"Could Not update details"
         })
      }
      return c.json({
         message:"User Updated"
      });
   }
   catch(e){
      c.status(403);
      c.json({
         message: "ERROR"
      })
    }
 
 })
 

 userRouter.get('/getuser/:id' , async (c) =>{
   const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
   }).$extends(withAccelerate())
   const id = c.req.param("id");
   try{

      const user = await prisma.user.findFirst({
         where:{
            id:id
         },
         select:{
            name:true,
            description:true,
            posts:true
         }
      })   
      if(!user){
         c.status(404);
         return c.json({
            message:"User could not be found"
         })
      }
      return c.json(user);
   }
   catch(e){
      c.status(403);
      c.json({
         message: "ERROR"
      })
    }
 
 })
 