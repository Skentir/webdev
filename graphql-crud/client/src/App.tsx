import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import './App.css';

import CreateUser from './Components/CreateUser';
import GetUsers from './Components/GetUsers';
import UpdatePassword from './Components/UpdatePassword';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
  });

  return (
    <>
    <ApolloProvider client={client}>
      <CreateUser/>
      <GetUsers/>
      <UpdatePassword/>
    </ApolloProvider>
    </>
  );

}

export default App;
