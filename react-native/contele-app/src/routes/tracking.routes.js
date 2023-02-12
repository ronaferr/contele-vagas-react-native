import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import Home from '../pages/Home/index';
import Status from '../pages/Status/index';

export function TrackingRoutes() {
  return (
    <Navigator>
      <Screen
        name='Home'
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#1a6cb2',
          },
          headerTintColor: '#fff',
        }}
      />
      <Screen
        name='Status'
        component={Status}
        options={{
          headerStyle: {
            backgroundColor: '#1a6cb2',
          },
          headerTintColor: '#fff',
        }}
      />
    </Navigator>
  )
};
