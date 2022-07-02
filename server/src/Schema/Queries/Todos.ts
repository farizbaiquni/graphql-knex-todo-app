import { GraphQLList, GraphQLString } from "graphql"
import { dbConn } from "../../db/databaseConnection"
import { TodoType } from "../TypeDefs/TodoType"

export const GET_TODOS_BY_ID = {
    type: new GraphQLList(TodoType),
    args: {
        id: {type: GraphQLString}
    },
    resolve: async(parent: any, args: any) => {
        const { id } = args;
        return await dbConn.select().from('todos').where({
            user_id: id
        }).then( data => data)
    }
}