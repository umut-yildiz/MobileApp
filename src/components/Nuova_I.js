import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SensorX_Critical from './Critical';
import SensorX_Warning from './Warning';
import SensorX_Status from './Status';

const Tab = createBottomTabNavigator();

const SensorX = () => {
  return (
    <Tab.Navigator
      initialRouteName="Critical"
      screenOptions={{
        tabBarStyle: {
          height: 50,
          backgroundColor: '#013A71',
        },
      }}
    >
      <Tab.Screen
        name="Critical"
        component={SensorX_Critical}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'red' : 'white' }}>Critical</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="alarm-light" color={focused ? 'red' : 'white'} size={35} />
          ),
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="Status"
        component={SensorX_Status}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'green' : 'white' }}>Status</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="bell-check-outline" color={focused ? 'green' : 'white'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Warning"
        component={SensorX_Warning}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'orange' : 'white' }}>Warning</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="alert" color={focused ? 'orange' : 'white'} size={30} />
          ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
};

export default SensorX;
