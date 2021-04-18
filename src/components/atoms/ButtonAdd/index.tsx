import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from '../Text';
import styles from './styles';

interface Props {
  label: string;
  onAdd?: () => void;
  style?: ViewStyle;
}

export const ButtonAdd: React.FC<Props> = React.memo(
  ({label, onAdd, style}) => {
    const {colors} = useTheme();
    return (
      <TouchableOpacity
        onPress={() => {
          if (onAdd) {
            onAdd();
          }
        }}
        style={[styles.container, style, {backgroundColor: colors.border}]}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );
  },
);
