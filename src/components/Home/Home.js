
import { cars as carsData } from './cars.data';
import styles from '../Home/Home.module.css'
import { CarItem } from './CarItem/CarItem';
import { CreateCarForm } from './CreateCar/CreateCarForm';
import { useState } from 'react';

function Home() {

  const [isShown, setIsShown] = useState(false);
  const [cars, setCars] = useState(carsData);

  const changeState = () => {
    setIsShown(!isShown);
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>

      <div className={styles.head}>
  <h1>Car catalog</h1>
  <button onClick={changeState} className={styles.show}> {isShown ? "Hide form" : "Add your car"}</button>
  </div>
  {isShown && <CreateCarForm setCars={setCars} />}
  {cars.map(car=>  <CarItem car = {car} key={car.id} />)}

 
<button onClick={scrollToTop} className={styles.scroll}>To the Top</button>
  </div>);
}

export default Home;
