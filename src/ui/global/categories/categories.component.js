import React from 'react'

// Styles
import './categories.style.sass'

function CategoriesComponent(props) {
  console.log(props)
  return (
    <div className="columns is-gapless is-centered" >
      <ol className="column is-10 is-offset-1" >
        <div className="container-list-categories" >
          {
            props.categories.map((category, index) => {
              return <li key={index} className="item-category" > {category} <span> {(index == (props.categories.length - 1)) ? '' : '>'} </span> </li>
            })
          }
        </div>
      </ol>
    </div>
  )
}

export default CategoriesComponent;