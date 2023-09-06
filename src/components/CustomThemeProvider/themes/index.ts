import normal from './normal';
import dark from './dark';
import { THEME_NAME } from 'src/constants';

const themes = {
  [THEME_NAME.NORMAL]: normal,
  [THEME_NAME.DARK]: dark
};

export default function getTheme(theme: string) {
  return themes[theme];
}
