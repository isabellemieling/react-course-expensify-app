import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <ExpenseForm 
                onSubmit={(expense) => {
                    console.log(expense);
                }}
            />
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);