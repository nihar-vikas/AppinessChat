import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { AuthProvider } from './context/auth-context/authContext';
import Login from './components/login';
import SignUp from './components/signup';
import HomePage from './components/homePage';
import Chat from './components/chat';
import ForgetPassword from './components/forgetPassword';
import PageNotFound from './components/pageNotFound';

const App = () => (
  <div>
    <Row>
      <Col md={24} xs={24}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/forget-password" exact component={ForgetPassword} />
              <Route path="/chat" exact component={Chat} />
              <Route path="**" exact component={PageNotFound} />
            </Switch>
          </AuthProvider>
        </Router>
      </Col>
    </Row>
  </div>
);

export default App;
