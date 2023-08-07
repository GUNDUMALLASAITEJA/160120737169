import React, { useEffect, useState } from 'react';
import { getAllTrains } from './api';

const TrainSchedulePage = () => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const trainsData = await getAllTrains(token);
        setTrains(trainsData);
        setLoading(false);
      } catch (error) {
        setError('Error fetching trains. Please try again later.');
        setLoading(false);
      }
    };
    fetchTrains();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>All Trains Schedule</h1>
      {/* Display train schedule data */}
      {trains.map((train) => (
        <div key={train.trainNumber}>
          <h3>{train.trainName}</h3>
          <p>Departure Time: {train.departureTime}</p>
          <p>Seat Availability: {train.seatAvailability}</p>
          <p>Price (Sleeper): {train.prices.sleeper}</p>
          <p>Price (AC): {train.prices.ac}</p>
        </div>
      ))}
    </div>
  );
};

export default TrainSchedulePage;
