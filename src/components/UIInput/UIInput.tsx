import {ChangeEventHandler, memo} from 'react';
import classNames from 'classnames';
import styles from './UIInput.module.scss';

type Props = {
  onChange: ChangeEventHandler,
  className?: string,
  plaseholder?: string 
}

function UIInput({onChange, className}: Props):JSX.Element {
  return (
    <input type="text" 
      className={classNames(styles['input'], className)}  
      placeholder={'type anything...'}
      onChange={onChange} />)
  }

export default memo(UIInput)