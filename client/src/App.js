import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

import TodoCreate from './components/todos/TodoCreate';
import TodoDelete from './components/todos/TodoDelete';
import TodoEdit from './components/todos/TodoEdit';
import TodoList from './components/todos/TodoList';
import TodoShow from './components/todos/TodoShow';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={Fib} />
          <Route path="/todos/new" component={TodoCreate} />
          <Route path="/todos/edit" component={TodoEdit} />
          <Route path="/todos/delete" exact component={TodoDelete} />
          <Route path="/todos/show" exact component={TodoShow} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </Router >
    );
  }
}

export default App;
