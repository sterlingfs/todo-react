import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ActionCreators from '../actions/action-creators';
import { fetch } from '../middleware/api';

import { AppBar } from '../components/app-bar';
import './app.css';

class App extends React.Component {
  componentDidMount() {
    if (this.props.uid) {
      let { uid, category } = this.props;
      fetch(uid, category, data => { this.props.tasks = data });
    } else {
      // this.props.history.push('/sign_in')
    }
  }
  render() {
    return (
      <main className="App">
        <AppBar />
        <button onClick='' >TRIGGER</button>
      </main>
    );
  }
}

function mapStateToProps(state, props) {
  let category = props.match.params.category;
  return { category: props.match.params.category, uid: state.auth.uid };
}
function mapDispatchToProps(dispatch, props) {
  return bindActionCreators({}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
