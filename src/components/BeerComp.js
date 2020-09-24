import React from 'react';
import {Link} from "react-router-dom";
import defaultImg from "../images/defaultBcg.jpeg";
import PropTypes from 'prop-types';
import { memo } from "react"
const BeerComp = memo(({ beer }) => {

   const {name,slug,images,price,pack}= beer;

    return (
    <article className="beer">  
     <div className="img-container">
     <img src={images[0] || defaultImg} 
      alt="single-beer" />
      <div className="price-top">
        <h6>{price}€</h6>
        <p>par bière</p>
        <h6>{pack}€</h6>
        <p>le carton</p>
      </div>
      <Link to={`/bieres/${slug}`} className="btn-primary beer-link">
            en savoir plus 
        </Link>
      </div>
      <p className="beer-info" >{name}</p>
     </article>
    );
});

BeerComp.propTypes = {
  beer:PropTypes.shape({
    name:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    price:PropTypes.number.isRequired,
  })
};
  export default BeerComp; 
