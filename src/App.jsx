import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navber from './component/navber';
import Home from './pagesjs/home';

function App() {
  

  return (
    <div >
        <BrowserRouter>
          <Routes>
              {/* <Route path="/payvalue/:id" element={<Cart />}></Route> */}
              <Route path="" element={<Home/>}></Route>
              {/* <Route path="/fail" element={<Fail/>}></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
