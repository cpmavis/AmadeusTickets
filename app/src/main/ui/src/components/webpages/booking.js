import React, { useState } from 'react';
import Locate from '../Locate';
import Flight from '../Flight';
// import Confirm from './components/Confirm';

const Booking = () => {
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [flight, setFlight] = useState();
  const [confirmation, setConfirmation] = useState();
  const [price, setPrice] = useState();


  return (
    <div>
      <Locate handleChoice={setDestination} display={"Origin"}/>
      <Locate handleChoice={setOrigin} display={"Destination"}/>
      <Flight origin={origin} destination={destination} setFlight={setFlight} price={price} setPrice={setPrice}/>
      {/* <Confirm flight={flight} confirmation={confirmation} setConfirmation={setConfirmation}/> */}
    </div>
  )

}

export default Booking;

{/* Need to Implement router here to have a option that shows flights and another one that sends an email */}