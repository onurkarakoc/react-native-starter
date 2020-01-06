import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import ComponentsScreen from './ComponentsScreen';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ComponentsScreen />
    </SafeAreaView>
      
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;