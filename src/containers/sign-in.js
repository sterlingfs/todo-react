import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ActionCreators from '../actions/action-creators';
import './sign-in.css';

class SignIn extends React.Component {
  componentDidMount() {
    console.log(this.props)
    if (this.props.uid) {
      this.props.history.push('/inbox');
    } 
  }
  componentWillUpdate(props) {
    console.log(props)
    if (props.uid) {
      props.history.push('/inbox');
    } 
  }
  render() {
    return (
      <main className='main'>
        <div className='container'>
          <div>
            <h2>Sterling Task</h2>
            <h5>Sign-in to sync your data <span>to the cloud</span></h5>
          </div>
          <button className='signin-btn provider-btn' onClick={this.props.googleSignIn}>google</button>
          <div className='seperator'>
            <div /><span>or</span><div />
          </div>
          <input className='signin-input' type='text' placeholder='email address' onChange={ this.props.email } />
          <input className='signin-input' type='password' placeholder='password' />
          <button className='signin-btn' onClick={this.props.emailSignIn} >sign-in</button>
          <div className='demo-info'>
            <div>username: demo</div>
            <div>password: password1</div>
          </div>
        </div>
      </main>
    )
  }

}

function mapStateToProps(state) {
  return { uid: state.auth.uid };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    googleSignIn: ActionCreators.googleSignIn,
    emailSignIn: ActionCreators.emailSignIn
  }, dispatch);
}

export default SignIn = withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
