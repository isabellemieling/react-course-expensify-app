import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// Below we have to destructure the props 
const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <p>Item: {description}</p>
        </Link>
        <p>
            Cost: {numeral(amount / 100).format('$0,0.00')}
        Date added: {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);


export default ExpenseListItem;

