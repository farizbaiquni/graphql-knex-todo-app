import { GraphQLObjectType, GraphQLSchema } from "graphql"
import { CREATE_USER } from "./Mutations/Users"
import { GET_ALL_USERS } from "./Queries/Users"

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getAllUsers: GET_ALL_USERS
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: CREATE_USER
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})