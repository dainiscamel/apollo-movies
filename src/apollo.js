import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
uri: 'http://localhost:4000',
cache: new InMemoryCache(),
resolvers: {
Movie: {
isLiked: () => false,
},
Mutation: {
toggleLikeMovie: (_, { id, isLiked }, { cache }) => {

const likeMovie = {
__typename: 'Movie',
id: `${id}`,
isLiked: `${isLiked}`,
};
cache.modify({
id: cache.identify(likeMovie),
fields: {
isLiked(cachedName) {
  console.log(!isLiked);
return !isLiked;
},
},
});
},
},
},
});
export default client;