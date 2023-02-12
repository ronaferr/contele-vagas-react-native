import React from 'react';
import PacksProvider from './src/context/packsProvider';

import { Routes } from './src/routes';

export default function App() {
  return (
    <PacksProvider>
      <Routes />
    </PacksProvider>
  );
};
