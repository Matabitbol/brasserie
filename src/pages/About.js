import React, { Component } from 'react'
import defaultBcg from  '../images/about.jpeg'
import aboutText from '../images/aboutText.jpeg';
import votreBrasseur from '../images/votreBrasseur.jpg';
import Banner from "../components/Banner";
import {Link} from 'react-router-dom'
import StyledHero from '../components/StyledHero'

export default class About extends Component{
    render(){
    return(
        <>
        <StyledHero img={defaultBcg}>
            <Banner title ={`A propos de la brasserie l'intemporelle`} >
            <Link to='/' className = "btn-primary">
                  retour a l'accueil
                </Link>

            </Banner>
        </StyledHero>
        <section className="biere">
            
            <div className="biere-info">
                <article className = "desc"> 
                    <h6>Parce que la bière est la plus ancienne boisson créée par l'Homme
                        et que L'éphémère plaisir qu'elle apporte a su traverser le temps...
                        Nous continuons à le partager...</h6>

                    <p>L’entreprise est spécialisée dans la fabrication de bières de dégustation.
                    <p>Créée en 2017, la brasserie est située à Wailly-Les-Arras, aux portes d'Arras, dans les Hauts-de-France.</p>
                       En plus des bières, vous trouverez chez nous thés, savons, jus de pommes et autres produits artisanaux</p>
                    <p>Différentes soirées et événements sont également proposés tout au long de l'année.
                       Location de pompe à bières avec fût (recyclable) 20 litres / 30 litres
                       Visites sur réservation. </p>
                       <></>
                    <p><img src= {aboutText} alt="" /></p>
                </article>
                <article classename="info">
                <h6>Votre Brasseur</h6>
                <img src= {votreBrasseur} alt="" />
                    
                </article>


                
            </div>
        </section>
        </>
    );
}}