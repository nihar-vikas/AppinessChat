import React, { useState } from 'react';
import {
  Row, Col, Button, Input,
} from 'antd';
import './style.css';
import { Link } from 'react-router-dom';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import Headder from '../headder';
import SocialLogin from '../socialLogin';
import Notification from '../../custom-components/Notification';
import { auth, db } from '../../firebase';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!name) {
      Notification('warning', 'You missed to enter your name');
      return;
    }
    if (!email) {
      Notification('warning', 'You missed to enter your Email Address');
      return;
    }
    if (!password) {
      Notification('warning', 'You missed to enter Password');
      return;
    }
    setLoading(true);
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const { user } = res;
      await db.collection('users').add({
        uid: user.uid,
        name,
        authProvider: 'local',
        email,
      });
      setEmail('');
      setPassword('');
      setName('');
      Notification('success', 'Successfully Registered', '');
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
                  <h6 className="login-heading">Sign Up</h6>
                  <Row>
                    <Col md={24} xs={24}>
                      <Row justify="start">
                        <Col md={24} xs={24} className="sign-in-input-div">
                          <h5 htmlFor="Name" className="label">Name</h5>
                          <Input onPressEnter={handleSignUp} placeholder="Enter your name" className="inputfield" prefix={<UserOutlined />} value={name} onChange={(e) => setName(e.target.value.trimLeft())} name="name" type="text" id="name" required />
                        </Col>
                        <Col md={24} xs={24} className="sign-in-input-div">
                          <h5 htmlFor="email" className="label">Email Address</h5>
                          <Input onPressEnter={handleSignUp} placeholder="Enter your email address" className="inputfield" prefix={<MailOutlined />} value={email} onChange={(e) => setEmail(e.target.value.trimLeft())} name="email" type="email" id="email" required />
                        </Col>
                        <Col md={24} xs={24} className="sign-in-input-div">
                          <h5 htmlFor="password" className="label">Password</h5>
                          <Input.Password onPressEnter={handleSignUp} placeholder="Enter password" className="inputfield" prefix={<LockOutlined />} value={password} onChange={(e) => setPassword(e.target.value.trimLeft())} name="password" type="password" id="password" required />
                        </Col>
                        <Col md={24} xs={24} className="sign-in-input-div" style={{ marginTop: '10px' }}>
                          <Button loading={loading} type="primary" className="signin-button" onClick={handleSignUp}>Sign Up</Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col md={24} xs={24}>
                  <SocialLogin type="Sign Up" />
                </Col>
                <Col md={24} xs={24} style={{ marginTop: '2rem' }}>
                  <h4 className="accountlabel">
                    Already have an account ?
                    <Link to="/login" className="accountLink">&nbsp;&nbsp;Login</Link>
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

export default SignUp;