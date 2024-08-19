import {memo} from 'react';
// import { Link } from "react-router-dom";
import styles from './AppHeader.module.scss';

function AppHeader(): JSX.Element {
  return (
    <header className={styles['header']}>
      <i className={styles['header__logo']}>PTC</i>
      <p className={styles['header__title']}>Some Header Title</p>
    </header>
  )
}

export default memo(AppHeader);