import React from 'react';
import Food from '../Food/Food';
import './Resturant.css'


const Resturant = () => {
    const foods = [
        {id:1, name:'Biriyani', price:200},
        {id:2, name:'Chicken', price:100},
        {id:3, name:'Khichuri', price:150},
        {id:4, name:'Burger', price:120},
        {id:5, name:'Tea', price:50}
    ]
    return (
        <div className='resturant'>
            {
                foods.map(food => <Food 
                key={food.id}
                food={food}
                ></Food>)
            }
            
        </div>
    );
};

export default Resturant;