import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './components/TelaInicial';
import TelaTrilogia1 from './components/TelaTrilogia1';
import TelaTrilogia2 from './components/TelaTrilogia2';
import TelaTrilogia3 from './components/TelaTrilogia3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Tela Inicial' component={TelaInicial}/>
        <Stack.Screen name='Trilogia 1' component={ TelaTrilogia1 }/>
        <Stack.Screen name='Trilogia 2' component={ TelaTrilogia2 }/>
        <Stack.Screen name='Trilogia 3' component={ TelaTrilogia3 }/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
