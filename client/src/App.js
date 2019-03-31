import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import OtherPage from './OtherPage';
//import Fib from './Fib';
import PhotonList from './components/core/photon/PhotonList';
import PhotonCreate from './components/core/photon/PhotonCreate';
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
            <Route path="/" component={PhotonList} exact />
            <Route path="/photons/new" component={PhotonCreate} />
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
