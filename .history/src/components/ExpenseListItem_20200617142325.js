import React from 'react'; 
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

// Below we have to destructure the props 
const ExpenseListItem = ( {dispatch, description, amount, createdAt, id} ) => (
    <div>
        <p>Item: {description}</p>
        <p>Cost: {amount}</p>
        <p>Date added: {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
            }}>Remove</button>
    </div>
);


export default connect()(ExpenseListItem); 

