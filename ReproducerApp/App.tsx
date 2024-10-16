import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

function App(): React.JSX.Element {
  const [result, setResult] = useState<string>('');

  useEffect(async () => {
    try {
      const response = await fetch('https://httpbin.org/cookies/set?x=x&y=y');
      const cookies = response.headers.getSetCookie();
      setResult(JSON.stringify(cookies, undefined, 2));
    } catch (error) {
      setResult(error.stack);
    }
  }, [])

  return (
    <SafeAreaView>
      <Text style={styles.result}>{result}</Text>
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
