import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Headder from '../headder';
import './style.css';

const HomePage = () => {
  const history = useHistory();
  return (
    <Row>
      <Col md={24} xs={24}>
        <Headder />
      </Col>
      <Col md={24} xs={24} align="center" className="main-body">
        <Row style={{ textAlign: 'center', marginTop: '10rem' }}>
          <Col md={24} xs={24}>
            <h2 className="langing-page-heading">Welcome to Appiness Chat</h2>
          </Col>
          <Col md={24} xs={24} style={{ marginTop: '2rem' }}>
            <Button
              className="login-btn"
              onClick={(e) => {
                e.preventDefault();
                history.push('/login');
              }}
            >
              Continue With Login&nbsp;
              <ArrowRightOutlined />
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default HomePage;
