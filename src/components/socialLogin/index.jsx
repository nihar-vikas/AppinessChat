import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Button, Divider,
} from 'antd';
import './style.scss';
import { signInWithGoogle } from '../../firebase';

const SocialLogin = ({ type }) => (
  <Row>
    <Col md={24} xs={24}>
      <Divider style={{ color: 'white' }}>Or</Divider>
    </Col>
    <Col md={24} xs={24}>
      <Row align="middle">
        <Col md={12} xs={24} align="center" className="social-login-btn-div">
          <Button
            className="google-btn"
            type="primary"
            onClick={() => signInWithGoogle('google')}
          >
            <Row align="middle" justify="start">
              <img alt="logo" src="https://img.icons8.com/fluency/28/000000/google-logo.svg" />
              <span className="social-login-btn-text">
                {type}
                {' '}
                with Google
              </span>
            </Row>
          </Button>
        </Col>
        <Col md={12} xs={24} align="center" className="social-login-btn-div">
          <Button
            className="facebook-btn"
            type="primary"
            onClick={() => signInWithGoogle('facebook')}
          >
            <Row align="middle" justify="start">
              <img alt="logo" src="https://img.icons8.com/color/28/000000/facebook-new.svg" />
              <span className="social-login-btn-text">
                {type}
                {' '}
                with Facebook
              </span>
            </Row>
          </Button>
        </Col>
      </Row>
    </Col>
  </Row>
);
SocialLogin.propTypes = {
  type: PropTypes.string.isRequired,
};
export default SocialLogin;
