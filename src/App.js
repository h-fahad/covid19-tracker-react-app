import React,{useState} from 'react';
import Navbar from "./components/NavBar"
import Info from "./components/InfoPanel"
import FootNav from "./components/footNav"
import './App.css';

function App() {
  const screenConfig = useState(0);
  return (
    <div className="App">
     <Navbar/>
    
     <FootNav screenConfig={screenConfig}/>
     <Info currentScreen={screenConfig[0]}/>

    </div>
  );
}

export default App;