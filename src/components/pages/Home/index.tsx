import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useCallbackOne} from 'use-memo-one';
import {IRootState} from '../../../store';
import {getMoreSongs, getSongs} from '../../../store/home/actions';
import {Container} from '../../atoms/Container';
import {SongsList} from '../../templates/SongsList';

export const Home: React.FC = React.memo(({}) => {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const {songsList, songsCount} = useSelector((state: IRootState) => ({
    songsList: state.homeReducer.list,
    songsCount: state.homeReducer.totalCount,
  }));

  const initialFetch = useCallbackOne(async () => {
    await dispatch(getSongs());
  }, []);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  const _loadMore = useCallbackOne(async () => {
    if (songsList.length > 0 && songsList.length !== songsCount) {
      await dispatch(getMoreSongs(songsList.length + 20));
    }
  }, [songsList]);

  return (
    <Container>
      {songsList.length > 0 ? (
        <SongsList
          showLoadMoreIndicator={songsList.length !== songsCount}
          onEndReached={_loadMore}
          list={songsList}
        />
      ) : (
        <ActivityIndicator size="large" color={colors.primary} />
      )}
    </Container>
  );
});
