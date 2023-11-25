import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';

import VendingMachine from './Exc-Code/VendingMachine';
import Soda from './Exc-Code/Soda';
import Chips from './Exc-Code/Chips';
import NuclearBomb from './Exc-Code/NuclearBomb';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/Soda' element={<Soda />} />
          <Route path='/Chips' element={<Chips />} />
          <Route path='/NuclearBomb' element={<NuclearBomb />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
