import React from 'react';
import NavComponent from './components/navbarcomponent';
import Carousel from './components/carousel';
import LogInPage from './components/logInForm';
import EnterPlants from './components/enterplants';
import About from './components/about'

import Create from './components/create';
import Read from './components/read';
import Update from './components/update';



//keep last
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
 } from 'react-router-dom';


 export default function App() {
  return (
    <Router>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/enterPlants" element={<EnterPlants />} />
        <Route path="/update" element={<Update /> } /> 
        <Route path="/read" element={<Read /> } /> 

        

        <Route path="/enterPlants" component={ Create } />
        <Route path="/enterPlants" component={ Read } />
        <Route path="/updates" element={<Update /> } /> 
      </Routes>
    </Router>
  );
}


export function Home() {
  return (
    <div style={{ padding: 20 }}>
      <Carousel />
    </div>
  );
}

export function AboutPage() {
  return (
    <About/>
  )
}

export function LogIn() {
  return (
    <LogInPage />
  )
}

export class Components extends React.Component {
  render(){
      return(
      <div className = "container">
          <div><NavComponent/></div>
      </div>
      );
  }
 }


 



