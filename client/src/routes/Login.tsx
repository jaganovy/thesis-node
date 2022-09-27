import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React, {useEffect} from 'react';
import { Link, Navigate } from 'react-router-dom';

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  useEffect(() => {
    document.title = 'Login page';
  }, []);

  return (
    <div className="login_body">
        <div className='login_form_container'>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Pole z nazwą użytkownika nie może być puste!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nazwa użytkownika" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Pole z hasłem nie może być puste!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Hasło"
              />
            </Form.Item>



           
              

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Zaloguj
              </Button>
              <p className='or_title'>Lub</p>
              <Link to="/register" className='register_link'>
                  Zarejestruj się!
              </Link>
            </Form.Item>
          </Form>
        
        </div>
    </div>
  );
};

export default Login;