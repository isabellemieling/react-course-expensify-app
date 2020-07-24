import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';
import { addExpense } from '../../actions/expenses';

// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({
//     adapter: new Adapter()
// });

let onSubmit, history, wrapper;

beforeEach(() => {
    onSubmit = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render addexpensepage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onsubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});

