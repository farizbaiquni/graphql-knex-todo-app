import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $address: String!
    $phone: String
  ) {
    createUser(name: $name, email: $email, address: $address, phone: $phone) {
      name
      email
      address
      phone
    }
  }
`;
export default CREATE_USER;
