import React from 'react';

// Services
import ProductService from '../../services/product.service'

// Models
import Product from '../../models/product'

// Components
import Header from '../global/header/header.component';
import CategoriesComponent from '../global/categories/categories.component';
import ListProductComponent from './components/list-product/listproduct.component';

// Styles
import './search.sass'

class Search extends React.Component {

  _productService = new ProductService();

  _product = new Product();

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      query: ''
    }
  }

  componentDidMount() {
    this.getParametreGet('search')
  }
  
  render() {
    return (
      <section className="Home">
        <Header />
        <CategoriesComponent categories={this.state.categories} />
        <ListProductComponent products={this.state.products} />
      </section>
    )
  }

  getParametreGet = (parametre) => {
    parametre = parametre.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + parametre + "=([^&#]*)"),
    results = regex.exec(window.location.href);
    let query = results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    console.log(query)
    this.getProducts(query)
  }

  getProducts = (query) => {
    this._productService.getProducts(query).then(e => {
      let products = this._product.mapProducts(e.data.items);
      this.setState({
        products: products.slice(0, 4),
        categories: e.data.categories
      })
    });

  }

}

export default Search;