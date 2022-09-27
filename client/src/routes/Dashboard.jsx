import React, { FC, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import moment from "moment";
import { Modal,Breadcrumb, Layout, Menu,Button,Descriptions,Radio   } from 'antd';
import { 
  Select,
  DatePicker,
  Card, Col, Row,
  Space, Table, Tag } from 'antd';
  import {  Form, Input, InputNumber } from 'antd';
  import { useSelector,useDispatch } from 'react-redux';
  import { UploadOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
  
  import { fetchEvents } from '../api'
  const { Meta } = Card;
  
  const { Option } = Select;
  
  const { RangePicker } = DatePicker;
  const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];





const columnsCompetitionInfo = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,

  },
  {
    title: 'Gender',
    dataIndex: 'gender',

  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];


const CompetitionInfoModal = ({competitionItem}) => {
  const [visible, setVisible] = useState(false);
  
  const [confirmLoading, setConfirmLoading] = useState(false);
 const [filterCompetitionForm] = Form.useForm()
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
   
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };

  return (
    <>


      <Card
        onClick={showModal}
              hoverable
              style={{
                width: 'auto',
              }}
              cover={
              <img 
              // style={{width: '420px'}}
              alt="example" 
              src={competitionItem.image} 
              />
            }
            >
              <Meta title={competitionItem.title} 
               />
              <p>Data: {competitionItem.date}</p>
              <p>Miejsce: {competitionItem.location}</p>
       </Card>
      <Modal
        centered={true}
        title="Szczegóły zawodów"
        visible={visible}
        onOk={handleOk}
        footer={
          <Button type='primary'>
            Zamknij
          </Button>
        }
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >

          {/* <Card
                hoverable
                style={{
                  width: 'auto',
                }}
                cover={
                <img 
                // style={{width: '420px'}}
                alt="example" src={competitionItem.image} />
              }
              >
                <Meta title={competitionItem.title} description={competitionItem.description} />
            </Card> */}



                 <Descriptions
                 column={1}
                  bordered
                  layout='horizontal'
                
                  size={'middle'}

                >
        <Descriptions.Item label="Nazwa zawodów">Zawody w jak najkrótszym dopłynięciu do dna basenu i powrotu na powierzchnię</Descriptions.Item>
        <Descriptions.Item label="Kategoria">Nurkowanie głębinowe</Descriptions.Item>
        <Descriptions.Item label="Data">20-09-2022</Descriptions.Item>
        <Descriptions.Item label="Godzina">10:00</Descriptions.Item>
        <Descriptions.Item label="Miejsce">Mszczynów</Descriptions.Item>
    
        <Descriptions.Item label="Opis">
          basen nurkowy 45m, wpisowe 200zł 
        </Descriptions.Item>
      </Descriptions>

      </Modal>
    </>
  );
};



const Dashboard = () => {
  const [eventsList, setEvents] = useState([
    {
      image: 'https://cdn.statically.io/img/awe365.com/wp-content/uploads/2017/07/Guide-to-the-best-Malaysian-scuba-diving-in-Sipadan-Flickr-CC-image-of-Barracuda-point-by-No-Dust.jpg?quality=100&f=auto',
      title: 'Nurkowanie głębinowe',
      description: 'Data:',
      date: '20-09-2022',
      location: 'Mszczynów'
    },
    {
      image: 'https://cdn.statically.io/img/awe365.com/wp-content/uploads/2013/07/types-of-extreme-sport-motorcross-Flickr-CC-image-by-Bernard-Spragg.-NZ-768x591.jpg?quality=100&f=auto',
      title: 'Zawody redbull motocross',
      description: 'desc',
      date: '23-09-2022',
      location: 'Bełchatów'
    },
    {
      image: 'https://mediap.flypgs.com/awh/1254/837//files/Ekstrem_Sporlar/dag-bisikleti-sporu-nedir.webp',
      title: 'Wydarzenie downhill',
      description: 'desc',
      date: '22-09-2022',
      location: 'Góra kamieńsk'

    },
    {
      image: 'https://cdn.britannica.com/73/116573-050-F05269D3/Aiko-Uemura-event-Freestyle-Skiing-Womens-Moguls-March-7-2008.jpg',
      title: 'Akrobacje narciarskie',
      description: 'desc',
      date: '26-09-2022',
      location: 'Zakopane'
    },
    {
      image: 'https://lp-cms-production.imgix.net/features/2013/06/shutterstockRF_486942373-d3cc8d5a1480.jpg?auto=format&q=40&w=870&dpr=2',
      title: 'Zjazd linowy',
      description: 'desc',
      date: '22-09-2022',
      location: 'Mszczynów'
    },
    {
      image: 'https://mediap.flypgs.com/awh/1254/836//files/Ekstrem_Sporlar/bungee-jumping-nedir.webp',
      title: 'Zawody bungee',
      date: '29-10-2022',
      description: 'desc',
      location: 'Zakopane'
    },
    

   
  ])
  
  const dispatch = useDispatch()
  const events = useSelector((state) => state.events)

  // console.log( fetchEvents )

  useEffect(() => {
    // fetchEvents().then(res => setEvents(res.data))
  },[])



  return (
    <>
      <div className='events_add_button'>
        <div>
          <AddNewSportEvent />
          <AddNewCategory />

        </div>
        <div>
          dzisiejsza data: {moment().format("DD-MM-YYYY")}
          <CompetitionsFilter />
        </div>
       
      </div>
      <div className="site-card-wrapper">
          <Row gutter={24}>
            {
              eventsList.map(item => (
                <Col span={8}>
                  <CompetitionInfoModal competitionItem={item}/>
                </Col>
              ))
            }
           
          </Row>
      </div>
     
    </>
  )
};



const CompetitionsFilter = () => {
  const [visible, setVisible] = useState(false);
  
  const [confirmLoading, setConfirmLoading] = useState(false);
 const [filterCompetitionForm] = Form.useForm()
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
   
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };

  return (
    <>

      <Button type="primary" onClick={showModal}>
       Filtruj
      </Button>
      <Modal
      centered={true}
        title="Filtruj zawody"
        visible={visible}
        onOk={handleOk}
        footer={
          <Button type='primary'>
            Filtruj zawody
          </Button>
        }
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
              <Form
              form={filterCompetitionForm}
              {...layout} name="nest-messages" >
                  
                  <Form.Item
                    name={"sport_category"}
                    label="Kategoria zawodów"
                   
                  >
                    
                    <Select
                      mode="multiple"
                      style={{
                        width: '100%',
                      }}
                      placeholder="select one country"
                     
                      optionLabelProp="label"
                    >
                       <Option value="ski-jumping">Skoki narciarskie</Option>
                        <Option value="Downhill">Heliboarding</Option>
                        <Option value="Kolarstwo górskie">Kolarstwo górskie</Option>
                        <Option value="Freerun">Freerun</Option>
                        <Option value="Wspinaczka lodowa">Wspinaczka lodowa</Option>
                        <Option value="Downhill">Downhill</Option>
                    </Select>
                    
                  </Form.Item>
                  
                  <Form.Item
                    name={'date'}
                    label="Data"
                    
                  >
                  </Form.Item>
                  <RangePicker />
                  <Form.Item
                    name={'date'}
                    label="Godzina"
                    
                  >
                    <DatePicker picker={'time'}  />
                  </Form.Item>
                  
                  
              </Form>
      </Modal>
    </>
  );
};


const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  beforeUpload: () => false,

  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadCont = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload tła</Button>
  </Upload>
);


const AddNewCategory = () => {
  const [visible, setVisible] = useState(false);
  
  const [confirmLoading, setConfirmLoading] = useState(false);
 const [addSportEventForm] = Form.useForm()
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
   
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };


 


  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };

  return (
    <>

      <Button style={{margin: '0 0 0 10px'}} type="primary" onClick={showModal}>
        Dodaj kategorię
      </Button>
      <Modal
      centered={true}
        title="Nowa kategoria"
        visible={visible}
        onOk={handleOk}
        footer={
          <Button type='primary'>
            Dodaj kategorię
          </Button>
        }
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
              <Form
              form={addSportEventForm}
              {...layout} 
              name="nest-messages" >
                <Form.Item
                    name={['user', 'name']}
                    label="Nazwa kategorii"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                        <Input />
                  
                  
                  </Form.Item>
                  <Form.Item
                    name={['user', 'name']}
                    label="Tło kategorii"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                        <UploadCont />
                  
                  
                  </Form.Item>
                  

                  
                 
                  
              </Form>
      </Modal>
    </>
  );
};

const AddNewSportEvent = () => {
  const [visible, setVisible] = useState(false);
  
  const [confirmLoading, setConfirmLoading] = useState(false);
 const [addSportEventForm] = Form.useForm()
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
   
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };

  return (
    <>

      <Button type="primary" onClick={showModal}>
        Dodaj zawody
      </Button>
      <Modal
      centered={true}
        title="Dodaj zawody"
        visible={visible}
        onOk={handleOk}
        footer={
          <Button type='primary'>
            Dodaj
          </Button>
        }
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
              <Form
              form={addSportEventForm}
              {...layout} name="nest-messages" >
                  <Form.Item
                    name={['user', 'name']}
                    label="Nazwa wydarzenia"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={"sport_category"}
                    label="Kategoria sportu"
                    rules={[
                      {
                        required: true,
                        type: 'string',
                        label: 'Wybierz kategorię sportu!'
                      },
                      
                    ]}
                  >
                    <Select
                        showSearch
                        style={{
                          width: '100%',
                        }}
                        placeholder="Wybierz kategorię"
                        optionFilterProp="children"
                        filterOption={(input, option) => option.children.includes(input)}
                        filterSort={(optionA, optionB) =>
                          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                      >
                        <Option value="1">Skoki narciarskie</Option>
                        <Option value="2">Heliboarding</Option>
                        <Option value="3">Kolarstwo górskie</Option>
                        <Option value="4">Freerun</Option>
                        <Option value="5">Wspinaczka lodowa</Option>
                        <Option value="6">Downhill</Option>
                      </Select>
                  </Form.Item>
                  
                  <Form.Item
                    name={'date'}
                    label="Data"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                  </Form.Item>
                  <RangePicker />
                  <Form.Item
                    name={'date'}
                    label="Godzina"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <DatePicker picker={'time'}  />
                  </Form.Item>
                  <Form.Item 
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  name={['user', 'website']} 
                  label="Miejsce">
                    <Input />
                  </Form.Item>
                  <Form.Item name={['user', 'introduction']} label="Opis">
                    <Input.TextArea />
                  </Form.Item>
                  
              </Form>
      </Modal>
    </>
  );
};

export default Dashboard;