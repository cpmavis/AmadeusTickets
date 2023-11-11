import React, { useState } from 'react';
import Locate from '../Locate';
import Flight from '../Flight';

const Notification = () => {
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [flight, setFlight] = useState();
  const [price, setPrice] = useState();


  return (
    <div>
      <h1>Set a Notification!!!</h1>
      <Locate handleChoice={setDestination} display={"Origin"}/>
      <Locate handleChoice={setOrigin} display={"Destination"}/>
      <Flight origin={origin} destination={destination} flight={flight} setFlight={setFlight} price={price} setPrice={setPrice}/>
    </div>
  )

}

export default Notification;