// 导入路由
import { BrowserRouter as Router, Route, Switch, Redirect } from
  'react-router-dom'
import './App.css'
// 导入页面组件
import Login from './pages/Login'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
import { AuthRoute } from '@/components/AuthRoute'

function App () {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <AuthRoute path="/home" component={Layout}></AuthRoute>
          <Route path="/login" component={Login}></Route>
          {/* 404 */}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App