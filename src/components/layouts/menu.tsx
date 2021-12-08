import Link from 'next/link';
import styles from '../../../styles/components/menu.module.css';

export function Menu() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}
