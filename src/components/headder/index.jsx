import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Row, Col, Button, Dropdown, Avatar, Menu,
} from 'antd';
import { LogoutOutlined, UserOutlined, CaretDownFilled } from '@ant-design/icons';
import Logo from '../../assets/appinesslogo.png';
import './style.scss';
import { logout } from '../../firebase';
import { useAuth } from '../../context/auth-context/authContext';

const Headder = () => {
  const { users } = useAuth();
  const history = useHistory();
  const handleLogOut = () => {
    history.push('/');
    logout();
  };

  const menu = (
    <Row style={{ width: '100%', display: 'flex', border: '1px solid #ccc' }}>
      <Col md={24} xs={24}>
        <Menu style={{ minWidth: 'auto', textAlign: 'center' }}>
          <Menu.Item onClick={handleLogOut} style={{ margin: '0px !important', padding: '0px !important' }}>
            <Button type="link" onClick={handleLogOut} className="logout-btn">
              <Row align="middle">
                Logout&nbsp;
                <LogoutOutlined />
              </Row>
            </Button>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );

  return (
    <>
      <Row>
        <Col md={24} xs={24}>
          <Row className="headder-main-div" align="middle" style={{ padding: '0 5px' }}>
            <Col md={6} xs={10} onClick={() => history.push('/')}><img src={Logo} alt="Logo" loading="lazy" className="headder-logo" /></Col>
            {users ? (
              <Col md={18} xs={14} style={{ textAlign: 'end' }}>
                <Dropdown overlay={menu} placement="bottomRight" trigger={['click']} style={{ marginBottom: '7px' }}>
                  <Button type="link" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                    <Row align="middle" justify="space-around">
                      <Avatar style={{ backgroundColor: '#87d068' }} size="small" icon={<UserOutlined />} />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span style={{
                        color: '#00346a', textTransform: 'capitalize', fontSize: 12, fontWeight: 'bold',
                      }}
                      >
                        {users?.displayName || users?.email || ''}
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <CaretDownFilled style={{ color: '#2A5583' }} />
                    </Row>
                  </Button>
                </Dropdown>
              </Col>
            ) : ''}
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Headder;
