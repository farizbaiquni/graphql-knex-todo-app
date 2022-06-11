import express from 'express'
import { graphqlHTTP } from "express-graphql";
import cors from 'cors'
import { schema } from './Schema';
const PORT = 3005 

const main = async () => {

    const app = express()
    app.use(cors())
    app.use(express.json())
    
    app.use('/graphql', graphqlHTTP({
        schema, 
        graphiql: true,
    }))

    app.listen(PORT, () => {
        console.log("Server running...")
    })
}

main().catch( e => {
    console.log(e)
})