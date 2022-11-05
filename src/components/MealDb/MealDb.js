import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const MealDb = () => {
    const posts = useLoaderData();
    // console.log(posts)
    return (
        <div>
            <h1>MealDb: {posts.length} </h1>
            {
                posts.map(post =><Meal
                key={post.id}
                post={post}
                ></Meal>)
            }
        </div>
    );
};

export default MealDb;