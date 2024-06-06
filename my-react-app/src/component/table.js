import React from 'react';



class Table extends React.Component {
  render() {
    return (
      <div className="table">
        <h1>Table for {this.props.name}</h1>


        <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Description</th>
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Fruit salad</td>
                <td>15,000 ugx</td>
                <td>A mixture of various fruits such as apples, oranges, grapes, and bananas, often served as a dessert.</td>
            </tr>
            <tr>
                <td>Vegetable sauce</td>
                <td>10,000 ugx</td>
                <td>A savory sauce made from various vegetables, typically tomatoes, onions, carrots, and herbs, used as a condiment or topping.</td>
            </tr>
            <tr>
                <td>Spices</td>
                <td>5,000 ugx</td>
                <td>Aromatic substances obtained from the bark, roots, seeds, or fruits of plants, used to flavor or season food.</td>
            </tr>
            <tr>
                <td>Curry</td>
                <td>25,000 ugx</td>
                <td>A dish originating in the cuisine of the Indian subcontinent, typically consisting of meat, fish, or vegetables cooked with a mixture of spices and served with rice or bread.</td>
            </tr>
            <tr>
                <td>Broth</td>
                <td>30,000 ugx</td>
                <td>A savory liquid made by boiling water with bones, meat, or vegetables, used as a base for soups, sauces, or stews.</td>
            </tr>
        </tbody>
    </table>
      </div>
    );
  }
} 

export default Table;