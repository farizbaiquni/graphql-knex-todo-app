import { gql } from "@apollo/client";

const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      name
      email
      address
      phone
    }
  }
`;

export default GET_ALL_USERS;
