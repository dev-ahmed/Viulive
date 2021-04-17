import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from '../constants/routes';
import {Settings} from '../components/pages/Settings';
import {translate} from '../utils/i18n-helper';
import {HomeNav} from './home-navigation';

type ParamList = {
  HomeNav: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<ParamList>();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{tabBarLabel: translate('Home')}}
        name={ROUTES.HOME_NAV}
        component={HomeNav}
      />
      <Tab.Screen
        options={{tabBarLabel: translate('Settings')}}
        name={ROUTES.SETTINGS}
        component={Settings}
      />
    </Tab.Navigator>
  );
};
