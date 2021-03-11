import React from 'react';

// Services
import ProductService from '../../services/product.service'

// Models
import Product from '../../models/product'

// Components
import Header from '../global/header/header.component';

// Styles
import './detail-product.sass'

var currencyFormatter = require('currency-formatter');

class DetailProductView extends React.Component {

  _productService = new ProductService();

  _product = new Product();

  constructor(props) {
    super(props);
    this.state = {
      product: new Product(),
      product_id: ''
    }
  }

  componentDidMount() {
    this.getParametreGet()
  }
  
  render() {
    return (
      <section className="Home">
        <Header />
        <br />
        
        <div className="columns is-centered" >
          <div className="column is-10" >
            <div className="container-detail-product" >
              <div className="columns is-gapless" >
                <div className="column is-8" >
                  <div className="container-image-product" >
                    <img className="image-product-detail" src={this.state.product.picture} />
                  </div>
                </div>
                <div className="column is-4" >
                  <div className="container-info-product" >
                    <span className="state-product" >{(this.state.product.condition == 'new' ? 'Nuevo' : 'Usado')}</span>
                    <h2 className="title-product" >{this.state.product.title}</h2>
                    <span className="value-product" >{currencyFormatter.format(this.state.product.price.amount, { code: 'USD' })}</span>
                    <a className="btn-primary" >Comprar</a>
                  </div>
                </div>
              </div>
              <div className="columns is-gapless" >
                <div className="column is-8" >
                  <div className="container-description-product" >
                    <h3 className="title-description-product" >Descripción del producto</h3>
                    <p className="description-product" > {this.state.product.description} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  getParametreGet = () => {
    const { match: { params } } = this.props;
    this.setState({product_id: params.id})
    this.getDetailProduct(params.id)
  }
  
  getDetailProduct = (product_id) => {
    this._productService.getDetailProduct( product_id ).then(e => {
      let product = new Product(e.data.item)
      this.setState({ product: product })
      console.log(this.state.product)
    })  
  }

}

export default DetailProductView;