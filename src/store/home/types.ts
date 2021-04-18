import {Song} from './../../interfaces/Song';

export const LIST_ALL_SONGS = 'LIST_ALL_SONGS';
export const SEARCH_SONGS = 'SEARCH_SONGS';
export const ADD_TO_FAVOIRTES = 'ADD_TO_FAVOIRTES;';
export const FILTER_BY_STARS = 'FILTER_BY_STARS';
export const ADD_SONG = 'ADD_SONG';

export type SongState = {
  currentLevel: number;
  list: Song[];
  totalCount: number;
  favorites: string[];
};

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

export type AddToFavoritesAction = {
  type: typeof ADD_TO_FAVOIRTES;
  favorites: string[];
};

export type FilterByStarsAction = {
  type: typeof FILTER_BY_STARS;
  list: Song[];
  totalCount: number;
  currentLevel: number;
};

export type AddSongAction = {
  type: typeof ADD_SONG;
  list: Song[];
  totalCount: number;
};

export type SongDispatch = (args: GetSongsAction) => GetSongsAction;
export type SearchSongDispatch = (args: SearchSongsAction) => SearchSongsAction;
export type AddToFavoriteDispatch = (
  args: AddToFavoritesAction,
) => AddToFavoritesAction;

export type FilterByStarsDispatch = (
  args: FilterByStarsAction,
) => FilterByStarsAction;

export type AddSongDispatch = (args: AddSongAction) => AddSongAction;

export type SongsAction =
  | GetSongsAction
  | SearchSongsAction
  | AddToFavoritesAction
  | FilterByStarsAction
  | AddSongAction;
