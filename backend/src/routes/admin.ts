import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signupinput } from "@vinay!2/project-common";
import { Hono } from "hono"
import { sign, verify } from "hono/jwt";

export const adminRouter = new Hono<{
    Bindings:{
       DATABASE_URL: string,
       JWT_SECRET:string,
       ADMIN_PASS:string
    },
    Variables: {
       userId:string
 
    }
 }>();
//  adminRouter.use("/signup" , async (c,next) =>{
//     const adminPass = c.req.header("Authorization");
//     const realPass = c.env.ADMIN_PASS;
//     if(adminPass == realPass){
//        await next()
//     }
//     else{
//         c.status(411);
//         return c.json({
//             mesaage:"You are not a admin"
//         })
//     }

//  })

 adminRouter.post("/signup" , async (c) =>{
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
              password: body.password,
              admin: body.adminPass == c.env.ADMIN_PASS?true:false
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

 adminRouter.use('/delete/*', async (c, next) => {
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

adminRouter.delete("/delete/user/:id" , async (c) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
     }).$extends(withAccelerate())

     try{
        const id = c.req.param("id");
        const userDeleted = await prisma.user.delete({
            where:{
                id:id
            }
        })
        return c.json({
            message:"user deleted"
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
adminRouter.delete("/delete/blog/:id" , async (c) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
     }).$extends(withAccelerate())

     try{
        const id = c.req.param("id");
        const userDeleted = await prisma.post.delete({
            where:{
                id:id
            }
        })
        return c.json({
            message:"blog deleted"
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


adminRouter.get("/delete/users" , async (c) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
     }).$extends(withAccelerate())

     try{
        const users = await prisma.user.findMany({
            select:{
                id:true , 
                name:true,
                email:true
            }
        });
        return c.json(users);
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