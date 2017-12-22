
import React from 'react';
import { connect } from 'react-redux';

import { startSignOut } from '../actions/authentication';
import { NavLink } from 'react-router-dom';

export const Header = ({startSignOut}) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <button onClick={startSignOut}>Log out</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startSignOut: () => dispatch(startSignOut())
})
export default connect(undefined, mapDispatchToProps)(Header);
