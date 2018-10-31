import React, { Component, createRef } from 'react';
import { func } from 'prop-types';
import { pick, get } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextInput from './TextInput';
import Button from './Button';
import { chatActions } from '../actions';
import '../stylesheets/UserIdentify.css';

class UserIdentifyComponent extends Component {
  static propTypes = {
    setUserAction: func.isRequired,
  }

  constructor(props) {
    super(props);
    this.user = createRef();
  }

  onHandleSubmit = (el) => {
    el.preventDefault();
    const value = get(this.user, 'current.value', '');
    const { setUserAction } = this.props;
    return setUserAction(value);
  }

  render() {
    return (
      <div className="user-identify">
        <form onSubmit={el => this.onHandleSubmit(el)}>
          <TextInput ref={this.user} required type="text" placeholder="Your name" />
          <Button type="submit" name="Enter" />
        </form>
      </div>
    );
  }
}

const actions = pick(chatActions, [
  'setUserAction',
]);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const UserIdentify = connect(null, mapDispatchToProps)(UserIdentifyComponent);

export default UserIdentify;
