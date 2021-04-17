import {IRootState} from './../index';
import {endpoints} from './../../constants/endpoints';
import {get} from '../../utils/api';
import {
  SongDispatch,
  LIST_ALL_SONGS,
  SearchSongDispatch,
  SEARCH_SONGS,
  AddToFavoriteDispatch,
  ADD_TO_FAVOIRTES,
} from './types';
import _ from 'lodash';
import {Song} from '../../interfaces/Song';

export const getSongs = () => async (dispatch: SongDispatch) => {
  const songs = await get(endpoints.SONGS, {params: {_start: 0, _limit: 20}});
  const totalCount = songs.headers['x-total-count'];
  setTimeout(() => {
    dispatch({type: LIST_ALL_SONGS, list: songs.data, totalCount});
  }, 300);
};

export const getMoreSongs = (
  _start: number = 0,
  q: string,
  _limit: number = 20,
) => async (dispatch: SongDispatch, getState: () => IRootState) => {
  const oldSongs = getState().homeReducer.list;
  const songs = await get(endpoints.SONGS, {params: {_start, _limit, q}});
  const allSongs = _.uniq([...oldSongs, ...songs.data]);
  const totalCount = songs.headers['x-total-count'];
  setTimeout(() => {
    dispatch({type: LIST_ALL_SONGS, list: allSongs, totalCount});
  }, 500);
};

export const searchSongs = (q: string) => async (
  dispatch: SearchSongDispatch,
) => {
  const {data, headers} = await get(endpoints.SONGS, {params: {q}});
  const songs: Song[] = _.uniq(data);
  const totalCount = headers['x-total-count'];
  dispatch({type: SEARCH_SONGS, list: songs, totalCount});
};

export const addToFavorites = (songId: string) => (
  dispatch: AddToFavoriteDispatch,
  getState: () => IRootState,
) => {
  const favorites = getState().homeReducer.favorites;
  if (favorites.includes(songId)) {
    const index = favorites.indexOf(songId);
    favorites.splice(index, 1);
  } else {
    favorites.push(songId);
  }
  dispatch({type: ADD_TO_FAVOIRTES, favorites});
};
