import React from 'react'
import {Link} from 'react-router-dom';
function ProductCard(props) {
  return (
    <Link to={`/product/${props.id}`}>
      <div className='four wide column'>
        <div className="ui link cards border">
          <div className='card'>
            <div className="image">
              <img src={props.image} />
            </div>  
            <div className="content">
              <div className="header">{props.title}</div>
              <div className="meta">${props.price}</div>
              <div className='type'>{props.category}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard