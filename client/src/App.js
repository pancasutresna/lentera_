import React, { Component } from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import OtherPage from './OtherPage';
//import Fib from './Fib';
import PhotonList from './components/core/photon/PhotonList';
import PhotonCreate from './components/core/photon/PhotonCreate';
import PhotonEdit from './components/core/photon/PhotonEdit';
import PhotonDelete from './components/core/photon/PhotonDelete';
import TodoShow from './components/todos/TodoShow';
import Header from './components/Header';
import history from './components/core/history/history';


class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            {/* <Route exact path="/" component={Fib} /> */}
            <Route path="/" component={PhotonList} exact />
            <Route path="/photons/new" component={PhotonCreate} />
            <Route path="/photons/edit/:id" component={PhotonEdit} />
            <Route path="/photons/delete/:id" exact component={PhotonDelete} />
            <Route path="/todos/show" exact component={TodoShow} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
