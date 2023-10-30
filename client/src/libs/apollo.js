import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: HOST_API,
    cache: new InMemoryCache(),
});
