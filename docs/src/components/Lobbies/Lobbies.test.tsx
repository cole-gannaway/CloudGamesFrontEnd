import * as React from 'react';
import { shallow } from 'enzyme';
import Lobbies from './Lobbies';

describe('<Lobbies />', () => {
  test('renders', () => {
    const wrapper = shallow(<Lobbies />);
    expect(wrapper).toMatchSnapshot();
  });
});
