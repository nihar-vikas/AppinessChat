import React from 'react';
import { Row, Col, Button } from 'antd';
import './style.scss';
import { useHistory } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Logo from '../../assets/404.png';
import Headder from '../headder';

const PageNotFound = () => {
  const history = useHistory();
  return (
    <Row>
      <Col md={24} xs={24}>
        <Headder />
      </Col>
      <Col md={24} xs={24} className="page-not-found-main-div">
        <Row>
          <Col md={6} xs={2} />
          <Col md={12} xs={2}>
            <Row align="middle" justify="center" className="page-not-found-div">
              <Col md={24} xs={24} className="page-not-found-cell">
                <img src={Logo} alt="logo" />
              </Col>
              <Col md={24} xs={24} className="page-not-found-cell">
                <h4 className="page-not-found-label">404</h4>
              </Col>
              <Col md={24} xs={24} className="page-not-found-cell">
                <h4 className="page-not-found-text">
                  Looks like you’ve traveled too far.
                  This page does not exist.
                </h4>
              </Col>
              <Col md={24} xs={24} className="page-not-found-cell">
                <Button
                  className="page-not-back-button"
                  onClick={(e) => {
                    e.preventDefault();
                    history.push('/');
                  }}
                >
                  <Row align="middle" justify="space-around">
                    <ArrowLeftOutlined />
                    Back To Home
                  </Row>
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={6} xs={2} />
        </Row>
      </Col>
    </Row>
  );
};
export default PageNotFound;
