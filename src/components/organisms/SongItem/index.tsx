import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, ViewStyle} from 'react-native';
import {Song} from '../../../interfaces/Song';
import {Image} from '../../atoms/Image';
import {Text} from '../../atoms/Text';
import styles from './styles';

interface Props {
  song: Song;
  style?: ViewStyle;
}

export const SongItem: React.FC<Props> = React.memo(({song}) => {
  const {artist, images, title, search, level} = song;

  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.card}]}>
      <Image style={styles.image} source={{uri: images}} />
      <View style={styles.details}>
        <Text>{artist}</Text>
        <Text>{title}</Text>
        <Text>{search}</Text>
      </View>
    </View>
  );
});
