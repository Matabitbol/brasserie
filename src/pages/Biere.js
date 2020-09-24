import React, { Component } from 'react'
import defaultBcg from  '../images/engrenage-composition-motif.jpg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from "react-router-dom"
import {BeerContext} from '../context'
import StyledHero from '../components/StyledHero'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
export default class Biere extends Component{
    constructor(props){
        super (props);
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = BeerContext;
   
    render(){
        const {getBeer} = this.context;
        const beer = getBeer(this.state.slug);
        if(!beer){
            return(
                
                <Hero hero='bieresHero'>
                <Banner title="Oops..." subtitle="Biere inconnue">
                  <Link to="/bieres" className="btn-primary">
                    retourner aux bieres
                  </Link>
                </Banner>
              </Hero>
            );
        }
        const {
          name,
          volume,
          size,
          pack,
          price,
          extras,
          images
        }= beer;
        const description = documentToReactComponents(beer.description)
        console.log(typeof beer, beer);
        const [mainImg, ...defaultImg]= images;
        console.log(typeof images, images)
        return (
          <>
        <StyledHero img={mainImg || this.state.defaultBcg }>
            <Banner title={`${name}`}>
                <Link to='/bieres' className = "btn-primary">
                  retour aux bieres 
                </Link>
            </Banner>
        </StyledHero>

        <section className="biere">
          <div className="biere-images">
          {defaultImg.map((item, index)=>{
          return <img key={index} src={item} alt={name}/>;
          })} 
          </div>
          <div className='biere-info'>
           <article className="desc">
            <h3>Mot du brasseur</h3>
            <p>{description}</p>
           </article>
           <article className="info">
             <h3>Infos</h3>
             <h6>volume :{size}cl</h6>
             <h6>Prix :{price}€ </h6>
             <h6>Le carton :{pack}€ </h6>
             <h6>
               Degrés d'alcool:{volume}%vol.
             </h6>
             
           </article>
          </div>
        </section>
        <section className="biere-extras">
          <h6>Accords du brasseur</h6>
          <ul className="extras">
          {extras.map((item,index)=>{
            return <li key={index}>- {item}</li>
          })}
          </ul>
        </section>
        </>
      );
    }
}