import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/rout_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import CollectionIndexContainer from './collections/collection_index_container';
import ProfilePageContainer from './profile/profile_page_container';
// import Iframe from 'react-iframe'

function iframeSelector() {
  if (process.env.ENV_NODE !== 'production') {
    // console.log(process.env.ENV_NODE);
    return <iframe className='iframe' title="unique" src="https://flex-reanimator.herokuapp.com/stars.html" height="100%" width="100%"></iframe>;
  } else {
    return <iframe className='iframe' title="unique" src="http://localhost:5000/stars.html" height="100%" width="100%"></iframe>;
  }
}

const App = () => (
  <div id="the-whole-enchilada">
    <div id="left-navbar-wrapper">
      <NavBarContainer />
      <Switch id="signin-switch">
        {/* <AuthRoute exact path = "/" component = {HomePage}/> */}
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/collections" component={CollectionIndexContainer} />
        <ProtectedRoute exact path="/profile-page" component={ProfilePageContainer} />
      </Switch>
    </div>
    {iframeSelector()}
  </div>
)

export default App;
