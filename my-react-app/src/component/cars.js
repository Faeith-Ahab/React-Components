import React from "react";
import jeepCompassImage from '../gallery/Jeep_Compass.png';
import jeepGrandCherokeeImage from '../gallery/Jeep_Grand_Cherokee.png';
import jeepWranglerImage from '../gallery/Jeep_Wrangler.png';
import jeepGrandWagoneerImage from '../gallery/Jeep_Grand_Wagoneer.png';

class Car extends React.Component {
  render() {
    const cars = () => [
      { carName: 'Jeep Compass', price: 91000, year: 2024, imageUrl: jeepCompassImage },
      { carName: 'Jeep Grand Cherokee', price: 36500, year: 2024, imageUrl: jeepGrandCherokeeImage },
      { carName: 'Jeep Wrangler', price: 32000, year: 2024, imageUrl: jeepWranglerImage },
      { carName: 'Jeep Grand Wagoneer', price: 100000, year: 2024, imageUrl: jeepGrandWagoneerImage },
    ];

    const carList = cars();

    return (
      <div className="cars">
        <h1>{this.props.name} pricelist</h1>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Car Name</th>
              <th>Price (USD)</th>
              <th>Year of release</th>
            </tr>
          </thead>
          <tbody>
            {carList.map((car, index) => (
              <tr key={index}>
                <td><img src={car.imageUrl} alt={car.carName} style={{ width: '100px', height: 'auto' }} /></td>
                <td>{car.carName}</td>
                <td>{car.price}</td>
                <td>{car.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Car;