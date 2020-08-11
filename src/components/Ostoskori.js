import React, { useEffect, useState } from 'react';
import items from './items.json';
import List from './List';
import ShowOstoskori from './ShowOstoskori';



function ShoppingList () {

    const [ostoskori, lisaaOstoskori] = useState(0);
    const [maara, lisaaMaara] = useState(0)
    const [tila, setTila] = useState(0);
    const [a, setA] = useState([]);
    

    const LisaaKoriin = (product) =>{
        
        lisaaMaara(maara + 1)
        lisaaOstoskori(product)
       
}

    const JatkaOstoksia = (tuotteet) => {
        lisaaOstoskori(0)
        lisaaMaara(tuotteet.length)
        setTila(0);
    }

    const NaytaOstoskori = () => {
        if (ostoskori!==0) {
        setA(a.concat(ostoskori))
        }
       setTila(1);
    }

    const TyhjennaKori = (i) => {
        lisaaMaara(i)
        lisaaOstoskori(0);
        setA([]);
    }

    
    if (tila===0) {
    return (
    <div>
        <div className="Ostoskori" >
            Ostoskori: {maara} tuotetta
            <div className="Ostoskori2" onClick={NaytaOstoskori}>Näytä ostoskori</div>
        </div >
        <List LisaaKoriin={LisaaKoriin}/>
    </div>
    )
    } else {
        return (
            <div>
                <ShowOstoskori ostoskori={a} JatkaOstoksia={JatkaOstoksia} TyhjennaKori={TyhjennaKori}/>
            </div>
        )
    }

}

export default ShoppingList;