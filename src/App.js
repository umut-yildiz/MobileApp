import { React, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Machine from './components/Machine';
import MOS from './components/MOS';
import SensorX from './components/SensorX';
import Nuova_I from './components/Nuova_I';
import Flexicut from './components/Flexicut';
import Details from './components/Details';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Machine" component={Machine} />
        <Stack.Screen name="MOS" component={MOS} />
        <Stack.Screen name="SensorX" component={SensorX} />
        <Stack.Screen name="Nuova_I" component={Nuova_I} />
        <Stack.Screen name="Flexicut" component={Flexicut} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
