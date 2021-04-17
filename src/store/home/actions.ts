import {endpoints} from './../../constants/endpoints';
import {get} from '../../utils/api';
import {SongDispatch, LIST_ALL_SONGS} from './types';

export const getSongs = () => async (dispatch: SongDispatch) => {
  const songs = await get(endpoints.SONGS);
  dispatch({type: LIST_ALL_SONGS, list: songs.data});
};
