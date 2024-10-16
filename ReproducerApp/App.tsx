import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text style={styles.result}>Hello World</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  result: {
    padding: 24,
    fontSize: 14,
  },
});

export default App;
