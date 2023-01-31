import { ApolloServer, gql } from "apollo-server";

// GET /text
// GET /hello
const typeDefs = gql`
  type User {
    id: ID
    username: String
  }
  type Tweet {
    id: ID!
    text: String!
    author: User!
  }
  type Query {
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet!
  }
  type Mutation {
    psotTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
`;

const server = new ApolloServer({ typeDefs });

// Apollo Server requires either an existing schema, modules or typeDefs
// >> error 발생
server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
