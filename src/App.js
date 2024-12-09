// src/App.js
import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import Dashboard from './Dashboard';

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <Dashboard />
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;

