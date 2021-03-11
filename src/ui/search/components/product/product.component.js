import React from 'react';

import { Link } from "react-router-dom";

// Styles
import './product.style.sass'

var currencyFormatter = require('currency-formatter');

class ProductComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="container-product" >
        <div className="container-image-info" >
            {/* <Link className="link-image" to={`/items/${this.props.product.id}`}>
            </Link> */}
          <div className="container-image-product" >
              <img loading="lazy" className="image-product" src={this.props.product.picture} alt={this.props.product.title} />
          </div>
          <div className="container-info" >
            <div className="container-value-product" >
              <span className="value-product" > { currencyFormatter.format(this.props.product.price.amount, { code: 'USD' }) } </span>
              { (this.props.product.freeShipping)  ? <img className="icon-shopping" src="icons/icon-shipping.png" alt="icon-shipping.png" /> : '' }
            </div>
            <Link className="link-title" to={`/items/${this.props.product.id}`}> <h2  className="title-product" >{this.props.product.title}</h2></Link>
          </div>
        </div>
      </li>
    )
  }

  goToDetailProduct = (product_id) => {
    console.log(product_id)
    // window.location.href = `/items/${product_id}`;
  }

}

export default ProductComponent;