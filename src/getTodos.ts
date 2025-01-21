import { PrismaClient } from "@prisma/client";

const prisma  =  new PrismaClient;

interface validate{
    email:string
    id:number
}
async function getTodo(validate:validate){
    const res1 = validate.email;
    const num =validate.id;
    const res = await prisma.user.findFirst({
        where:{email:res1},
    })
    if(res){
        const allTodos = await prisma.todo.findUnique({where:{id:num}});
        console.log(allTodos);
    }
}
getTodo({email:"harrygoodman@gmail.com",id:2});