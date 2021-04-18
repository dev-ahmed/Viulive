import {Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Song} from '../../../interfaces/Song';
import {AddSong} from '../../../store/home/actions';
import {translate} from '../../../utils/i18n-helper';
import {uid} from '../../../utils/string-helper';
import {ButtonAdd} from '../../atoms/ButtonAdd';
import {Container} from '../../atoms/Container';
import {Input} from '../../atoms/Input';
import {Stars} from '../../molecules/Stars';
import styles from './styles';

export const AddSongForm: React.FC = React.memo(({}) => {
  const dispatch = useDispatch();

  const initialValues: Song = {
    id: uid(),
    artist: '',
    title: '',
    images: '',
    level: -1,
  };

  const _onSubmit = async (values: Song) => {
    await dispatch(AddSong(values));
  };

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={_onSubmit}>
        {({handleChange, handleSubmit, values, setFieldValue}) => (
          <View>
            <Input
              onChange={handleChange('artist')}
              value={values.artist}
              style={styles.input}
              placeholder={translate('Enter Artist')}
            />
            <Input
              onChange={handleChange('title')}
              value={values.title}
              style={styles.input}
              placeholder={translate('Enter Title')}
            />
            <Input
              onChange={handleChange('images')}
              value={values.images}
              style={styles.input}
              placeholder={translate('Enter Image URL')}
            />
            <Stars
              onStarRatingPress={level => setFieldValue('level', level)}
              starCount={values.level}
              style={styles.stars}
            />
            <ButtonAdd
              onAdd={handleSubmit}
              label={translate('Submit')}
              style={styles.button}
            />
          </View>
        )}
      </Formik>
    </Container>
  );
});
