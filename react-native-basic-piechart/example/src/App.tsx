import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import PieChart from '../../src/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>React Native Pie Chart</Text>
      <PieChart dataValues={[30, 50, 40, 25, 80, 70, 80, 50, 60]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  heading: {
    fontSize: 28,
    marginBottom: 80,
    color: '#4b465c',
    fontWeight: '500',
  },
});
