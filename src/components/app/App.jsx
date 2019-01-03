import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import GameHeader from '../header/GameHeaderComponent';
import Game from '../game/Game';

import './App.css';

class App extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div className="App">
          <GameHeader />
          <Game />
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
