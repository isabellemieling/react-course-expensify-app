import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});


test('Should correctly render expenses summary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={234} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render expenses summary with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={12} expensesTotal={22234} />);
    expect(wrapper).toMatchSnapshot();
});