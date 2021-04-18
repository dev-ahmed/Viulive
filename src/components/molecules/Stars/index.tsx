import React, {useState} from 'react';
import {ViewStyle} from 'react-native';
import StarRating from 'react-native-star-rating';
import {colors} from '../../../constants/colors';
import {calcFont} from '../../../utils/normalize';

interface Props {
  style?: ViewStyle;
  onStarRatingPress?: (rating: number) => void;
  starCount?: number | undefined;
  size?: number;
  disabled?: boolean;
}

export const Stars: React.FC<Props> = React.memo(
  ({style, starCount, onStarRatingPress, disabled, size = calcFont(20)}) => {
    const [count, setCount] = useState(starCount);

    return (
      <StarRating
        starSize={size}
        containerStyle={[style]}
        fullStarColor={colors.purple}
        emptyStarColor={colors.purple}
        disabled={disabled}
        maxStars={5}
        rating={count}
        selectedStar={rating => {
          let r = rating;
          if (rating === count && count === 1) {
            r = -1;
          }
          setCount(r);
          if (onStarRatingPress) {
            onStarRatingPress(r);
          }
        }}
      />
    );
  },
);
