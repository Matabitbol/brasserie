import React, { Component } from 'react'
import defaultBcg from  '../images/contactus.jpeg'
import Localisation from '../images/localisation.JPG';
import Banner from "../components/Banner";
import {Link} from 'react-router-dom'
import StyledHero from '../components/StyledHero'
import {BiPhoneCall} from 'react-icons/bi'
import {BiMailSend} from 'react-icons/bi'
import {BiCar} from 'react-icons/bi'

export default class ContactUs extends Component{
    render(){
    return(
        <>
        <StyledHero img={defaultBcg}>
            <Banner title ={`Nous contacter`} >
            <Link to='/' className = "btn-primary">
                  retour a l'accueil
                </Link>

            </Banner>
        </StyledHero>
        <section className="biere">
            
            <div className="biere-info">
                <article className = "desc"> 
                    <h3>Localisation</h3>
                    <h6>40 bis rue de Pas 62217 Wailly<a href='waze://?=q=40+bis+rue+de+pas+62217+wailly'><BiCar/></a></h6>
                    <img src= {Localisation} alt="" />
                </article>
                <article classename="info">
                <h3>Nous contacter</h3>
                    <h6>Par mail brasserie.l.intemporelle@gmail.com <a href="mailto:brasserie.l.intemporelle@gmail.com"><BiMailSend/></a></h6>
                    <h6>Par téléphone <a href="tel:+33785170479"> <BiPhoneCall/></a></h6>
               <h6><a href="https://www.facebook.com/brasserielintemporelle" onclick="window.open(this.href); return false;" className = "btn-primary">retrouvez nous sur Facebook</a></h6> 
                </article>


                
            </div>
        </section>
        </>
    );
}}