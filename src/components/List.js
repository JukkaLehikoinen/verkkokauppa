import React, { useEffect, useState } from 'react';
import items from './items.json';

import AddCircleIcon from '@material-ui/icons/AddCircle';

function List({LisaaKoriin}) {

  const [product, setProduct] = useState([]);
  


  const Ostoskoriin = (id) => {

    
    product.push({id:items[id].id,tuote:items[id].tuote,hinta:items[id].hinta,url:items[id].url})
    LisaaKoriin(product);
    


    //setService({ ...service, [event.target.name]: event.target.value });
    //setProduct([items[id].id,items[id].text,items[id].value])
    //console.log(product)
    
  }

const tuotteet = items.map((items)=>{

  return (
    
      <tr key = {items.id} >
        <td><a target="_blank" href={items.url}><img className="Kuva" src={items.url} /></a></td>
        <td className="lisaa1" onClick={()=>Ostoskoriin(items.id)}>{items.tuote}</td>
        <td className="kuvaus" onClick={()=>Ostoskoriin(items.id)} width={300}>{items.kuvaus}</td>
        <td className="lisaa1" onClick={()=>Ostoskoriin(items.id)}>{items.hinta.toLocaleString()}€</td>
        <td> <AddCircleIcon className="lisaa2" onClick={()=>Ostoskoriin(items.id)}/></td>
      </tr>
    
  )
}
)


  return (
    <div>
    <h5>Hoikan maansiirto verkkokauppa</h5>
    <table className="Taulukko">
      <th></th>
      <th>Tuote</th>
      <th>Kuvaus</th>
      <th>Hinta</th>
      {tuotteet}
    </table>
    </div>
  );
}

export default List;
