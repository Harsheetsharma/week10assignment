import { PrismaClient } from "@prisma/client";
const prisma  =  new PrismaClient;

interface validate{
    email:string;
    password:string;
}

async function createUser(validate:validate){
    const res = await prisma.user.create({
        data:{
            email:validate.email,
            password:validate.password,
        }
    })
    console.log(res);

}
createUser({email:"harrygoodman@gmail.com",password:"gholghal"})