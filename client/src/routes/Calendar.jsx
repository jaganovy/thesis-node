import React, { FC, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Badge } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Space, Table, Tag } from 'antd';
import { Calendar } from 'antd';

const getListData = (value) => {
  let listData;

  switch (value.date()) {
    case 5:
      listData = [

        {
          type: 'success',
          content: 'Nurkowanie głębinowe',
        },
      ];
      break;
    case 3:
      listData = [
       
        {
          type: 'success',
          content: 'Akrobacje narciarskie',
        },
      ];
      break;
    case 8:
      listData = [
        {
          type: 'success',
          content: 'Zjazd linowy',
        },
      ];
      break;

    case 10:
      listData = [

        {
          type: 'success',
          content: 'Zawody redbull motocross',
        },

      ];
      break;

    case 15:
      listData = [
        {
          type: 'error',
          content: 'Zawody redbull motocross',
        },
        {
          type: 'success',
          content: 'Wydarzenie downhill',
        },

      ];
      break;

    default:
  }

  return listData || [];
};

const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};


const CalendarApp = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  const onChange = (val) => {
    console.log(val);
  };

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  

  return <Calendar
  dateCellRender={dateCellRender} 
  monthCellRender={monthCellRender}

  onChange={onChange}
  onPanelChange={onPanelChange} />;
};

export default CalendarApp;