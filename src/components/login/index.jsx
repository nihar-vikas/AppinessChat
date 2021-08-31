import React, { useState } from 'react';
import {
  Row, Col, Input, Button,
} from 'antd';
import './style.css';
import { Link } from 'react-router-dom';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import Headder from '../headder';
import SocialLogin from '../socialLogin';
import Notification from '../../custom-components/Notification';
import { auth } from '../../firebase';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userName) {
      Notification('warning', 'Please Enter UserName');
      return;
    }
    if (!password) {
      Notification('warning', 'Please Enter Password');
      return;
    }
    setLoading(true);
    try {
      await auth.signInWithEmailAndPassword(userName, password);
      Notification('success', 'Successfully logged in', '');
      setUserName('');
      setPassword('');
    } catch (err) {
      Notification('error', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Row>
        <Col md={24} xs={24}>
          <Headder />
        </Col>
        <Col md={24} xs={24} align="middle" className="login-main-body">
          <Row>
            <Col md={6} xs={2} />
            <Col md={12} xs={20}>
              <Row className="login-card">
                <Col md={24} xs={24}>
                  <h6 className="login-heading">Login</h6>
                  <Row>
                    <Col md={24} xs={24}>
                      <Row justify="start">
                        <Col md={24} xs={24} className="sign-in-input-div">
                          <h5 htmlFor="username" className="label">Username</h5>
                          <Input onPressEnter={handleLogin} placeholder="Enter your username" className="inputfield" prefix={<MailOutlined />} value={userName} onChange={(e) => setUserName(e.target.value.trimLeft())} name="username" type="email" id="username" required />
                        </Col>
                        <Col md={24} xs={24} className="sign-in-input-div">
                          <h5 htmlFor="password" className="label">Password</h5>
                          <Input.Password onPressEnter={handleLogin} placeholder="Enter your password" className="inputfield" prefix={<LockOutlined />} value={password} onChange={(e) => setPassword(e.target.value.trimLeft())} name="password" type="password" id="password" required />
                        </Col>
                        <Col md={24} xs={24} className="sign-in-input-div" style={{ marginTop: '10px' }}>
                          <Button loading={loading} type="primary" className="signin-button" onClick={handleLogin}>Login</Button>
                        </Col>
                        <Col md={24} xs={24} className="sign-in-input-div" style={{ textAlign: 'right' }}>
                          <Link to="/forget-password" className="forgetPasswordLink">Forgot Password ?</Link>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col md={24} xs={24}>
                  <SocialLogin type="Login" />
                </Col>
                <Col md={24} xs={24} style={{ marginTop: '2rem' }}>
                  <h4 className="accountlabel">
                    Don&apos;t have an account ?
                    <Link to="/signup" className="accountLink">&nbsp;&nbsp;Sign up</Link>
                  </h4>
                </Col>
              </Row>
            </Col>
            <Col md={6} xs={2} />
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Login;
