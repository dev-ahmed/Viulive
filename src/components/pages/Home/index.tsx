import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useCallbackOne} from 'use-memo-one';
import {IRootState} from '../../../store';
import {getMoreSongs, getSongs, searchSongs} from '../../../store/home/actions';
import {translate} from '../../../utils/i18n-helper';
import {Container} from '../../atoms/Container';
import {SearchBar} from '../../organisms/SearchBar';
import {SongsList} from '../../templates/SongsList';
import styles from './styles';

export const Home: React.FC = React.memo(({}) => {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const [searchKey, setSearchKey] = useState('');

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
      await dispatch(getMoreSongs(songsList.length + 20, searchKey));
    }
  }, [songsList]);

  const _onSearch = useCallbackOne(async text => {
    setSearchKey(text);
    await dispatch(searchSongs(text));
  }, []);

  return (
    <Container>
      <>
        <SearchBar
          style={styles.search}
          searchKey={searchKey}
          onSearch={_onSearch}
          placeholder={translate('Search')}
        />
        {songsList.length > 0 ? (
          <SongsList
            showLoadMoreIndicator={songsList.length !== songsCount}
            onEndReached={_loadMore}
            list={songsList}
          />
        ) : (
          <ActivityIndicator size="large" color={colors.primary} />
        )}
      </>
    </Container>
  );
});
