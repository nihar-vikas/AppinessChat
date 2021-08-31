import React from 'react';
import { Row, Col, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import Logo from '../../assets/appinesslogo.png';
import './style.css';
import { logout } from '../../firebase';
import { useAuth } from '../../context/auth-context/authContext';

const Headder = () => {
  const { users } = useAuth();
  const handleLogOut = () => {
    window.location = '/';
    logout();
  };
  return (
    <>
      <Row>
        <Col md={24} xs={24}>
          <Row className="headder-main-div" align="middle" justify="space-between">
            <Col md={12} xs={12}><img src={Logo} alt="Logo" loading="lazy" className="headder-logo" /></Col>
            {users ? (
              <Col md={12} xs={12} style={{ textAlign: 'right' }}>
                <Button type="text" onClick={handleLogOut}>
                  <Row align="middle">
                    Logout&nbsp;
                    <LogoutOutlined />
                  </Row>
                </Button>
              </Col>
            ) : ''}
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Headder;
