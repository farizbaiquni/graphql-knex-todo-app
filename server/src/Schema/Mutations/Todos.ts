import { GraphQLList, GraphQLString } from "graphql"
import { dbConn } from "../../db/databaseConnection"
import { TodoType } from "../TypeDefs/TodoType"

export const UPDATE_TODO_BY_ID = {
    type: TodoType,
    args: {
        id: {type: GraphQLString},
        title: {type: GraphQLString},
        body: {type: GraphQLString}
    },
    resolve: async(parent: any, args: any) => {
        const { id, title, body } = args;
        return await dbConn.table("todos").where({id: id}).update({title: title, body: body})
        .then( (data) => {console.log(data); return data})
    }
}