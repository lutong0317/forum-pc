import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import styles from './index.module.scss'
import { Route, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '@/store/actions'

import Home from '../Home'
import Article from '../Article'
import Publish from '../Publish'

const { Header, Sider } = Layout

const GeekLayout = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { name } = useSelector(state => state.user)
  useEffect(() => {
    try {
      dispatch(getUserInfo())
    } catch (e) {

    }
  }, [dispatch])
  return (
    <Layout className={styles.root}>
      <Header className="header">
        <div className="logo" />

        <div className="user-info">
          <span className="user-name">{name}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={[location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item icon={<HomeOutlined />} key="/home">
              <Link to='/home'>数据概览</Link>
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="/home/article">
              <Link to='/home/article'>内容管理</Link>
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="/home/Publish">
              <Link to='/home/Publish'>发布文章</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Route exact path="/home" component={Home}></Route>
          <Route path="/home/article" component={Article}></Route>
          <Route path="/home/publish/:articleId?" component={Publish}></Route>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default GeekLayout