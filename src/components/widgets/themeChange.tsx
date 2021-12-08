import { useThemeContext } from '../../core/contexts/theme';
import { Button } from '../base/Button.';
import styles from '../../../styles/components/theme.module.css';

export function ThemeChange() {
  const { setTheme } = useThemeContext();

  return (
    <div className={styles.theme}>
      <Button onClick={() => setTheme('NORMAL')}>NORMAL</Button>
      <Button onClick={() => setTheme('GREEN')}>GREEN</Button>
      <Button onClick={() => setTheme('SALMON')}>SALMON</Button>
    </div>
  );
}
