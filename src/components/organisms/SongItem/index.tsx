import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, ViewStyle} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useCallbackOne} from 'use-memo-one';
import {fonts} from '../../../constants/fonts';
import {Song} from '../../../interfaces/Song';
import {IRootState} from '../../../store';
import {addToFavorites} from '../../../store/home/actions';
import {findTheMeanOf} from '../../../utils/math';
import {calcFont} from '../../../utils/normalize';
import {Image} from '../../atoms/Image';
import {Text} from '../../atoms/Text';
import {FavoriteButton} from '../../molecules/FavoriteButton';
import {Stars} from '../../molecules/Stars';
import styles from './styles';

interface Props {
  song: Song;
  style?: ViewStyle;
}

export const SongItem: React.FC<Props> = React.memo(({song}) => {
  const {artist, images, title, level} = song;
  const {colors} = useTheme();
  const dispatch = useDispatch();

  const {favorites} = useSelector((state: IRootState) => ({
    favorites: state.homeReducer.favorites,
  }));

  const _onFavorite = useCallbackOne(() => {
    dispatch(addToFavorites(song.id));
  }, [song]);

  return (
    <View style={[styles.container, {backgroundColor: colors.card}]}>
      <Image style={styles.image} source={{uri: images}} />
      <View style={styles.details}>
        <Text style={{...fonts.headlines.subtitle}}>{title}</Text>
        <Text style={{...fonts.headlines.description}}>{artist}</Text>
        <Stars
          disabled
          style={styles.stars}
          size={calcFont(15)}
          starCount={findTheMeanOf(level)}
        />
      </View>
      <FavoriteButton
        onFavorite={_onFavorite}
        isFavorited={favorites.includes(song.id)}
        style={styles.favoriteButton}
      />
    </View>
  );
});
