import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import {Link} from 'react-router-dom'
export const LivreDor = () => {
    return (
        <Hero hero="bieresHero">
            <Banner title="Le livre d'or">
                
                <Link to="/" className="btn-primary">
                    retour à l'accueil
                </Link>
            </Banner>
        </Hero>
    );
};
export default LivreDor;