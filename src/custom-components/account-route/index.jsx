import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const AccountRoute = ({ label1, text, route }) => (
  <Row>
    <Col md={24} xs={24}>
      <h4 className="account-label">
        {label1}
        <Link to={route} className="account-link">
          &nbsp;&nbsp;
          {text}
        </Link>
      </h4>
    </Col>
  </Row>
);
AccountRoute.propTypes = {
  label1: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};
export default AccountRoute;
