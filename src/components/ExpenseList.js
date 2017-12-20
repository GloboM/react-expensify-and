import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { startSetExpenses, startAddExpense } from '../actions/expenses';

export class ExpenseList extends React.Component {
  
  render () {
    return (
      <div>
        {
          this.props.expenses.length === 0 ? (
            <p>No expenses</p>
          ) : (
              this.props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />;
              })
            )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters), 
  };
};


export default connect(mapStateToProps)(ExpenseList);
