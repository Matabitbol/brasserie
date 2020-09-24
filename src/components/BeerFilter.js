import React from 'react';
import {useContext } from 'react';
import {BeerContext} from '../context';
import Title from '../components/Title';
// get all unique values
const getUnique = (items,value)=>{
  return [...new Set(items.map(item=>item[value]))]
}
export default function BeerFilter({beers}) {
  const context = useContext (BeerContext);
  const{
    handleChange,
    type,
   
  } = context;
  //get unique types 
  let types = getUnique(beers,'type');
  //add all
  types=["Toutes les bieres",...types];
  //map to jsx
  types = types.map((item,index)=>{
  return <option value= {item} key={index}>{item}</option>
  })
  return<section className="filter-container">
    <Title title="Quelle bière cherchez vous"/>
    <form className="filter-form">
      {/*select type */}
      <div className="form-group">
      <label htmlFor="type">type de bière</label>
      <select name="type" id="type" value={type}
        className="form-control" 
        onChange={handleChange}
        >
        {types}
        </select>
      </div>
      {/* end select type */}
    </form>
  </section>;
}
