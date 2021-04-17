import {Song} from './../../interfaces/Song';

export const LIST_ALL_SONGS = 'LIST_ALL_SONGS';
export const SEARCH_SONGS = 'SEARCH_SONGS';
export const ADD_TO_FAVOIRTES = 'ADD_TO_FAVOIRTES;';

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
  favorites: string[];
};

export type AddToFavoritesAction = {
  type: typeof ADD_TO_FAVOIRTES;
  favorites: string[];
};

export type SongDispatch = (args: GetSongsAction) => GetSongsAction;
export type SearchSongDispatch = (args: SearchSongsAction) => SearchSongsAction;
export type AddToFavoriteDispatch = (
  args: AddToFavoritesAction,
) => AddToFavoritesAction;

export type SongsAction =
  | GetSongsAction
  | SearchSongsAction
  | AddToFavoritesAction;
