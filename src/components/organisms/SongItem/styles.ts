import {StyleSheet} from 'react-native';
import {metrics} from '../../../constants/metrics';
import {calcHeight, calcWidth} from '../../../utils/normalize';

export default StyleSheet.create({
  container: {
    height: calcHeight(100),
    flexDirection: 'row',
    marginVertical: metrics.h_spacing_xs,
    justifyContent: 'space-between',
  },
  image: {
    height: calcHeight(100),
    width: calcHeight(100),
  },
  details: {
    height: '100%',
    width: calcWidth(200),
    justifyContent: 'space-between',
    marginHorizontal: metrics.h_spacing_s,
    paddingVertical: metrics.v_spacing_l,
  },
  icon: {
    alignSelf: 'flex-end',
    marginBottom: metrics.v_spacing_l,
    marginRight: metrics.h_spacing_l,
  },
});
