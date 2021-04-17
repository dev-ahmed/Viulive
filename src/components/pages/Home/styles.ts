import {StyleSheet} from 'react-native';
import {metrics} from '../../../constants/metrics';
import {calcHeight} from '../../../utils/normalize';

export default StyleSheet.create({
  search: {
    paddingVertical: metrics.h_spacing_s,
    paddingStart: metrics.h_spacing_s,
    marginBottom: metrics.v_spacing_l,
    borderRadius: calcHeight(15),
  },
});
