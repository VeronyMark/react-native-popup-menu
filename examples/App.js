import React from 'react';
import Demo from './Demo';

import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <Demo/>
      </SafeAreaProvider>
    );
  }
}
