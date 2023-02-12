import React, { useState } from 'react';
import PackContext from './packsContext';

export default function PacksProvider({ children }) {
  const [packs, setPacks] = useState([]);

  function makeid() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 5) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

  function savePacks({ coords }) {
    let currentDate = new Date().toLocaleString();
    let randomId = makeid();
    const newPack = {
      id: randomId,
      latitude: coords.latitude,
      longitude: coords.longitude,
      speed: 120,
      time: currentDate,
    };
    const currentPacks = packs;
    currentPacks.push(newPack);
    setPacks([...packs, currentPacks]);
    return packs;
  };

  return (
    <PackContext.Provider value={{ packs, savePacks, setPacks }}>
      {children}
    </PackContext.Provider>
  );
}
