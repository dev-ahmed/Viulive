import {StyleSheet} from 'react-native';
import {metrics} from '../../../constants/metrics';
import {calcHeight} from '../../../utils/normalize';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: calcHeight(5),
  },
  text: {
    paddingVertical: metrics.h_spacing_xs,
    paddingHorizontal: metrics.h_spacing_s,
  },
});
