import {IRootState} from './../index';
import {endpoints} from './../../constants/endpoints';
import {get} from '../../utils/api';
import {SongDispatch, LIST_ALL_SONGS} from './types';
import _ from 'lodash';

export const getSongs = () => async (dispatch: SongDispatch) => {
  const songs = await get(endpoints.SONGS, {params: {_start: 0, _limit: 20}});
  const totalCount = songs.headers['x-total-count'];
  setTimeout(() => {
    dispatch({type: LIST_ALL_SONGS, list: songs.data, totalCount});
  }, 300);
};

export const getMoreSongs = (_start: number = 0, _limit: number = 20) => async (
  dispatch: SongDispatch,
  getState: () => IRootState,
) => {
  const oldSongs = getState().homeReducer.list;
  const songs = await get(endpoints.SONGS, {params: {_start, _limit}});
  const allSongs = _.uniq([...oldSongs, ...songs.data]);
  setTimeout(() => {
    dispatch({type: LIST_ALL_SONGS, list: allSongs});
  }, 500);
};
