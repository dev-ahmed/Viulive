export const CHANGE_THEME = 'CHANGE_THEME';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

type ChangeThemeAction = {
  type: typeof CHANGE_THEME;
  theme: string;
};

type ChangeLanguageAction = {
  type: typeof CHANGE_LANGUAGE;
  language: string;
};

export type SettingsState = {
  theme: string;
  language: string;
};

export type ThemeDispatch = (args: ChangeThemeAction) => ChangeThemeAction;
export type LanguageDispatch = (
  args: ChangeLanguageAction,
) => ChangeLanguageAction;
export type SettingsAction = ChangeThemeAction | ChangeLanguageAction;
