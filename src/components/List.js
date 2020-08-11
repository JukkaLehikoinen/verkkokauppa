import React, { useEffect, useState } from 'react';
import items from './items.json';

import AddCircleIcon from '@material-ui/icons/AddCircle';

function List({LisaaKoriin}) {

  const [product, setProduct] = useState([]);
  


  const Ostoskoriin = (id) => {

    
    product.push({id:items[id].id,text:items[id].text,value:items[id].value})
    LisaaKoriin(product);
    


    //setService({ ...service, [event.target.name]: event.target.value });
    //setProduct([items[id].id,items[id].text,items[id].value])
    //console.log(product)
    
  }

const tuotteet = items.map((items)=>{

  return (
    
      <tr key = {items.id} >
        <td className="lisaa1" onClick={()=>Ostoskoriin(items.id)}>{items.text}</td>
        <td className="lisaa1" onClick={()=>Ostoskoriin(items.id)}>{items.value}</td>
        <td className="lisaa2" onClick={()=>Ostoskoriin(items.id)}> ostoskoriin</td>
      </tr>
    
  )
}
)


  return (
    <div>
    <h2>Hoikan maansiirto verkkokauppa</h2>
    <table className="Taulukko">
      <th>Tuote</th>
      <th>Hinta</th>
      {tuotteet}
    </table>
    </div>
  );
}

export default List;
