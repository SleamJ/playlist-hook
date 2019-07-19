import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'

import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider} from 'react-apollo-hooks';

//importing semantics
import { Icon } from 'semantic-ui-react'

//importing Components
import MussicList from './Components/MussicList'
import AddMussic from './Components/AddMussic'

//apollo client setup
const client = new ApolloClient ({
  uri: 'http://localhost:4000/graphql'
})

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <div id="main">
        <h1>&nbsp;&nbsp;<Icon name='music'/>&nbsp;My Playlist</h1>
        <MussicList />
        <AddMussic />
      </div>
    </ApolloHooksProvider>
  </ApolloProvider>
)

export default App;
