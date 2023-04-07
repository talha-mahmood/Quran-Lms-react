import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import About from '../layout/About';

const Mynavigate= ()=> {
  
    return (
      <div>
      <div>
      <Link to="/About">About</Link>
      </div>
     <BrowserRouter>
     <Routes>
       {/* <Mynavigate/> */}
     <Route path='about' element={<About />}/>
     <Route/>
     </Routes>
     </BrowserRouter>
     </div>
    );
  
}


export default Mynavigate
