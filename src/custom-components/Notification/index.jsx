import { notification } from 'antd';

const Notification = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  });
};

export default Notification;
