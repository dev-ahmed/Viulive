import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AddSongForm} from '../components/pages/AddSongForm';
import {ROUTES} from '../constants/routes';
import {Tabs} from './tab-navigator';

export type RootStackParamList = {
  Tabs: undefined;
  AddSongForm: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTES.TABS}>
      <Stack.Screen name={ROUTES.TABS} component={Tabs} />
      <Stack.Screen name={ROUTES.ADD_SONG_FORM} component={AddSongForm} />
    </Stack.Navigator>
  );
};
