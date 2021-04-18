import {StyleSheet} from 'react-native';
import {metrics} from '../../../constants/metrics';
import {calcHeight, calcWidth} from '../../../utils/normalize';

export default StyleSheet.create({
  container: {
    marginBottom: calcHeight(50),
  },
  search: {
    paddingVertical: metrics.h_spacing_s,
    paddingStart: metrics.h_spacing_s,
    marginBottom: metrics.v_spacing_l,
    borderRadius: calcHeight(15),
  },
  stars: {
    width: calcWidth(200),
    marginVertical: metrics.v_spacing_l,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
