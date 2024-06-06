import React from 'react';



class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul> 
          <li>Fruit salad</li>
          <li>Vegetable sauce</li>
          <li>Spices</li>
          <li>Curry</li>
          <li>Broth</li>
          </ul>
      </div>
    );
  }
} 

export default ShoppingList;

