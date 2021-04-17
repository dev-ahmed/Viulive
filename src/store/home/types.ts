import {Song} from './../../interfaces/Song';
export const LIST_ALL_SONGS = 'LIST_ALL_SONGS';

export type GetSongsAction = {
  type: typeof LIST_ALL_SONGS;
  list: Song[];
};

export type SongState = {
  list: Song[];
};

export type SongDispatch = (args: GetSongsAction) => GetSongsAction;

export type SongsAction = GetSongsAction;
