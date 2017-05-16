/**
 * @flow
 */

'use strict';

import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Login extends Component {
  constructor() {
    super();
    (this: any).response = this.response.bind(this);
  }
  response(data: any) {
    console.log('data', data);
    // call user actions
  }

  render() {
    return (
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.response}
      />
    );
  }
}
