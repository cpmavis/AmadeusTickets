import React, { useState } from 'react';
import Locate from '../Locate';
import Flight from '../Flight';
import Confirm from '../Confirm';

const Booking = () => {
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [flight, setFlight] = useState();
  const [confirmation, setConfirmation] = useState();
  const [price, setPrice] = useState();


  return (
    <div>
      <h1>Create a Booking!!!</h1>
      <Locate handleChoice={setDestination} display={"Origin"}/>
      <Locate handleChoice={setOrigin} display={"Destination"}/>
      <Flight origin={origin} destination={destination} setFlight={setFlight} price={price} setPrice={setPrice}/>
      <Confirm flight={flight} confirmation={confirmation} setConfirmation={setConfirmation}/> 
    </div>
  )

}

export default Booking;

/* 
  --Booking causes 400 status. Likely related to max price be implemented on confirm.
  --Look into confirm when using max price, or set up new query without it.
  --Work on this after getting AWS notifications working.
*/