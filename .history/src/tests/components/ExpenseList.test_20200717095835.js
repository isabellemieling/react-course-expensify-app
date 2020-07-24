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
    // Render the component with that data 
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    // Set up a snapshot
    expect(wrapper).toMatchSnapshot();
});