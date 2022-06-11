// USER TYPE
import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        address: { type: GraphQLString },
        phone: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        created_at: { type: GraphQLString },
    })
})