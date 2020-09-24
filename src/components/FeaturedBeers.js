import React, { Component } from 'react'
import { BeerContext } from '../context'
import Loading from "./Loading";
import Title from "./Title"
import BeerComp from './BeerComp';
export default class FeaturedBeers extends Component {
    static contextType = BeerContext;
    render() {
      let { loading, featuredBeers: beers}=this.context;
        beers = beers.map (beer => {
         return <BeerComp key={beer.id} beer={beer}/>
        })
        return (
            <section classeName="featured Beers">
               <Title title = "Nos bieres du moment"/>
              <div className="featured-beers-center">
               {loading?<Loading/>:beers}   
              </div>
               
            </section>
        );
    }
}
