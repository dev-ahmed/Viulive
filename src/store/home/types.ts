import {Song} from './../../interfaces/Song';

export const LIST_ALL_SONGS = 'LIST_ALL_SONGS';
export const SEARCH_SONGS = 'SEARCH_SONGS';

export type GetSongsAction = {
  type: typeof LIST_ALL_SONGS;
  list: Song[];
  totalCount: number;
};

export type SearchSongsAction = {
  type: typeof SEARCH_SONGS;
  list: Song[];
  totalCount: number;
};

export type SongState = {
  list: Song[];
  totalCount: number;
};

export type SongDispatch = (args: GetSongsAction) => GetSongsAction;
export type SearchSongDispatch = (args: SearchSongsAction) => SearchSongsAction;

export type SongsAction = GetSongsAction | SearchSongsAction;
