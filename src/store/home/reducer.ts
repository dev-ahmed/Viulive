import {Reducer} from 'redux';
import {LIST_ALL_SONGS, SongsAction, SongState} from './types';

const initialState = {
  list: [],
};

export const homeReducer: Reducer<SongState, SongsAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case LIST_ALL_SONGS:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};
