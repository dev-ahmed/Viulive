import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home} from '../components/pages/Home';
import {ROUTES} from '../constants/routes';

type ParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<ParamList>();

export const HomeNav = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
    </Stack.Navigator>
  );
};
