import React, { Component } from 'react';
import Users from '../components/Users';
import news from  '../images/news.jpg'
import AddUser from '../components/AddUser';
import {Link} from 'react-router-dom'
import StyledHero from '../components/StyledHero'
import Banner from "../components/Banner";

export default class BrasserieClient extends Component{

    // Base de données
    state = {

        users:[
          {name: "Brassens", firstname: "Georges", adress: "12 rue aupres de son arbre", town: "Sète",towncode:3402, phone: 1234567891, mail:"georges.brassens@gmail.com",isEditing:false},
          {name: "brel", firstname: "Jaques", adress: "33 rue du port ", town: "Amsterdam",towncode:7846, phone: 1234567891, mail:"jaques.brel@gmail.com",isEditing:false},
          {name:"Legaulois" , firstname:"Asterix" , adress: "12 rue du menhir", town: "village d'irreductible gaulois",towncode:53401, phone: 1234567891, mail:"potion.magique@gmail.com",isEditing:false},
          {name: "Desproges", firstname: "Pierre", adress: "12 rue de on peut rire de tout ", town: "châlus",towncode:87230, phone: 1234567891, mail:"georges.brassens@gmail.com",isEditing:false},
         
    
        ]
      }
      // nouveau client envoyé par AddUser.js
      addUser = (newUser) => {
            let users = [...this.state.users, newUser];
            this.setState({
                users
            });     
      }

      //quand appuyé
      // (i) recoit les information de  Users.js
      pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({
            users
        });
      }

      // ( i, name, firstname, adress, town, towncode, phone,mail) envoyé par Users.js
      updateUser = (i, name, firstname, adress, town, towncode, phone,mail) => {
        let users = this.state.users;
        users[i].name = name;
        users[i].firstname = firstname;
        users[i].adress = adress;
        users[i].town = town;
        users[i].towncode = towncode;
        users[i].phone = phone;
        users[i].mail = mail;
        users[i].isEditing = false;

        this.setState({
            users
        });

      }
      // (i) est envoyé par Users.js
      pressDelete = (i) => {
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
      }

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
              <div className="container">
                <h1>Liste de Clients </h1>
                <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                <AddUser addUser={this.addUser}/>
            </div>
  
  
                  
              </div>
          </section>
          </>
            
        );
    }
}

