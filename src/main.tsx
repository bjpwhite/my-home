import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from "react-redux";
import store from './redux/store'
import "antd/dist/antd.css"
import { ConfigProvider } from "antd";
import zh_CN from 'antd/lib/locale-provider/zh_CN';

ReactDOM.render(
  <Provider store={store}>
      <ConfigProvider locale={zh_CN}>
        <App />
      </ConfigProvider>
  </Provider>,
  document.getElementById('root')
)
