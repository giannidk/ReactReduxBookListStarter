import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import BooksList from './containers/books_list';
import BookDetails from './containers/book_details';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React Redux simple book list example</h2>
          </div>
          <div className="container">
            <div className="row">
              <BooksList />
              <BookDetails />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
