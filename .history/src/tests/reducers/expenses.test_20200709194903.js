import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

let note = 'Rent increased by $75';
let updates = { note };

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id ', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id ', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '5'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    let expenseToAdd = {
        id: '4',
        description: 'Water',
        note: '',
        amount: 595,
        createdAt: 500
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenseToAdd
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expenseToAdd]);
});

test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates
    };
    let updatedExpense = {
        ...expenses[1],
        note
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], updatedExpense, expenses[2]])
});

test('should not edit expense if id is not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 2,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);

}); 