import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// We know this function returns an object with the item to be removed
test('Should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: '123abc'
    });
});

test('Should set up edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note'
        }
    });
});

test('Should set up add expense action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        amount: 158000,
        note: 'July rent',
        createdAt: 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should set up add expense action object with default values', () => {
    const expenseData = {};
    const action = addExpense(expenseData);
    expect(action).toEqual({
        description = '',
        note = '',
        amount = 0,
        createdAt = 0,
        id: expect.any(String)
    });
});