import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TextInput, TextStyle} from 'react-native';
import styles from './styles';

interface Props {
  value: string;
  placeholder: string;
  style?: TextStyle;
  onChange?: (text: string) => void;
}

export const Input: React.FC<Props> = React.memo(
  ({value, onChange, style, placeholder}) => {
    const {colors} = useTheme();
    return (
      <TextInput
        value={value}
        onChangeText={onChange}
        style={[styles.text, style, {color: colors.text}]}
        placeholderTextColor={colors.text}
        placeholder={placeholder}
      />
    );
  },
);
