
import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import expensesSelect from '../selectors/expenses';
import expensesTotalSelect from '../selectors/expensesTotal';

export const ExpenseSummary = ({expensesCount, expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const expensesTotalFormatted = numeral(expensesTotal).format('$0,0.00');
    return(
        <div>
        <h1>You are Viewing {expensesCount} {expenseWord} totalling {expensesTotalFormatted}</h1>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = expensesSelect(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: expensesTotalSelect(visibleExpenses)
    }

}
export default connect(mapStateToProps)(ExpenseSummary);