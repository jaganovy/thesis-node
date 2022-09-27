import React, { FC, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Space, Table, Tag } from 'antd';
import { Calendar } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Moment } from 'moment';


const CalendarApp: React.FC = () => {
  const onPanelChange = (value: Moment, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return <Calendar onPanelChange={onPanelChange} />;
};

export default CalendarApp;