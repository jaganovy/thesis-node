import React, { FC, useEffect, useState } from 'react';
import { Link,Outlet } from "react-router-dom";
import {
  UnorderedListOutlined,
  CalendarOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { 
  Descriptions,
  Breadcrumb, 
  Layout, 
  Menu,
  PageHeader,
  Button,
  Avatar
} from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate,useLocation } from "react-router-dom";
// import { Button } from 'antd';

import { fetchEvents } from './api';
import { getEvents } from './actions/events';
import './App.css';


const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Lista wydarzeń', '1', <UnorderedListOutlined />),
  getItem('Kalendarz', '2', <CalendarOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];



const CompetitionList = (  ) => {
  const [activeMenu, setActiveMenu] = useState(null)
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();




  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={activeMenu} mode="inline">


               <Menu.SubMenu 
               key="1"
               title={'Moje zawody'}
               icon={<UnorderedListOutlined />}
               onClick={() => navigate('/app/dashboard')}
               >
                <Menu.Item>Aktualne zawody</Menu.Item>
                <Menu.Item>Nadchodzące zawody</Menu.Item>
                <Menu.Item>Ukończone zawody</Menu.Item>
               
              </Menu.SubMenu>
            <Menu.Item
               key="2"
               title={'Kalendarz'}
               icon={<CalendarOutlined />}
               onClick={() => navigate('/app/calendar')}
               >
                   Kalendarz
               </Menu.Item>


        </Menu>
      </Sider>
      
      <Layout className="site-layout">
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          title="Moje zawody"
          extra={[
            <Avatar icon={<UserOutlined />} />,
          ]}
        >
          
        </PageHeader>
      </div>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {/* <Link to="/dashboard">dashboard</Link> */}
              <Outlet />
              
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
  );
};

export default CompetitionList;




