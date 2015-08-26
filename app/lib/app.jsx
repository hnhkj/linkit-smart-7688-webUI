require('../css/main.css');
import React from 'react';
import AppConstants from './constants/appConstants.js';

//component
import Login from './components/login.jsx';
import Content from './components/content.jsx';
import Header from './components/header.jsx';

//store
import AppStore from './stores/appStore.js';

function appState() {
  return AppStore.init();
}

const App = React.createClass({

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(appState());
  },

  getInitialState: function() {
    return appState();
  },

  render: function() {
    var elem = '';
    console.log(this.state.APP_PAGE)
    switch (this.state.APP_PAGE) {
      case AppConstants.LOGIN:
        elem = <Login { ... this.state }/>
        break;
      case AppConstants.CONTENT:
        elem =
          <div>
            <Header { ... this.state } />
            <Content { ... this.state } />
          </div>
        break;
    }
    return (
      <div>
        {elem}
      </div>
    );
  }

});

React.render(
  <App />,
  document.getElementById('app')
);
