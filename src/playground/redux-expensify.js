import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
// Set up an action generator 
const addExpense = (
    { description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note, 
        amount, 
        createdAt
    }
});
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE', 
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT 
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
});

// SET_END_DATE 
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
});

// Expenses Reducer 

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        // Grab of all the existing properties in expense
                        // Add on all the updated properties that you are passing 
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });
        default: 
            return state;
    }
};

// Filters Reducer 

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

// Keep in mind that we want to return a new object!
// Don't want to change the existing object 
// What we are returning is a new filters object 
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            };
        case 'SET_END_DATE':
            return {
                ...state, 
                endDate: action.date
            };
        default: 
            return state;
    }

};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate ;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()); 

        return startDateMatch && endDateMatch && textMatch; 
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1; 
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    }); 
};
 
// Store creation 
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState(); // This is the entire store with expenses and filters obj
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: "rent", amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({ description: "coffee", amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// // This should return any expenses that contain the word rent in the name or text 
// store.dispatch(setTextFilter('rent'));

// store.dispatch(sortByAmount()); 
// store.dispatch(sortByDate()); 

// store.dispatch(setStartDate(1250));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'sdjkfhs',
        description: 'January Rent',
        note: 'This was the new payment for this month',
        amount: 158000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount 
        startDate: undefined,
        endDate: undefined
    }
}

const user = {
    name: 'Jen', 
    age: 24
};

// console.log({
//     ...user,
//     location: 'Boston'
// });