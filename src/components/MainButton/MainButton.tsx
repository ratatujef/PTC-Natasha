import {memo, MouseEventHandler} from 'react';
import logo from '../../logo.svg';
import styles from './MainButton.module.scss'

type Props = {
  onClick: MouseEventHandler
}

function MainButton({onClick}: Props): JSX.Element {
  return (
    <>  
    <button type="button" className={styles['button']} onClick={onClick}>
      <img src={logo} className={styles["button__logo"]} alt="logo" />
    </button>
    </>
  )
}

export default memo(MainButton)