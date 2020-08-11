import React, { useEffect, useState } from 'react';
import items from './items.json';
import Button from '@material-ui/core/Button';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';


function ShowShoppingList ({ostoskori, JatkaOstoksia, TyhjennaKori}) {

    const [summa, lisaaSumma] = useState(0);
    

    useEffect(() => {
        
         LaskeSumma();
    }, [])


    const tuotteet = ostoskori.map((items,i)=>{

        return (
          
            <tr key = {i} >
              <td>{items.text}</td>
              <td>{items.value}</td>
              <td><RemoveCircleIcon fontSize="small" name={i} onClick={()=>Poisto(i)}/></td>
            </tr>
        )
      }
      )

      const Poisto = (i) =>{
        ostoskori.splice(i, 1);
        LaskeSumma();
        if(ostoskori.length===0) {
        TyhjennaKori();
        }
      }


    const Jatka = () =>{
        
        JatkaOstoksia(ostoskori);
        
    }

    const Tyhjenna = () =>{
        lisaaSumma(0);
        TyhjennaKori(0);
    }

    const LaskeSumma = () =>{
        let matikka=0;
        for (let i = 0; i < ostoskori.length; i++) {
            
             matikka=matikka + ostoskori[i].value;  
            }
        lisaaSumma(matikka)
    }

    return (
        <div>
            <h3>Ostoskorisi sisältö:</h3>
            <table className="Taulukko">
                {tuotteet}
            </table>
            <br></br>
            Tilauksen kokonaisarvo: {summa} €<br></br>
            <Button  variant="outlined" color="primary" onClick={Jatka}>Jatka ostoksia</Button><br></br><br></br>
            <Button  variant="outlined" color="primary" onClick={Tyhjenna}>Tyhjennä ostoskori</Button>
        </div>
    )

}

export default ShowShoppingList;