import React from 'react';
import './Food.css'
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Food = ({food}) => {
    console.log(food)
    const {id, name, price} = food;
    const navigate = useNavigate();
    const handelNavigat =()=>{
        navigate (`/food/${id}`)
    }
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <Link to={`/food/${id}`}><Button variant="info">Order Now</Button></Link>
                <Button onClick={handelNavigat}>Order Now2</Button>
            </div>
        </div>
    );
};

export default Food;