import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React, {useEffect} from 'react';
import { Link, Navigate } from 'react-router-dom';

const Login: React.FC = () => {
  
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  useEffect(() => {
    document.title = 'Register page';
  }, []);

  return (
    <div className="register_body">
    
      <div className='login_form_container'>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Proszę podać nazwę użytkownika!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nazwa użytkownika"  className='input-form'/>
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Proszę podać email!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Proszę podać hasło!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Hasło"
            />
          </Form.Item>
          <Form.Item
            name="confirm_password"
            rules={[{ required: true, message: 'Proszę podać hasło!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Potwierdź hasło"
            />
          </Form.Item>


          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Zarejestruj
            </Button>
            <p className='or_title'>Lub</p>
            <Link to="/login" className='register_link'>
                Zaloguj się!
            </Link>
          </Form.Item>
        </Form>
      
      </div>
    </div>
  );
};

export default Login;