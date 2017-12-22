import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startSignOut={()=> null} />);
  expect(wrapper).toMatchSnapshot();
});


test(' should call startlogout on button click', () => {
  const startSignOut = jest.fn();
  const wrapper = shallow(<Header startSignOut={startSignOut} />);
  wrapper.find('button').simulate('click');
  expect(startSignOut).toHaveBeenCalled();
})