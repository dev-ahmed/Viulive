import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home} from '../components/pages/Home';
import {Settings} from '../components/pages/Settings';
import {ROUTES} from '../constants/routes';
import {translate} from '../utils/i18n-helper';

type ParamList = {
  Home: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<ParamList>();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTES.HOME} component={Home} />
      <Tab.Screen
        options={{tabBarLabel: translate('Settings')}}
        name={ROUTES.SETTINGS}
        component={Settings}
      />
    </Tab.Navigator>
  );
};
