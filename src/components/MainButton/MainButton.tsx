import {memo, MouseEventHandler} from 'react';
import classNames from 'classnames';
import logo from 'assets/icons/logo.svg';
import styles from './MainButton.module.scss'

type Props = {
  onClick: MouseEventHandler,
  className?: string
}

function MainButton({onClick, className}: Props): JSX.Element {
  return (
    <>  
    <button type="button" className={classNames(styles['button'], className)} onClick={onClick}>
      <img src={logo} className={styles["button__logo"]} alt="logo" />
    </button>
    </>
  )
}


export default memo(MainButton)