import React from 'react'

function ProductCard(props) {
  return (
    <div className='four wide column'>
      <div className="ui link cards border">
        <div className='card'>
          <div className="image">
            <img src={props.image} />
          </div>  
          <div className="content">
            <div className="header">{props.title}</div>
            <div className="meta">{props.description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard