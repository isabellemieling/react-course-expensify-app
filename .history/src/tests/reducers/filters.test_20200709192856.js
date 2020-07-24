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
    let text = 'rent'
    let action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should set start date filter', () => {
    let date = moment().startOf('month').add(1, 'days');
    let action = {
        type: 'SET_START_DATE',
        date
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(date);
});

test('should set end date filter', () => {
    let action = {
        type: 'SET_END_DATE',
        date: moment().endOf('month').subtract(1, 'days'),
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment().endOf('month').subtract(1, 'days'));
});