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

// Define custom Authenticator components without FormFields override
const components = {
  Header() {
    return (
      <View textAlign="center" padding="large">
        <Image
          alt="Company logo"
          src="/logo.jpg"
          style={{ marginBottom: '1rem', height: '50px' }}
        />
        <Heading level={3}>rosebud v0.0</Heading>
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

const myTheme = {
  name: 'MyCustomTheme',
  tokens: {
    colors: {
      brand: {
        primary: { 10: '#FF6F61' },
      },
    },
    components: {
      button: {
        primary: {
          backgroundColor: { value: '#FF6F61' },
          _hover: { backgroundColor: { value: '#FF5A4F' } },
        },
      },
    },
  },
};

function App() {
  return (
    <Authenticator
      variation="default"
      theme={myTheme}
      components={components}
      usernameAlias="email"
      signUpAttributes={['address', 'family_name', 'given_name', 'phone_number']}
      formFields={{
        signUp: {
          email: { label: 'Email', type: 'email', order: 1 },
          address: { label: 'Address', type: 'text', order: 2 },
          family_name: { label: 'Family Name', type: 'text', order: 3 },
          given_name: { label: 'Given Name', type: 'text', order: 4 },
          phone_number: { label: 'Phone Number', type: 'tel', order: 5 },
          password: { label: 'Password', type: 'password', order: 6 },
          confirm_password: { label: 'Confirm Password', type: 'password', order: 7 },
        },
      }}
    >
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
