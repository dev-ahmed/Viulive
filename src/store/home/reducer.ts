import {Reducer} from 'redux';
import {
  ADD_SONG,
  ADD_TO_FAVOIRTES,
  FILTER_BY_STARS,
  LIST_ALL_SONGS,
  SEARCH_SONGS,
  SongsAction,
  SongState,
} from './types';

const initialState = {
  currentLevel: 0,
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
    case FILTER_BY_STARS:
      return {
        ...state,
        list: action.list,
        totalCount: action.totalCount,
        currentLevel: action.currentLevel,
      };
    case ADD_SONG:
      return {
        ...state,
        list: action.list,
        totalCount: action.totalCount,
      };
    default:
      return state;
  }
};
