
import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';
import { Header } from '../../components/Header';

test('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper).toMatchSnapshot();
})

test(" should call startAuthentication on login button click", () => {
    const startAuthentication = jest.fn();
    const wrapper = shallow(<LoginPage startAuthentication={startAuthentication}/>);
    wrapper.find('button').simulate('click'); 
    expect(startAuthentication).toHaveBeenCalled();
})