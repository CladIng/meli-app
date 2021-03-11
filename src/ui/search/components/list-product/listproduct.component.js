import React from 'react';

// Components
import ProductComponent from '../product/product.component'

// Styles
import './listproduct.style.sass'

class ListProductComponent extends React.Component {

  constructor(props) {
    super(props);

  }

  render(){
    return (
      <div className="columns is-gapless is-centered" >
        <ol className="container-list-products column is-10 is-offset-1" >
          {
            this.props.products.map(product => {
              return <ProductComponent key={product.id} product={product} />
            })
          }
        </ol>
      </div>
    )
  }

}

export default ListProductComponent;