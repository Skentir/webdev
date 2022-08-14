const {gql} = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = BRAZIL
    }

    input UpdateUserInput {
        id: ID!
        newUsername: String!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUsername(input: UpdateUserInput!): User
        deleteUser(id: ID!): User
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }
 
    enum Nationality {
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
        PHILIPPINES
        JAPAN
    }
`

module.exports = {typeDefs}