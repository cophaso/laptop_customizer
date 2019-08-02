import React from 'react';

function Item(props) {
  return (
    <li key={props.index} className="feature__item">
      <div className={props.featureClass}
        
        onClick={props.handleUpdate}>
          { props.item.name }
          ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(props.item.cost) })
      </div>
    </li>
  )
}


export default Item;