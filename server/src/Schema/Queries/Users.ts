import { GraphQLList, GraphQLString } from "graphql"
import { dbConn } from "../../db/databaseConnection"
import { UserType } from "../TypeDefs/UserType"
import { TodoType } from "../TypeDefs/TodoType"

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve: () => {
        return dbConn.select().from('users').then( data => data )
    }
}

export const GET_TODOS_BY_ID = {
    type: new GraphQLList(TodoType),
    args: {
        id: {type: GraphQLString}
    },
    resolve: (parent: any, args: any) => {
        const { id } = args;
        return dbConn.select().from('todos').where({
            user_id: id
        }).then( data => data)
    }
}