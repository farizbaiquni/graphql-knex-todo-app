import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
export const TodoType = new GraphQLObjectType({
    name: 'Todos',
    fields: () => ({
        id: { type: GraphQLID },
        user_id: { type: GraphQLString },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        created_at: { type: GraphQLString },
    })
})