/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Skeleton } from 'antd';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';
import Headder from '../headder';
import { useAuth } from '../../context/auth-context/authContext';

const Chat = () => {
  const didMountRef = useRef(null);
  const { users } = useAuth();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], 'userPhoto.jpg', { type: 'image/jpeg' });
  };

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (!users || users === null) {
        history.push('/');
        return;
      }

      // Get-or-Create should be in a Firebase Function
      axios.get(
        'https://api.chatengine.io/users/me/',
        {
          headers: {
            'project-id': process.env.REACT_APP_CHAT_ENGINE_ID,
            'user-name': users.email,
            'user-secret': users.uid,
          },
        },
      )
        .then(() => {})
        .catch(() => {
          const formdata = new FormData();
          formdata.append('email', users.email);
          formdata.append('username', users.email);
          formdata.append('secret', users.uid);

          getFile(users.photoURL || 'https://lh3.googleusercontent.com/a/AATXAJxfpERYWa1CONOCXT-bdPDjqu6jolmSKngaxegU=s96-c')
            .then((avatar) => {
              formdata.append('avatar', avatar, avatar.name);
              axios.post(
                'https://api.chatengine.io/users/',
                formdata,
                { headers: { 'private-key': process.env.REACT_APP_CHAT_ENGINE_KEY } },
              )
                .then(() => {})
                .catch((e) => console.log(e, e.response))
                .finally(() => setLoading(false));
            });
        })
        .finally(() => { setLoading(false); });
    }
  }, [users, history]);

  return (
    <>
      {!users || loading ? <Skeleton /> : (
        <Row>
          <Col md={24} xs={24}>
            <Headder />
          </Col>
          <Col md={24} xs={24}>
            <ChatEngine
              height="calc(100vh - 66px)"
              projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
              userName={users.email}
              userSecret={users.uid}
            />
          </Col>
        </Row>
      )}
    </>
  );
};
export default Chat;
