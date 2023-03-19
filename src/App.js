import React from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/NavBar";
import './App.css'
import Rawpost from "./components/Rawpost/Rawpost";
import {actions,orginals} from './components/Constants/url'

function App() {
  return (
    <div className="app">
    <Navbar/>
    <Banner/>
    <Rawpost url={orginals}  title='Netflix Orginals'/>
    <Rawpost  url={actions} title='Action' issmall />

    </div>
  
     );
}

export default App;
