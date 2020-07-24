import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});

test('should render expense dashboard page correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    // Create a new renderer 
    // const renderer = new ReactShallowRenderer();
    // Render something to it 
    // renderer.render(<Header />);
    // Check the output 
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
