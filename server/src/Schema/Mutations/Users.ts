import { GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/UserType";
import { dbConn } from "../../db/databaseConnection";

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        address: { type: GraphQLString },
        phone: { type: GraphQLString },
    },
    resolve: async (parent: any, args: any) => {
        const { name, email, address, phone } = args;
        await dbConn('users').insert({
            name,
            email,
            address,
            phone,
        })
        return args
    }
}