import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Hero>
      <Banner title="Oops..." subtitle="page non trouvée">
        <Link to="/" className="btn-primary">
          retourner à l'accueil
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
