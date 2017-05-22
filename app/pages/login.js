import React, { Component } from 'react'
import LoginForm from '../components/login-form'

export default class Login extends Component {
  render () {
    return (
      <div className='container-fluid row no-gutters justify-content-center'>
        <div className='login-wrap invert col-md-4 align-self-center'>
          <img className='logo' src='data:image/png;base64,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' />
          <h1 className='col-12'>WebChat</h1>
          <LoginForm />
        </div>
      </div>
    )
  }
}
