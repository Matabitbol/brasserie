import React from 'react'
import BeerComp from './BeerComp'
export default function BeerList({beers}) {
   if (beers.length===0){
       return(
           <div className="empty-search">
               <h3>Malhereusement aucune biere ne correspond à votre recherche </h3>
           </div>
       )
   } 
    return(
     <secion className="beerslist">
        <div className="beerslist-center">
        {beers.map(item => {
          return <BeerComp key={item.id} beer={item}/>
        })}
        </div>
    </secion>
    );
}
