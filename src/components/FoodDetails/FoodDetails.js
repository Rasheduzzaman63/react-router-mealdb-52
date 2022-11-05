import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const food = useLoaderData();
    const {name, price}=food;
    return (
        <div>
            <h1>Food Details here</h1>
            <h3>{name}</h3>
        </div>
    );
};

export default FoodDetails;