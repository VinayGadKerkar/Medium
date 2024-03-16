import { Hono } from "hono";
import { sign, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { createBlogInput, updateBlogInput } from "@vinay!2/project-common";


export const blogRouter = new Hono<{
   Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string
   },
   Variables: {
      userId: string

   }
}>()

blogRouter.use('/*', async (c, next) => {
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

blogRouter.post('/', async (c) => {
   const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
   }).$extends(withAccelerate())
   try {

      const body = await c.req.json();
      const response = createBlogInput.safeParse(body);
       if(!response.success){
         c.status(411);
         c.json({
            message:"Invalid Inputs"
         })
      }
      const userId = c.get("userId")
      const blog = await prisma.post.create({
         data: {
            title: body.title,
            content: body.content,
            authorId: userId
         }
      })


      return c.json({
         blogId: blog.id
      })
   }
   catch (e) {
      c.status(403);
      c.json({
         message: "ERROR"
      })
   }
})

blogRouter.put('/update', async (c) => {

   const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
   }).$extends(withAccelerate())
   try {

      const body = await c.req.json();
      const response = updateBlogInput.safeParse(body);
       if(!response.success){
         c.status(411);
         c.json({
            message:"Invalid Inputs"
         })
      }
      const blog = await prisma.post.update({
         where: {
            id: body.id
         },
         data: {
            title: body.title,
            content: body.content
         }
      })

      return c.json({
         message: "Blog Updated"
      })
   }
   catch (e) {
      c.status(403);
      c.json({
         message: "ERROR"
      })
   }
})

blogRouter.get('/bulk', async (c) => {
   const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
   }).$extends(withAccelerate())
   try{

      const blogs = await prisma.post.findMany({
         select:{
            title:true ,
            content : true ,
            id:true ,
            authorId:true,
            publishedDate:true,
            user:{
                 select :{
                  name:true
                 }
            }
         }
      });
      return c.json(blogs);
   }
   catch (e) {
      c.status(403);
      c.json({
         message: "ERROR"
      })
   }
})

blogRouter.get('/:id', async (c) => {
   const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
   }).$extends(withAccelerate())
   const id = c.req.param("id");
   try{

      const blog = await prisma.post.findFirst({
         where: {
            id: id
         } , 
         select:{
            title:true ,
            content:true,
            authorId:true,
            publishedDate:true,
            user:{
               select:{
                  name:true
               }
            }
         }
      })
   
      return c.json(
         blog
      )
   }
   catch (e) {
      c.status(403);
      c.json({
         message: "ERROR"
      })
   }
})




