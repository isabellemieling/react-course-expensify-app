import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});

test('Should renter ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrappter).toMatchSnapshot();
});