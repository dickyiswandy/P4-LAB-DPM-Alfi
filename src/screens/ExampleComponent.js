import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ParentComponent from '../components/ParentComponent';

export default function ExampleComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>⚽ SCORE FUTSAL KIKSS</Text>
      <ParentComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00cec9',
    marginBottom: 20,
    textShadowColor: '#0984e3',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});