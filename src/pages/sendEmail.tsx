import axios from 'axios';

const sendEmail = async (email: any, subject: any, message: any) => {
  return axios({
    method: 'post',
    url: '/api/send-mail',
    data: {
      email: email,
      subject: subject,
      message: message,
    },
  });
};

export default sendEmail;