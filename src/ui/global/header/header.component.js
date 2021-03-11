import React from 'react';

import { Link } from "react-router-dom";

// Assets
// import logo from './src/assets/imgs/logo-mercadolibre.png';
// import icon_search from './src/assets/icons/icon-search.png';

// Styles
import './header.style.sass';


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  componentDidMount() {
    this.getParametreGet('search')
  }

  render() {
    return (
      <header className="header" >
        <div className="columns is-gapless is-centered" >
          <div className=" column is-10 is-offset-1" >
            <div className="container-header columns is-gapless" >
              <div className="column is-1" >
                <div className="container-logo" >
                <Link to={`/`}> <img className="logo-geader" src="/imgs/logo-mercadolibre.png" alt="Logo mercadolibre" /></Link>
                </div>
              </div>
              <div className="column is-11" >
                <div className="container-search" >
                  <input onChange={this.onChangeSearch} onKeyPress={this.onKeyPressEnter} value={this.state.search} className="input-search" placeholder="Nunca dejes de buscar" />
                  <div onClick={this.searchProduct} className="container-icon-search" >
                    <img className="logo-geader" src="/icons/icon-search.png" alt="icono buscar mercadolibre" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  getParametreGet = (parametre) => {
    parametre = parametre.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + parametre + "=([^&#]*)"),
    results = regex.exec(window.location.href);
    let query = results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    this.setState({ search: query });
  }

  onChangeSearch = (e) => {
    this.setState({ search: e.target.value });
  }

  onKeyPressEnter = (event) => {
    if(event.key === 'Enter'){
      this.searchProduct()
    }
  }

  searchProduct = () => {
    window.location.href = `/items?search=${this.state.search}`
  }

}

export default Header;