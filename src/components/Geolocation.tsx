import { useState, useEffect } from 'react';

const Geolocation = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess);
    }
  }, []);

  const handleSuccess: PositionCallback = ({
    coords: { latitude, longitude },
  }) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };

  return (
    <div>
      <h1>Geolocation:</h1>
      <div>Latitude: {latitude}</div>
      <div>Longitude: {longitude}</div>
    </div>
  );
};

export default Geolocation;
