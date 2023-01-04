import './App.css';
import Header from "../src/components/Header";
import { Routes, Route } from "react-router-dom";
import Proposal from './pages/Proposal';
import Mint from "./pages/Mint";
import View from './pages/View';

function App() {
  return (
    <div className='flex flex-col px-5 py-5'>
      <Header />
      <Routes>
        <Route path='/' element={ <Mint /> } />
        <Route path='/proposal' element={ <Proposal /> } />
        <Route path='/view' element={ <View /> } />
      </Routes>
    </div>
  );
}

export default App;
