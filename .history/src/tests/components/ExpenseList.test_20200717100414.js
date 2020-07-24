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
    // First time you run this test case there is no existing snapshot
    // so it won't fail and it will go through and create a new snapshot file 
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list with empty message ', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
})