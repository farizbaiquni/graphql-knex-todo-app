import { GraphQLList } from "graphql"
import { dbConn } from "../../db/databaseConnection"
import { UserType } from "../TypeDefs/UserType"

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve: () => {
        return dbConn.select().from('users').then( data => data )
    }
}