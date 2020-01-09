import React from 'react';
import { Text, StyleSheet, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import ComponentsScreen from './ComponentsScreen';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button 
      onPress={() => navigation.navigate('Components')}
      title="Go to Components Demo"/>
      <Button 
      title="Go to List Demo"
      onPress={() => navigation.navigate('List')}/>
      <Button 
      title="Go to Image Demo"
      onPress={() => navigation.navigate('Image')}/>
      <Button 
      title="Go to Counter Demo"
      onPress={() => navigation.navigate('Counter')}/>
      <Button 
      title="Go to Color Demo"
      onPress={() => navigation.navigate('Color')}/>
      <Button 
      title="Go to Square Color Adjuster Demo"
      onPress={() => navigation.navigate('Square')}/>
      <Button 
      title="Go to Text Demo"
      onPress={() => navigation.navigate('Text')}/>
    </SafeAreaView>
      
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;