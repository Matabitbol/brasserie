import React, { Component } from 'react'
//import items from './data'
import Client from './Contentful'


const BeerContext = React.createContext();

class BeerProvider extends Component {
state={
  beers: [],
  sortedBeers : [],
  featuredBeers :[],
  loading: true,
  type:'Toutes les bieres',


  
};
//getData
getData = async () =>{
try{
    let response = await Client.getEntries({
        content_type:"brasserieLintemporelle"
    });
    let beers = this.formatData(response.items);
     
    let featuredBeers = beers.filter(beer => beer.featured === true);
    
    this.setState({
beers, 
featuredBeers, 
sortedBeers:beers, 
loading: false,
    });
} catch (error){
    console.log(error);
}
};

componentDidMount(){
    this.getData()
    
};
formatData(items){
let tempItems = items.map(item =>{
let id = item.sys.id
let images = item.fields.images.map(image=>image.fields.file.url);
let beer = {...item.fields,images,id};
return beer;

    });
    return tempItems
};
getBeer = (slug) =>{
let tempBeers = [...this.state.beers];
const beer = tempBeers.find(beer=> beer.slug === slug);
return beer;
};
handleChange = event => {
  const target  = event.target;
  const name  = event.target.name
  const value = event.type === 'checkbox' ? target.checked:target.value;
this.setState(
    {
  [name]:value
},
this.filterBeers
);
};
filterBeers = () => {
let {
beers, 
type,

}=this.state

let tempBeers = [...beers];
if (type !== 'Toutes les bieres'){
  tempBeers = tempBeers.filter(beer => beer.type === type); 
}
this.setState({
    sortedBeers: tempBeers
})

} 

render() {
        return (
        <BeerContext.Provider value={{
            ...this.state,
            getBeer: this.getBeer,
            handleChange: this.handleChange
            }}>
            {this.props.children}
        </BeerContext.Provider>
        );       
    }
}

const BeerConsumer = BeerContext.Consumer;
export function withBeerConsumer(componentDidMount){
    return  function ConsumerWrapper(props){
        return <BeerConsumer>
            {value=> <Component{...props} context={value}/>}
        </BeerConsumer>
    }
}

export {BeerProvider, BeerConsumer,BeerContext};