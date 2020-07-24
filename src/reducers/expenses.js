// Expenses Reducer 
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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
