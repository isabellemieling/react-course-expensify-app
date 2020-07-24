import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
// Named exports so need {} 
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
// Default export so don't need {} 
import getVisibileExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

// Doing this gives us access to everything we had access to before from the store
// Store.get, store.dispatch, etc 
const store = configureStore();

// Add expenses --> water bill, gas bill
// First import the functions to add expenses 
store.dispatch(addExpense({ description: "Water bill", amount: 120, createdAt: 1000 }));
store.dispatch(addExpense({ description: "Phone Bill", amount: 300, createdAt: 100 }));
store.dispatch(addExpense({ description: "Rent", amount: 19500, createdAt: 1300 }));

// Add text filter --> bill (2 items) --> water (1 item)
// store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('phone'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('water'));
// }, 2000)

// Should see both expenses --> getVisibileExpenses
const state = store.getState(); // This is the entire store with expenses and filters obj
const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('myAppContent'));











