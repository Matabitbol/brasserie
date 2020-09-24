import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import {Link} from 'react-router-dom'
import BeerContainer from '../components/BeerContainer'

export const Bieres = () => {
    return (
        <>
        <Hero hero="bieresHero">
            <Banner title="Les bières L'intemporelle">
                <Link to="/" className="btn-primary">
                    retour à l'accueil
                </Link>
            </Banner>
        </Hero>
        <BeerContainer />
        </>
    );
};
export default Bieres;
