export const baseSchema = `#graphql
  scalar Upload

  directive @hasPermission(permission: Int!) on FIELD_DEFINITION
  directive @authenticated on FIELD_DEFINITION

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    permission: Int!
    createdAt: String!
    updatedAt: String!
  }
`;
