import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render header correctly', () => {
    // Set up a new rendered 
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    console.log(renderer.getRenderOutput());
});
