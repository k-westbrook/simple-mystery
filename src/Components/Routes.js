import { Route, Switch } from 'react-router-dom'
import React from 'react';
import HomePage from './HomePage'
import LoginPage from './LogIn';
import RegisterPage from './Register';
import MainDashboard from './MainDashboard';
import { connect } from 'react-redux';
import { loginUserThunk } from '../Store/User';
import Cookies from 'universal-cookie'
import EventsContainer from './EventsContainer';
import AddEvent from './AddEvent';
import SingleEventPage from './SingleEventPage'

class Routes extends React.Component {

  componentDidMount() {
    let cookies = new Cookies();
    if (cookies.get('authentication') === 'true') {
      let email = cookies.get('email');
      let password = cookies.get('password');
      this.props.authenticate(email, password);
    }
  }


  render() {

    return (
      <div>
        <Switch>
          {(this.props.user.registered) ?
            <Switch>
              <Route path="/mydash" component={MainDashboard} />
              <Route path="/myeats" component={EventsContainer} />
              <Route path="/addeat" component={AddEvent} />
              <Route path="/eat/:event_id" component={SingleEventPage} />
              <Route component={MainDashboard} />
            </Switch>
            :
            <Switch>
              <Route path="/homepage" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route component={HomePage} />
            </Switch>
          }

        </Switch>

      </div>
    )

  }
}
const mapState = state => {
  return {
    user: state.user,
    event: state.event
  }
}
const mapDispatch = dispatch => {
  return {
    authenticate: (email, password) => dispatch(loginUserThunk(email, password))
  }
}


export default connect(mapState, mapDispatch)(Routes)
