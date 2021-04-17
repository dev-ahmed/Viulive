import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '../../../store';
import {changeLanguage, changeTheme} from '../../../store/settings/actions';
import {setRtl, translate} from '../../../utils/i18n-helper';
import {Container} from '../../atoms/Container';
import {Text} from '../../atoms/Text';
import {SwitchButton} from '../../molecules/SwitchButton';
import {SettingsItem} from '../../organisms/SettingsItem';
import styles from './styles';

export const Settings: React.FC = React.memo(({}) => {
  const dispatch = useDispatch();
  const {theme, language} = useSelector((state: IRootState) => ({
    theme: state.settingsReducer.theme,
    language: state.settingsReducer.language,
  }));

  const _toggleSwitchDarkMode = async (isDarkMode: boolean) => {
    if (isDarkMode) {
      return await dispatch(changeTheme('dark'));
    }
    await dispatch(changeTheme('light'));
  };

  const _switchLanguage = async () => {
    await dispatch(changeLanguage());
    setTimeout(() => {
      setRtl(language === 'ar');
    }, 300);
  };

  return (
    <Container style={styles.container}>
      <>
        <SettingsItem label={translate('Dark Mode')}>
          <SwitchButton
            enabled={theme === 'dark'}
            toggleSwitch={value => _toggleSwitchDarkMode(value)}
          />
        </SettingsItem>
        <SettingsItem label={language === 'en' ? 'العربية' : 'English'}>
          <TouchableOpacity onPress={_switchLanguage}>
            <Text>{translate('Change Language')}</Text>
          </TouchableOpacity>
        </SettingsItem>
      </>
    </Container>
  );
});
