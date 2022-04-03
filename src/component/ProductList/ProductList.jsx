import React, { Component } from 'react'
import axios from 'axios';
import ProductItem from '../ProductItem/ProductItem' 
export default class ProductList extends Component {
    state={
      url :'https://api.jsonbin.io/b/5ce79f70f4df3819800ce51a',
      list:[]
      }
     fetchdata=()=>{
         fetch(this.state.url).then((response) => {
            return response.json();
        })
        .then((data) => {
            let list = data.products;
            console.log(list)
            this.setState({list});
        })
      }
      componentDidMount() {
        this.fetchdata();
      }
  render() {
    return (
        <>   
        <h1 className='text-center'>Product List</h1> 
        <div className="row">
    {this.state.list.map( (product) => <ProductItem  
    key={product.id} 
    productInfo= {product} 
    />)}
    </div>
      </>
    )
  }
}
