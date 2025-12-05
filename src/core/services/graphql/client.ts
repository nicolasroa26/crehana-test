import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { ENVIRONMENT } from '@/core/config/environment';

export const graphqlClient = new ApolloClient({
  link: new HttpLink({
    uri: ENVIRONMENT.GRAPHQL_ENDPOINT,
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Country: {
        keyFields: ['code'],
      },
    },
  }),
});
