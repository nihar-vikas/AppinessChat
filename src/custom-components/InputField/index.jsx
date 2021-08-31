import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

const InputField = ({
  value, onChange, type, label, id,
}) => (
  <Row>
    <Col md={24} xs={24} className="inputFiledDiv">
      <input className="inputfield" value={value} onChange={onChange} name={id} type={type} id={id} required />
      <label className="inputlabel" htmlFor={id}>{label}</label>
    </Col>
  </Row>
);

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default InputField;
