import * as React from 'react';
import { shallow } from 'enzyme';
import Prompts from './Prompts';

describe('<Prompts />', () => {
  test('renders', () => {
    const wrapper = shallow(<Prompts />);
    expect(wrapper).toMatchSnapshot();
  });
});
