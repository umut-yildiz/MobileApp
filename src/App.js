import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Home from './components/Home';
import MOS from './components/MOS';
import SensorX from './components/SensorX';
import Nuova_I from './components/Nuova_I';
import Flexicut from './components/Flexicut';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MOS" component={MOS} />
        <Stack.Screen name="SensorX" component={SensorX} />
        <Stack.Screen name="Nuova_I" component={Nuova_I} />
        <Stack.Screen name="Flexicut" component={Flexicut} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



