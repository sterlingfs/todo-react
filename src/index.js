import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import ActionCreators from './actions/action-creators';
import store from './store/store';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { bindAuthStateToStore } from './middleware/api';
import App from './containers/app';
import SignIn from './containers/sign-in';
import registerServiceWorker from './registerServiceWorker';

// Application lifecycle
store.dispatch(ActionCreators.applicationMount());
bindAuthStateToStore(store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/inbox' />
        <Route path='/sign_in' exact component={SignIn} />
        <Route path='/:category' exact component={App} />
        <Route path='*' render={ () => <span>401</span> } />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
