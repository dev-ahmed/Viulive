import React from 'react';
import {ListRenderItem, ViewStyle} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Song} from '../../../interfaces/Song';
import {SongItem} from '../../organisms/SongItem';
import styles from './styles';

interface Props {
  list: Song[];
  style?: ViewStyle;
}

export const SongsList: React.FC<Props> = React.memo(({list, style}) => {
  const _renderItem: ListRenderItem<Song> = ({item}) => {
    return <SongItem song={item} />;
  };

  return (
    <FlatList
      keyExtractor={item => item.id}
      renderItem={_renderItem}
      data={list}
      style={[styles.container, style]}
    />
  );
});
