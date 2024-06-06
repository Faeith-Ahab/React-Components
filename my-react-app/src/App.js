import logo from './twirls.png';
import './App.css';
import React from 'react';
import ShoppingList from './component/shoppingList.js'; 
import Essay from './component/essay.js';
import Table from './component/table.js';
import Gallery from './component/gallery.js';
import ApplicationForm from './component/events/form.js'; 
import GoalButton from './component/events/football';
import Car from './component/cars';


function App() 


{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
        Hello World
        </p>

  
      </header>

       <ShoppingList name="Grocery items" />
       <Essay name="Lorem Ipsum statement" />
       <Table name="shopping list details" />
       <Gallery name="stock" />
       <ApplicationForm />
       <GoalButton/>
       <Car name="Jeep"/>


    </div>
  );
}

export default App;





