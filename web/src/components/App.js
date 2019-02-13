import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import ItemCreate from './items/ItemCreate';
import ItemEdit from './items/ItemEdit';
import ItemDelete from './items/ItemDelete';
import ItemList from './items/ItemList';
import ItemShow from './items/ItemShow';
import Header from './Header';


const App = () => {
    return (
        <div className="ui container">
            <HashRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={ItemList} />
                    <Route path="/items/new" exact component={ItemCreate} />
                    <Route path="/items/edit" exact component={ItemEdit} />
                    <Route path="/items/delete" exact component={ItemDelete} />
                    <Route path="/items/show" exact component={ItemShow} />
                </div>
            </HashRouter>
        </div>
    );
};

export default App;