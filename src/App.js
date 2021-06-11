import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Shipment from './components/Shipment';


export const contextCategory = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <contextCategory.Provider value={count}>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Shipment></Shipment>
    </contextCategory.Provider>
  );
}

export default App;
