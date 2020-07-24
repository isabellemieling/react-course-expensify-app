import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    let action = {
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('rent');
});

test('should set start date filter', () => {
    let action = {
        type: 'SET_START_DATE',
        date: moment().startOf('month').add(1, 'days'),
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(moment().startOf('month').add(1, 'days'))
})


// What we are returning is a new filters object 
export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
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