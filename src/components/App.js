import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import ChatBox from './ChatBox';
import UserIdentify from './UserIdentify';
import '../stylesheets/App.css';

const AppComponent = ({ user }) => (
  <div className="app">
    {
      user
        ? <ChatBox />
        : <UserIdentify />
    }
  </div>
);

AppComponent.propTypes = {
  user: string,
};

AppComponent.defaultProps = {
  user: null,
};

const mapStateToProps = ({ chatReducer }) => ({
  user: chatReducer.user,
});

const App = connect(mapStateToProps, null)(AppComponent);
export default App;
