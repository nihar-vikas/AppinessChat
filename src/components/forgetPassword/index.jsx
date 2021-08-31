import React, { useState } from 'react';
import {
  Row, Col, Input, Button,
} from 'antd';
import './style.css';
import { MailOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import Headder from '../headder';
import Notification from '../../custom-components/Notification';
import { auth } from '../../firebase';

const ForgetPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgetPassword = async () => {
    if (!email) {
      Notification('warning', 'Please Enter your email address', '');
      return;
    }
    setLoading(true);
    try {
      await auth.sendPasswordResetEmail(email);
      Notification('success', 'Password reset link sent to your email address!', '');
      setEmail('');
      history.push('/login');
    } catch (err) {
      Notification('error', err.message, '');
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
        <Col md={24} xs={24} align="middle" className="forget-main-body">
          <Row>
            <Col md={6} xs={2} />
            <Col md={12} xs={20}>
              <Row className="login-card">
                <Col md={24} xs={24}>
                  <h6 className="login-heading">Forget Password</h6>
                  <Row>
                    <Col md={24} xs={24}>
                      <Row justify="start">
                        <Col md={24} xs={24} className="sign-in-input-div">
                          <h5 htmlFor="Name" className="label">Email Address</h5>
                          <Input onPressEnter={handleForgetPassword} placeholder="Enter your registered email address" className="inputfield" prefix={<MailOutlined />} value={email} onChange={(e) => setEmail(e.target.value.trimLeft())} name="email" type="email" id="email" required />
                        </Col>
                        <Col md={24} xs={24} className="sign-in-input-div" style={{ marginTop: '10px' }}>
                          <Button loading={loading} type="primary" className="signin-button" onClick={handleForgetPassword}>Send React Password Link To Email</Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col md={24} xs={24} style={{ marginTop: '2rem' }}>
                  <h4 className="accountlabel">
                    I remember  the password
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

export default ForgetPassword;
