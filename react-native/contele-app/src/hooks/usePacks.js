/* import { useState } from 'react';

export default function savePacks({ coords }) {
  const [packs, setPacks] = useState([]);
  const [countId, setCountId] = useState(0);

  let currentDate = new Date();
  const newPack = {
    id: countId + 1,
    latitude: coords.latitude,
    longitude: coords.longitude,
    speed: 120,
    time: currentDate,
  }
  setPacks(...packs, newPack);
  setCountId(countId + 1);

  return packs;
}; */