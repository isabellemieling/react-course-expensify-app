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
        '123abc',
        note: 'New note'

    })
});


type: 'EDIT_EXPENSE',
    id,
    updates
});