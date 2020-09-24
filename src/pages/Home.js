import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedBeers from '../components/FeaturedBeers';

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Brasserie L'intemporelle"
          subtitle="Bienvenue sur le site !"
        >
          <Link to="/bieres" className="btn-primary">
            Decouvrez nos Bières
          </Link>
        </Banner>
      </Hero>
      <Services/>
      
      <Banner
          title="En ce moment "
          >
          <Link to="/news" className="btn-primary">
          Voir les evenements 
          </Link>
        </Banner>
          
      <FeaturedBeers/>
      
    </>
  );
};

export default home;
