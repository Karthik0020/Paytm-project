import db from "@repo/db/client"
import  CredentialsProvider  from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

export const authOtions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials:{
                phone: { label: "phone number" , type: "text" , placeholder:"123456789"},
                password: { label: "Password" , type: "password" }
            },
            async authorize(credentials: any){
                const hashedPassword = await bcrypt.hash(credentials.password , 10)
                const existingUser = await db.user.findFirst({
                    where: {
                        number: credentials.phone
                    }
                })
                if(existingUser){
                    const passwordValidation = await bcrypt.compare(credentials.password , existingUser.password)
                    if(passwordValidation){
                        return{
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.number
                        }
                    }
                    return null;
                }
                try{
                    const user = await db.user.create({
                        data:{
                            number: credentials.phone,
                            password: hashedPassword
                        }
                    })
                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.email
                    }
                }catch(e) {
                    console.log(e)
 
 return null;               }
            }
        })
    ],
    secreat : process.env.JWT_SECRET || "abc" ,
    callbacks:{
        async session({token , session} : any){
            session.user.id = token.sub
            return session
        }
    }
}