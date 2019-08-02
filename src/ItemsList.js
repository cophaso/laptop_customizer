import React from 'react';
import Item from './Item';

function ItemsList(props) {
  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      {
        Object.keys(props.features)
          .map(key => {
            const options = props.features[key].map((item, index) => {
              const selectedClass = item.name === props.state.selected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return <Item 
                        handleUpdate={() => props.handleUpdate(key, item)} 
                        index={index} 
                        item={item}
                        featureClass={featureClass}/>
            });

            return <div className="feature" key={key}>
              <div className="feature__name">{key}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
          })
      }
    </section>
  );
}


export default ItemsList