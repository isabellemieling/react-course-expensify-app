import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render header correctly', () => {
    // Create a new renderer 
    const renderer = new ReactShallowRenderer();
    // Render something to it 
    renderer.render(<Header />);
    // Check the output 
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});
