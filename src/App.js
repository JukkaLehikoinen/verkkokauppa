import React, { useState } from 'react';
import './App.css';
import Ostoskori from './components/Ostoskori';
import Button from '@material-ui/core/Button';

function App() {

  const [kauppaan, setKauppaan] = useState(0)
  
 
const Kauppaan = () => {
  setKauppaan(1);
}


if (kauppaan===0){
  return (
    <div className="Kauppaan">
      Tervetuloa Hoikan Maansiirto Oyn verkkokauppaan. <br></br>
    <Button variant="outlined" color="primary" onClick={Kauppaan}>Kauppaan</Button>
    </div>
  );
} else {
  return(
    <div className="App">
      <Ostoskori />
      
    </div>
  )
}

}

export default App;
