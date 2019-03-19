import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import OtherPage from './OtherPage';
//import Fib from './Fib';
import TodoList from './components/todos/TodoList';
import TodoCreate from './components/todos/TodoCreate';
import TodoDelete from './components/todos/TodoDelete';
import TodoEdit from './components/todos/TodoEdit';
import TodoShow from './components/todos/TodoShow';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router>
          <div>
            <Header />
            {/* <Route exact path="/" component={Fib} /> */}
            <Route path="/" component={TodoList} />
            <Route path="/todos/new" component={TodoCreate} />
            <Route path="/todos/edit" component={TodoEdit} />
            <Route path="/todos/delete" exact component={TodoDelete} />
            <Route path="/todos/show" exact component={TodoShow} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
