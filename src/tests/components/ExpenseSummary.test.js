
import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test ('should render expenses summary correctly with one expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expenseTotal={200}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render expenses summary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={3} expensesTotal={450123}/>);
    expect(wrapper).toMatchSnapshot();
})