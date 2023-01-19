import { memo } from "react";
import { MainButton } from "../../components/MainButton";

import styles from './MainPage.module.scss';

function MainPage():JSX.Element {
  return (
    <div className='container'>
      <h2 className={styles['title']}>Any subtitle</h2>
      <MainButton onClick={()=>console.log('click')}/>
    </div>
  )
}

export default memo(MainPage);