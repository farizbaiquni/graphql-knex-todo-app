import { GraphQLList, GraphQLString } from "graphql"
import { dbConn } from "../../db/databaseConnection"
import { UserType } from "../TypeDefs/UserType"

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve: () => {
        return dbConn.select().from('users').then( data => data )
    }
}

export const GET_USER_BY_ID = {
    type: UserType,
    args: {
        id: {type: GraphQLString}
    },
    resolve: async(parent: any, args: any) => {
        const { id } = args;
        return await dbConn.select().from('users').where({
            id: id
        }).then( data => { return data[0]})
    }
}