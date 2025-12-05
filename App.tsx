import React from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { graphqlClient } from '@/core/services/graphql/client';
import { RootNavigator } from '@/app/navigation/RootNavigator';
import './global.css';

export default function App() {
  return (
    <ApolloProvider client={graphqlClient}>
      <RootNavigator />
    </ApolloProvider>
  );
}
