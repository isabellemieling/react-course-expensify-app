import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

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
    let note = 'Rent increased by $75';
    let updates = {
        note
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates
    };
    let updatedExpense = {
        id: '2',
        description: 'Rent',
        note,
        amount: 195000,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not edit expense if id is not found', () => { }); 




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