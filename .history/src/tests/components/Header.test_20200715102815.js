import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render header correctly', () => {
    const wrapper = shallow(<Header />);
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    // Create a new renderer 
    // const renderer = new ReactShallowRenderer();
    // Render something to it 
    // renderer.render(<Header />);
    // Check the output 
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
