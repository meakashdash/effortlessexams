import React from 'react'
import './Math4.css';
// import { Card } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    FireTwoTone
  } from '@ant-design/icons';
  import Logo from '../../Images/LOGO2 (2).gif'
  import { Link} from "react-router-dom";
  import { Layout, Menu, theme } from 'antd';
  import { useState } from 'react';
  import {  Table } from 'antd';
  
  const { Header, Sider, Content } = Layout;
  // const { Meta } = Card;
  
  const columns = [
      {
        title: 'Years',
        dataIndex: 'years',
        key: 'Years',
      //   render: (text) => <>{text}</>,
      },
      {
        title: 'Question Paper',
        dataIndex: 'links',
        key: 'Question Paper',
        render: (data) => <a href={data}>Digital Signal Processing</a>,
      },
      {
        title: 'Answers',
        dataIndex: 'ans',
        key: 'Answers',
        render: (text) => <a href={text}>Solution</a>,
      },
    ];
    const data = [
      {
        years: '2020-21',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1M5kxwLvkjhidcqMgHfwrAXyuhKkCuRfo/view?usp=sharing',
        ans:'https://docs.google.com/document/d/19bT10mdZKy36kauZaReo2zJENGRYt8O9tQg_wtNknWA/edit?usp=sharing'
      },
      {
        years: '2021-22 Repeat',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1WayWc3tt_MuCrdJkjzfkXTE38ZrqhtcT/view?usp=sharing',
        ans:'https://docs.google.com/document/d/1ElwY28BR--HsBRsNCFyzBvEJFZOTZ7r1htFD7jIkqIc/edit?usp=sharing'
      },
      {
        years: '2021-22',
        qpaper: 'Computer Programming',
        answers: 'Solution',
        links:'https://drive.google.com/file/d/1ycCVPMxarY-V-rvZjtm0AZfg0oQ4oN-U/view?usp=sharing',
        ans:'https://docs.google.com/document/d/17hRZVrd4jg1cVWn4pUd6Vx43BJyyDs4FKL8FUPhaSBI/edit?usp=sharing'
      }
    ];
function Digsignal() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
  return (
    <Layout  >
    <Sider trigger={null} collapsible collapsed={collapsed}>
    <Link to='/' style={{}}>
                <div className="logo" style={{height:80,width:170}}>
                    <img src={Logo} alt="" style={{height:100,width:195,position:'absolute',left:0,top:5,borderRadius:15}}/>
                </div>
        </Link>
    <Menu
        theme="dark"
        mode="inline"
        // defaultSelectedKeys={['1']}
        items={[
          {
          key: '1',
          icon: <UserOutlined />,
          label:(
              <Link to='https://surveyheart.com/form/640b8371c803e1092adf4ba1'>
                Feedback
              </Link>
              
            ), 
          },
          {
          key: '2',
          icon: <FireTwoTone />,
          label: (
              <Link to='/about'>
                About Us
              </Link>
              
            ),
          }
         
      ]}
    />
    </Sider>
    <Layout className="site-layout">
    <Header
        style={{
        padding: 0,
        background: colorBgContainer,
        }}
    >
        {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
        })} */}
    </Header>
    <Content
        style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 680,
        background: colorBgContainer,
        }}
    >
        <Table columns={columns} dataSource={data} />
        {/* <Table columns={columns} dataSource={data} /> */}
    </Content>
    </Layout>
    </Layout>
  )
}

export default Digsignal