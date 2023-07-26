import React, { useState } from 'react'
import styles from '../CreateCar/CreateCarForm.module.css'

export const CreateCarForm = ({setCars}) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const CreateCar = () => {
     
      setCars((prev)=> [...prev, {id: prev.length + 1, name, price, image}] );
      setName("");
      setPrice("");
      setImage("");
     
    }
  return (
    <div className={styles.form}>

<input placeholder='Car name' onChange={(e)=>setName(e.target.value)} value={name} />
<input placeholder='Car price'onChange={(e)=>setPrice(e.target.value)} value={price}/>
<input placeholder='Car image'onChange={(e)=>setImage(e.target.value)} value={image}/>
<button onClick={CreateCar}>Create new Car</button>
    </div>
  )
}
