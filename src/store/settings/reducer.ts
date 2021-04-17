import {Reducer} from 'redux';
import {
  CHANGE_LANGUAGE,
  CHANGE_THEME,
  SettingsAction,
  SettingsState,
} from './types';

const initialState = {
  theme: 'light',
  language: 'en',
};

export const settingsReducer: Reducer<SettingsState, SettingsAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
    default:
      return state;
  }
};
