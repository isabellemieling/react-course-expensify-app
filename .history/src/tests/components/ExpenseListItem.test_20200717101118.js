import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});


test('should render expense list item with one item', () => {
    const wrapper = shallow(<ExpenseListItem expenses={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

