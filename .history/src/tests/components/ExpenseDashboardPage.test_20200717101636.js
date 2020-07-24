import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPge from '../../components/NotFoundPage';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});

test('should render not found page correctly', () => {
    const wrapper = shallow(<NotFoundPge />);
    expect(wrapper).toMatchSnapshot();
});
