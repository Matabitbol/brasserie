import React, { Component } from 'react'
import news from  '../images/news.jpg'
import newsprogress from '../images/newsprogress.gif';

import Banner from "../components/Banner";
import {Link} from 'react-router-dom'
import StyledHero from '../components/StyledHero'

export default class News extends Component{
    render(){
    return(
        <>
        <StyledHero img={news}>
            <Banner title ={`En ce moment `} >
            <Link to='/' className = "btn-primary">
                  retour a l'accueil
                </Link>

            </Banner>
        </StyledHero>
        <section className="biere">
            
            <div className="biere-info">
                <article className = "desc"> 
                    <h3>Prochainement ...</h3>

                    <p>vous retrouverez ici, les nouveautés, les bières en préparations et tout ce qui touche de près votre brasserie <img src= {newsprogress} alt="" /></p>
                   
                     
                </article>
                <article classename="info">
                <h3>Salon / presence </h3>
                <p> c'est ici que nous vous informeront des prochains salon / evenements où nous seront présent </p>
                    
                </article>


                
            </div>
        </section>
        </>
    );
}}