import './App.css';
import Header from "../src/components/Header";
import { Routes, Route } from "react-router-dom";
import Swap from './pages/Swap';
import View from './pages/View';

function App() {
  return (
    <div className='flex flex-col px-5 py-5'>
      <Header />
      <Routes>
        <Route path='/swap' element={ <Swap /> } />
        <Route path='/view' element={ <View /> } />
      </Routes>
    </div>
  );
}

export default App;
