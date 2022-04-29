// 导入antd组件库组件
import { Card, Form, Input, Button, Checkbox, message } from 'antd'
import logo from '../../assets/logo.png'
import { useDispatch } from 'react-redux'
import { login } from '@/store/actions'
import { useHistory, useLocation } from 'react-router-dom'
import styles from './index.module.scss'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  // 表单提交
  const onFinish = async values => {
    try {
      // 将需要的参数传给login action
      await dispatch(login({ mobile: values.mobile, code: values.code }))

      // 成功提示：
      message.success('登陆成功', 1.5, () => {
        // 登陆成功后 跳转到首页
        // 如果是重定向到的login页面，就直接返回原来访问的页面
        // 如果不是，就说明直接访问的登录页面，此时，默认进入home即可
        history.replace(location.state?.from ?? '/home')
      })
    } catch (e) {
      if (!e.response) {
        message.warning('网络繁忙，请稍后再试')
      } else {
        message.warning(e.response?.data?.message || '好像出错了~')
      }
    }
  }

  return (
    <div className={styles.root}>
      <Card className='login-container'>
        <img className='login-logo' src={logo} alt='' />
        <Form
          name="basic"
          initialValues={{ remember: true, mobile: '13911111111', code: '246810' }}
          onFinish={onFinish}
        >
          <Form.Item
            name="mobile"
            rules={[{ pattern: /^1[3-9]\d{9}$/, message: '手机号码格式不对', validateTrigger: 'onBlur' }, { required: true, message: '请输入手机号' }]}
          >
            <Input maxLength={11} size="large" placeholder='请输入手机号' />
          </Form.Item>

          <Form.Item
            name="code"
            rules={[{ required: true, message: '请输入验证码' }, { len: 6, message: '验证码6个字符', validateTrigger: 'onBlur' }]}>
            <Input size="large" placeholder="请输入验证码" maxLength={6} />
          </Form.Item>
          {/* Form.Item 默认操作的是 value 属性，所以，如果 Form.Item 的子节点的值不是 value ，就需要设置为它自己的值比如，Checkbox 组件操作的是 checked，因此，需要将 valuePropName 设置为 "checked" */}
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox> 我已阅读并同意「用户协议」和「隐私条款」</Checkbox>
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div >
  )
}
export default Login