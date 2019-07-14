import React, { Component } from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import OtherPage from '../OtherPage';
import Fib from '../Fib';
import PhotonList from './core/photon/PhotonList';
import PhotonCreate from './core/photon/PhotonCreate';
import PhotonEdit from './core/photon/PhotonEdit';
import PhotonDelete from './core/photon/PhotonDelete';
import PhotonShow from './core/photon/PhotonShow';
import Header from './Header';
import history from './core/history/history';
// import CommentBox from './CommentBox';
// import CommentList from './CommentList';


class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header /> 
            <Route exact path="/" component={Fib} />
            <Switch>
              <Route path="/" component={PhotonList} exact />
              <Route path="/photons/new" component={PhotonCreate} />
              <Route path="/photons/edit/:id" component={PhotonEdit} />
              <Route path="/photons/delete/:id" exact component={PhotonDelete} />
              <Route path="/photons/:id" exact component={PhotonShow} />
              <Route path="/otherpage" component={OtherPage} />
            </Switch>
          </div>
        </Router>
      </div>
      // <div>
      // <CommentBox />
      // <CommentList />
      // </div>
    );
  }
}

export default App;
