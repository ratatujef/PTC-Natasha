import { memo, useCallback, useState, ChangeEvent } from "react";
import { MainButton } from "components/MainButton";
import { UIInput } from "components/UIInput";

import styles from './MainPage.module.scss';

function MainPage():JSX.Element {
  const [name, setName] = useState<SpeechSynthesisUtterance>(new SpeechSynthesisUtterance('Наташа'));

  const btnClickHandler = useCallback(()=>{
    if(speechSynthesis.speaking){
      console.log(speechSynthesis.speaking)
      speechSynthesis.cancel();
    }
    speechSynthesis.speak(name);

  },[name]);

  const inputChangeHandler = useCallback(({target}: ChangeEvent<HTMLInputElement>)=>{
    if (target.value === '') {
      setName(new SpeechSynthesisUtterance('Наташа'));
    } else {
      setName(new SpeechSynthesisUtterance(target.value));
    }
  },[]);

  return (
    <div className={styles['container']}>
      <h2 className={styles['title']}>Push to call Natasha</h2>
      <MainButton className={styles['button']} onClick={btnClickHandler}/>
      <UIInput onChange={inputChangeHandler}/>
    </div>
  )
}

export default memo(MainPage);