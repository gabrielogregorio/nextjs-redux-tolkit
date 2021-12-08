import { useThemeContext } from '../../core/contexts/theme';
import styles from '../../../styles/components/layout.module.css';
import { Menu } from './menu';

const themesList = {
  GREEN: 'theme-green',
  SALMON: 'theme-salmon',
  default: ''
};

export default function LayoutTheme({ children }: any) {
  const { theme } = useThemeContext();

  const themeNow = themesList[theme] ?? themesList['default'];
  return (
    <div className={`${styles.layout} ${themeNow}`}>
      <Menu />
      {children}
    </div>
  );
}
