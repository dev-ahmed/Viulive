import _, {uniqBy} from 'lodash';
import {Song} from '../../interfaces/Song';
import {get} from '../../utils/api';
import {numberParser} from '../../utils/number-parser';
import {endpoints} from './../../constants/endpoints';
import {IRootState} from './../index';
import {
  AddSongDispatch,
  AddToFavoriteDispatch,
  ADD_SONG,
  ADD_TO_FAVOIRTES,
  FilterByStarsDispatch,
  FILTER_BY_STARS,
  LIST_ALL_SONGS,
  SearchSongDispatch,
  SEARCH_SONGS,
  SongDispatch,
} from './types';

export const getSongs = () => async (dispatch: SongDispatch) => {
  const songs = await get(endpoints.SONGS, {params: {_start: 0, _limit: 20}});
  const totalCount = numberParser(songs.headers['x-total-count']);
  dispatch({type: LIST_ALL_SONGS, list: songs.data, totalCount});
};

export const getMoreSongs = (
  _start: number = 0,
  q: string,
  _limit: number = 20,
) => async (dispatch: SongDispatch, getState: () => IRootState) => {
  const oldSongs = getState().homeReducer.list;
  // const level = getState().homeReducer.currentLevel;
  const songs = await get(endpoints.SONGS, {
    params: {_start, _limit, q},
  });
  const allSongs = [...oldSongs, ...songs.data];
  const uniqSongs = uniqBy(allSongs, 'id');
  const totalCount = numberParser(songs.headers['x-total-count']);
  dispatch({type: LIST_ALL_SONGS, list: uniqSongs, totalCount});
};

export const searchSongs = (q: string) => async (
  dispatch: SearchSongDispatch,
  getState: () => IRootState,
) => {
  const level = await getState().homeReducer.currentLevel;
  const {data, headers} = await get(endpoints.SONGS, {
    params: {q, level: level > 0 ? level : undefined},
  });
  const songs: Song[] = _.uniq(data);
  const totalCount = numberParser(headers['x-total-count']);
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

export const filterByStars = (level: number) => async (
  dispatch: FilterByStarsDispatch,
) => {
  const {data, headers} = await get(endpoints.SONGS, {
    params: {level: level > 0 ? level : undefined},
  });
  const totalCount = numberParser(headers['x-total-count']);

  dispatch({
    type: FILTER_BY_STARS,
    list: data,
    totalCount,
    currentLevel: level,
  });
};

export const AddSong = (song: Song) => (
  dispatch: AddSongDispatch,
  getState: () => IRootState,
) => {
  const {list} = getState().homeReducer;
  const newList = [song, ...list];
  dispatch({type: ADD_SONG, list: newList, totalCount: list.length});
};
