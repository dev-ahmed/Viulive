import {Reducer} from 'redux';
import {
  ADD_TO_FAVOIRTES,
  LIST_ALL_SONGS,
  SEARCH_SONGS,
  SongsAction,
  SongState,
} from './types';

const initialState = {
  list: [],
  totalCount: 0,
  favorites: [],
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
        totalCount: action.totalCount,
      };
    case SEARCH_SONGS:
      return {
        ...state,
        list: action.list,
        totalCount: action.totalCount,
      };
    case ADD_TO_FAVOIRTES:
      return {
        ...state,
        favorites: action.favorites,
      };
    default:
      return state;
  }
};
