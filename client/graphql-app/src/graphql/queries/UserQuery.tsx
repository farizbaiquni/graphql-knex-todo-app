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

const GET_TODOS_BY_ID = gql`
  query getTodosById($id: String!) {
    getTodosById(id: $id) {
      id
      title
      body
      updated_at
      created_at
    }
  }
`;

export { GET_ALL_USERS, GET_TODOS_BY_ID };
