import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MealDetails = () => {
    const post = useLoaderData();
    const {id, title, body}=post;
    console.log(post)
    return (
        <div>
            <h1>Meal Details</h1>
            <h3>{title}</h3>
            <h6>{body}</h6>
        </div>
    );
};

export default MealDetails;