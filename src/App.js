import React from 'react';
import './App.css';
import Mapa from './Components/Mapa'
import Header from './Components/Header';
import GraficosIncidentes from './Pages/GraficosIncidents';

function App() {
  return (
    <div>
      <Header/>
      <Mapa />
      <GraficosIncidentes/>
    </div>
  );
}

export default App;
