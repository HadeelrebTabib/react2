import React, { Component } from 'react'
import style from './ProductItem.module.css';
export default class ProductItem extends Component {
  render() {
    console.log(this.props.productInfo+"kk")
    let {id,description_short,image_thumbnail,stock_code,url}=this.props.productInfo
    return (
      <>
      <div className="col-md-3 bx bxl-mailchimp box-sizing">
        <div className={`product ${style.product} `}  >
        <a href={`${url}`}  target="_blank">
            <img src={`${image_thumbnail}`}/>  </a>
            <div className="mt-5 bg-Light">
            <h6>{description_short}</h6>
            <h6 className='mt-3'> Stock code:  {stock_code}</h6>
            </div>
        </div>
      </div>
      </>    
      )
  }
}
