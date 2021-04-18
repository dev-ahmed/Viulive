import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {metrics} from '../../../constants/metrics';
import {calcHeight, calcWidth} from '../../../utils/normalize';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  input: {
    borderRadius: calcHeight(5),
    borderColor: colors.purple,
    borderWidth: 0.5,
    marginVertical: metrics.v_spacing_xs,
    paddingVertical: metrics.h_spacing_l,
    paddingStart: calcHeight(20),
  },
  stars: {
    marginTop: metrics.h_spacing_l,
    width: calcWidth(200),
  },
  button: {
    marginTop: metrics.h_spacing_l,
    alignSelf: 'flex-end',
  },
});
