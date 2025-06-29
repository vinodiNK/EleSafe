import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function UpdateElephantLocation() {
  return (
    <LinearGradient colors={["#3B82F6", "#8B5CF6"]} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>🐘 Elephant Location Reporting</Text>
        <Text style={styles.text}>This is where users can report elephant locations</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});