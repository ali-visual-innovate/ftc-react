import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route , Routes } from 'react-router-dom';
import MTrading from './pages/MTrading';
import MContracting from './pages/MContracting';
import Portfolio1 from './pages/Portfolio1';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
<Route path='/' element={ <Home/>}/>
<Route path='/meptrading' element={ <MTrading/>}/>
<Route path='/mepcontracting' element={ <MContracting/>}/>
<Route path='/portfolio1' element={ <Portfolio1/>}/>

portfolio1
    </Routes>
    
      <Footer/>
    </>
  );
}

export default App;
