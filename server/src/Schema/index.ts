import { GraphQLObjectType, GraphQLSchema } from "graphql"
import { CREATE_USER } from "./Mutations/Users"
import { GET_ALL_USERS, GET_USER_BY_ID } from "./Queries/Users"
import { GET_TODOS_BY_ID } from "./Queries/Todos"
import { UPDATE_TODO_BY_ID } from "./Mutations/Todos"

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getAllUsers: GET_ALL_USERS,
        getTodosById: GET_TODOS_BY_ID,
        getUserById: GET_USER_BY_ID,
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: CREATE_USER,
        updateTodoById: UPDATE_TODO_BY_ID
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})