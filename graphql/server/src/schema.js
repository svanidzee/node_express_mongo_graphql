const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    toursForHome: Tours!
  }

  type Tours {
    status: String!
    results: Int
    data: Data!
  }

  type Data {
    tours: [List]
  }

  type List {
    name: String!
    duration: Int
  }
`;

module.exports = typeDefs;
