import React from 'react';
import './App.css';
import BrasserieClients from "./pages/BrasserieClients"
import Home from "./pages/Home";
import Bieres from "./pages/Bieres";
import Biere from "./pages/Biere";
import Erreurs from "./pages/Erreurs";
import News from "./pages/News"
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs"
import LivreDor from "./pages/LivreDor"
import About from "./pages/About"

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component= {Home}/>
    <Route exact path="/news/" component= {News}/>
    <Route exact path="/brasserieclients/" component={BrasserieClients}/>
    <Route exact path="/about/" component= {About}/>
    <Route exact path="/contactus/" component= {ContactUs}/>
    <Route exact path="/livredor/" component= {LivreDor}/>
    <Route exact path="/bieres/" component= {Bieres}/>
    <Route exact path="/bieres/:slug" component= {Biere}/>
    <Route component = {Erreurs} />
    </Switch>
      </>
  );
}

export default App;
