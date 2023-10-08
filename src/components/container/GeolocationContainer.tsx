import { useState, useEffect } from 'react';
import Geolocation from './Geolocation';

const GeolocationContainer = () => {
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

  return <Geolocation latitude={latitude} longitude={longitude} />;
};

export default GeolocationContainer;
