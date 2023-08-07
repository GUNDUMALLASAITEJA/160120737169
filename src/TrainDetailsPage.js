
import React from 'react';

const TrainDetailsPage = ({ selectedTrain }) => {
  return (
    <div>
      <h1>{selectedTrain.trainName} Details</h1>
      <p>Departure Time: {selectedTrain.departureTime}</p>
      <p>Seat Availability: {selectedTrain.seatAvailability}</p>
      <p>Price (Sleeper): {selectedTrain.prices.sleeper}</p>
      <p>Price (AC): {selectedTrain.prices.ac}</p>
    </div>
  );
};

export default TrainDetailsPage;
