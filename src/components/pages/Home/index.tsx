import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useCallbackOne} from 'use-memo-one';
import {IRootState} from '../../../store';
import {getSongs} from '../../../store/home/actions';
import {Container} from '../../atoms/Container';
import {SongsList} from '../../templates/SongsList';

export const Home: React.FC = React.memo(({}) => {
  const dispatch = useDispatch();

  const {songsList} = useSelector((state: IRootState) => ({
    songsList: state.homeReducer.list,
  }));

  const initialFetch = useCallbackOne(async () => {
    await dispatch(getSongs());
  }, []);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  return (
    <Container>
      <SongsList list={songsList} />
    </Container>
  );
});
