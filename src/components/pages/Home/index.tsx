import {useNavigation, useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useCallbackOne} from 'use-memo-one';
import {ROUTES} from '../../../constants/routes';
import {IRootState} from '../../../store';
import {
  filterByStars,
  getMoreSongs,
  getSongs,
  searchSongs,
} from '../../../store/home/actions';
import {translate} from '../../../utils/i18n-helper';
import {findTheMeanOf, reverseMeanNumber} from '../../../utils/math';
import {ButtonAdd} from '../../atoms/ButtonAdd';
import {Container} from '../../atoms/Container';
import {Text} from '../../atoms/Text';
import {Stars} from '../../molecules/Stars';
import {SearchBar} from '../../organisms/SearchBar';
import {SongsList} from '../../templates/SongsList';
import styles from './styles';

export const Home: React.FC = React.memo(({}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {colors} = useTheme();
  const [searchKey, setSearchKey] = useState('');
  const [starsCount, setStarsCount] = useState(0);

  const {songsList, songsCount, currentLevel} = useSelector(
    (state: IRootState) => ({
      songsList: state.homeReducer.list,
      currentLevel: state.homeReducer.currentLevel,
      songsCount: state.homeReducer.totalCount,
    }),
  );

  const initialFetch = useCallbackOne(async () => {
    await dispatch(getSongs());
  }, []);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  const _loadMore = useCallbackOne(async () => {
    if (songsList.length > 0 && songsList.length < songsCount) {
      let offset = songsList.length + 5;
      if (songsCount - songsList.length < offset) {
        offset = songsCount - songsList.length;
      }
      await dispatch(getMoreSongs(offset, searchKey));
    }
  }, [songsList, songsCount]);

  const _onSearch = useCallbackOne(
    async text => {
      setSearchKey(text);
      await dispatch(searchSongs(text));
    },
    [starsCount, searchKey],
  );

  const _onStarRatingPress = useCallbackOne((rating: number) => {
    const level = reverseMeanNumber(rating);
    setStarsCount(level);
    dispatch(filterByStars(level));
  }, []);

  const _onAddSong = () => {
    navigation.navigate(ROUTES.ADD_SONG_FORM);
  };

  return (
    <Container style={styles.container}>
      <>
        <SearchBar
          style={styles.search}
          searchKey={searchKey}
          onSearch={_onSearch}
          placeholder={translate('Search')}
        />

        {songsList.length > 0 ? (
          <>
            <View style={styles.row}>
              <Text>{translate('Filter By Stars')}</Text>
              <ButtonAdd onAdd={_onAddSong} label={translate('Add a song')} />
            </View>
            <Stars
              starCount={findTheMeanOf(currentLevel)}
              onStarRatingPress={_onStarRatingPress}
              style={styles.stars}
            />
            <SongsList
              showLoadMoreIndicator={songsList.length < songsCount}
              onEndReached={_loadMore}
              list={songsList}
            />
          </>
        ) : (
          <ActivityIndicator size="large" color={colors.primary} />
        )}
      </>
    </Container>
  );
});
