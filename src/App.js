import './App.css'
import {BrowserRouter as Router, Switch, Route, BrowserRouter, Link ,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Service from './pages/Service'
import Contact from './pages/Contact'

































function App() {

  return (

    <BrowserRouter>
         <Navbar/>
            <Routes>
              <Route path='/' element ={<Home/>}/>
              <Route path='/about' element ={<About/>}/>
              <Route path='/product' element ={<Product/>}/>
              <Route path='/service' element ={<Service/>}/>
              <Route path='/contact' element ={<Contact/>}/>

            </Routes>


    </BrowserRouter>








  );
}


export default App;
