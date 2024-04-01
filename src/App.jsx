import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navber from './component/navber';
import Home from './pagesjs/home';
import Payment from './pagesjs/payment';
// import Payment from './pagesjs/contact';
import Contact from './pagesjs/contact';

function App() {
  

  return (
    <div className='App' >
        <BrowserRouter>
          <Routes>
              {/* <Route path="/payvalue/:id" element={<Cart />}></Route> */}
              <Route  path="" element={<Home/>}></Route>
              <Route exact path="/contact" element={<Contact/>} ></Route>
              <Route exact path="/payment" element={<Payment/>} ></Route>
              
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
