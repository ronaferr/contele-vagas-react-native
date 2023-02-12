import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { TrackingRoutes } from './tracking.routes';

export function Routes(){
  return (
    <NavigationContainer>
      <TrackingRoutes />
    </NavigationContainer>
  )
}