import React from 'react'; 
import { Link } from 'react-router-dom';

// Below we have to destructure the props 
const ExpenseListItem = ( { description, amount, createdAt, id} ) => (
    <div>
        <Link to={`/edit/${id}`}>
            <p>Item: {description}</p>
        </Link>
        <p>Cost: {amount}</p>
        <p>Date added: {createdAt}</p>
    </div>
);


export default ExpenseListItem; 

