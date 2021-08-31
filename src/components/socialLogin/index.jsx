import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Button, Divider,
} from 'antd';
import './style.css';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { signInWithGoogle } from '../../firebase';

const SocialLogin = ({ type }) => (
  <Row>
    <Col md={24} xs={24}>
      <Divider style={{ color: 'white' }}>Or</Divider>
    </Col>
    <Col md={24} xs={24}>
      <Row align="middle">
        <Col md={12} xs={24} align="center" style={{ padding: '10px 0px' }}>
          <Button
            className="google-btn"
            type="primary"
            onClick={() => signInWithGoogle('google')}
          >
            <Row align="middle" justify="space-around">
              <GoogleOutlined />
              {type}
              {' '}
              with Google
            </Row>
          </Button>
        </Col>
        <Col md={12} xs={24} align="center" style={{ padding: '10px 0px' }}>
          <Button
            className="facebook-btn"
            type="primary"
            onClick={() => signInWithGoogle('facebook')}
          >
            <Row align="middle" justify="space-around">
              <FacebookOutlined />
              {type}
              {' '}
              with Facebook
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
