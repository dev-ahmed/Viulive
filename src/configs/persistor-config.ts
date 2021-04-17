import AsyncStorage from '@react-native-community/async-storage';
import {PersistConfig} from 'redux-persist/es/types';
import {IRootState} from './../store/index';

export const persistConfig: PersistConfig<IRootState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['settingsReducer', 'homeReducer'],
};
