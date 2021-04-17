import React from 'react';
import {ViewStyle, TouchableOpacity} from 'react-native';
import {Icon} from '../../atoms/Icon';

interface Props {
  style?: ViewStyle;
  isFavorited: boolean;
  onFavorite?: () => void;
}

export const FavoriteButton: React.FC<Props> = React.memo(
  ({isFavorited, onFavorite, style}) => {
    const iconName = isFavorited ? 'heart' : 'heart-outline';
    return (
      <TouchableOpacity onPress={onFavorite} style={style}>
        <Icon name={iconName} />
      </TouchableOpacity>
    );
  },
);
