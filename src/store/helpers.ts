import { THEME_LS_LABEL, getFromLocalStorage, setInLocalStorage } from 'src/API/localStorage';
import { ThemeType } from './theme/themeReducer';

export const loadThemeState = (): ThemeType =>
  (getFromLocalStorage(THEME_LS_LABEL) as ThemeType) || 'light';

export const saveThemeState = (state: string) => {
  setInLocalStorage(state, THEME_LS_LABEL);
};
