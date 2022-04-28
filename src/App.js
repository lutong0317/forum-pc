// 导入路由
import { BrowserRouter as Router, Route, Switch, Redirect } from
  'react-router-dom'
import './App.css'
// 导入页面组件
import Login from './pages/Login'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'

function App () {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Layout}></Route>
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