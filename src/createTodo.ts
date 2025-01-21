import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;

interface validate{
    title:string,
    description:string
}

async function createTodo(validate:validate){
    const title1 = validate.title;
    const description1 = validate.description;
    const res = await prisma.todo.create({
        data:{
            title:title1,
            description:description1
        }
    })
    console.log("todo is created",res);
}

createTodo({title:"go to toilet for pee",description:"this is no important"});
createTodo({title:"go to study",description:"this is important"});
createTodo({title:"go to college",description:"unimportant"});
