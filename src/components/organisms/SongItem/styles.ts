import {StyleSheet} from 'react-native';
import {metrics} from '../../../constants/metrics';
import {calcHeight} from '../../../utils/normalize';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: metrics.h_spacing_xs,
  },
  image: {
    height: calcHeight(100),
    width: calcHeight(100),
  },
});
