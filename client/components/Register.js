import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Register extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    const { registerUser } = this.props.authActions;
    const username = this.refs.username;
    const password = this.refs.password;
    const email = this.refs.email;
    const userInfo = {
      username: username.value,
      password: password.value,
      email: email.value
    };

    registerUser(userInfo);

    username.value = '';
    password.value = '';
    email.value = '';
  }

  render(){
    let errorMsg = this.props.errorMessage.message ? (
      <p>
        Sorry, this username has been taken. Please try another one.
      </p>) : null;

    return(
      <Modal show={this.props.showRegisterModal} onHide={this.props.closeRegister}>
        <Modal.Header closeButton>
          <Modal.Title>
            Register
          </Modal.Title>
          <Modal.Body>
            <form>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Username'
                  ref='username' />
              </div>
              {errorMsg}
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Password'
                  ref='password' />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  ref='email' />
              </div>
              <div className='form-group'>
                <button
                  type='submit'
                  className='btn btn-block'
                  onClick={this.handleClick}>Register
                </button>
                <div>
                  Have an account? Click <a>here</a> to log in.
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    )
  }
}

export default Register;