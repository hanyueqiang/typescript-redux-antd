import React, { FC, useState, useEffect } from 'react'
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Logo from '@/assets/images/react.png'
import styles from './index.less'

const { Header, Sider, Content } = Layout;

interface SelectProps {
  key: string
}

const Index: FC = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const location = useLocation()
  const toggle = () => {
    setCollapsed(!collapsed)
  };

  useEffect(() => {
    const path = location.pathname
    setSelectedKeys([path])
  }, [])

  const onSelectHandle = ({ key }: SelectProps) => {
    setSelectedKeys([key])
  }

    return (
      <Layout className={styles.container}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className={styles.logo}>
            <img src={Logo} alt="" height="30" />
            {!collapsed && <span className={styles.logo_title}>My App</span>}
          </div>
          <Menu theme="dark" mode="inline" selectedKeys={selectedKeys} onSelect={onSelectHandle}>
            <Menu.Item key="/virtual" icon={<UserOutlined />}>
              <Link to='/virtual'>虚拟列表</Link>
            </Menu.Item>
            <Menu.Item key="/cssDemo" icon={<VideoCameraOutlined />}>
              <Link to='/cssDemo'>nav2</Link>
            </Menu.Item>
            <Menu.Item key="/antdDemo" icon={<UploadOutlined />}>
              <Link to='/antdDemo'>nav3</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.container_site}>
          <Header className={styles.container_site_header}>
            <span onClick={toggle} className={styles.container_site_collapse}>
              {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            </span>
          </Header>
          <Content className={styles.container_content}>
            {props.children}
          </Content>
        </Layout>
      </Layout>
    );
}
export default Index

