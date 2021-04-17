import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, ViewStyle} from 'react-native';
import {fonts} from '../../../constants/fonts';
import {Song} from '../../../interfaces/Song';
import {Icon} from '../../atoms/Icon';
import {Image} from '../../atoms/Image';
import {Text} from '../../atoms/Text';
import styles from './styles';
import {colors as AppColors} from '../../../constants/colors';
interface Props {
  song: Song;
  style?: ViewStyle;
}

export const SongItem: React.FC<Props> = React.memo(({song}) => {
  const {artist, images, title, level} = song;

  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.card}]}>
      <Image style={styles.image} source={{uri: images}} />
      <View style={styles.details}>
        <Text style={{...fonts.headlines.subtitle}}>{title}</Text>
        <Text style={{...fonts.headlines.description}}>{artist}</Text>
      </View>
      <Icon color={AppColors.red} style={styles.icon} name="heart-outline" />
    </View>
  );
});
