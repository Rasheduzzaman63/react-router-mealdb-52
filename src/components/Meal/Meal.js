import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Meal.css'

const Meal = ({post}) => {
    const {title, body, id}= post;
    const navigate = useNavigate();
    const handleNavigates = ()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='meal'>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={`/post/${id}`}><Button>Details</Button></Link>
            <Button onClick={handleNavigates} >Details 2</Button>
        </div>
    );
};

export default Meal;