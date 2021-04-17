import React from 'react';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ViewStyle} from 'react-native';
import {calcFont} from '../../../utils/normalize';
import {colors} from '../../../constants/colors';

interface Props {
  style?: ViewStyle;
  name: string;
  color?: string;
  size?: number;
}

export const Icon: React.FC<Props> = React.memo(
  ({name, color = colors.red, style, size = calcFont(18)}) => {
    return (
      <MaterialIcon
        name={name}
        color={color}
        size={size}
        style={[styles.container, style]}
      />
    );
  },
);
