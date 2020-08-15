import * as React from 'react';
import { shallow } from 'enzyme';
import AppMenuBar from './AppMenuBar';

describe('<AppMenuBar />', () => {
  test('renders', () => {
    const wrapper = shallow(<AppMenuBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
