import React, { Component } from 'react'
import Title from './Title'
import {BiBeer} from 'react-icons/bi'
import {RiTruckLine} from 'react-icons/ri'
import {CgShoppingCart} from 'react-icons/cg'
export default class Services extends Component {
   
state={
    Services:[
        {
         icon:<BiBeer/>,
         title:"frabication de Bières",
         info: "Dégustation & visites"
        },
        
        {
         icon:<RiTruckLine/>,
         title:"Livraison",
         info: "fût et locations de pompes"
        },
        {
         icon:<CgShoppingCart/>,
         title:"Vente de produits artisanaux",
         info: "Soirées accords me(t)s bières"
        }
    ]
}
    render() {
        return (
            <section className="services">
             <Title title ="services" />
             <div className="services-center">
              {this.state.Services.map((item, index)=>{
                return (
                 <article key={index} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                 </article>
                );
              })}
        </div>
            </section>
        );
    }
}
