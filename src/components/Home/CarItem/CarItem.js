import React from 'react'
import styles from '../Home.module.css'
import { useState } from 'react';

export const CarItem = ({ car }) => {

    const [isShown, setIsShown] = useState(false);
  

  const changeState = () => {
    setIsShown(!isShown);
  }
  
  return (
    <div className={styles.item}>
    <div className={styles.image} style={{backgroundImage: `url(${car.image})`}}></div>
    <div className={styles.info}>
      <h2>{car.name}</h2>
      <p>{new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'USD'}).format(car.price)}</p>
      {isShown && <p className={styles.description}>{car.description}</p>}
      <button onClick={changeState}>{isShown ? "Hide" : "Show More"}</button>
    </div>
      </div>
  )
}
