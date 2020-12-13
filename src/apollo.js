import { ApolloClient , InMemoryCache, gql}  from "@apollo/client";


const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.writeQuery({
          query: gql`
          {
            id
            isLiked
          }
        `,
          id: `Movie:${id}`,

          data: {
            isLiked: !isLiked
          }
        });
      }
    }
  }
});

export default client;
