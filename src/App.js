// src/App.js
import React from 'react';
import { Amplify } from 'aws-amplify';
import {
  Authenticator,
  View,
  Image,
  Heading,
  Text
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';
import Dashboard from './Dashboard';

Amplify.configure(awsconfig);

// Define custom Authenticator components
const components = {
  Header() {
    return (
      <View textAlign="center" padding="large">
        <Image
          alt="Company logo"
          src="/path/to/logo.png" // Update this with your actual logo path
          style={{ marginBottom: '1rem', height: '50px' }}
        />
        <Heading level={3}>Welcome to My App</Heading>
        <Text>Sign in to continue</Text>
      </View>
    );
  },
  Footer() {
    return (
      <View textAlign="center" padding="large">
        <Text>
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </Text>
      </View>
    );
  },
};

// Define a static theme
const myTheme = {
  name: 'MyCustomTheme',
  tokens: {
    colors: {
      brand: {
        primary: {
          10: '#FF6F61', // Your brand's primary color
        },
      },
    },
    components: {
      button: {
        primary: {
          backgroundColor: { value: '#FF6F61' },
          _hover: {
            backgroundColor: { value: '#FF5A4F' },
          },
        },
      },
    },
  },
};

function App() {
  return (
    <Authenticator variation="default" theme={myTheme} components={components}>
      {({ signOut, user }) => (
        <div style={{ padding: '1rem' }}>
          <Heading level={3}>Hello, {user?.username}!</Heading>
          <Dashboard />
          <button onClick={signOut} style={{ marginTop: '1rem' }}>
            Sign Out
          </button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
