import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});

test('should render expense list with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expect} />);
    expect(wrapper).toMatchSnapshot();
});