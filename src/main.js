import Vue from 'vue'
import axios from 'axios';
Vue.prototype.$axios = axios;//this.$axios使用
axios.defaults.baseURL = window.global_config.BASE_URL

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './styles/element-variables.scss'
import 'element-ui/lib/theme-chalk/index.css'
import element from 'element-ui'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import i18n from './lang' // internationalization
import './icons' // icon
import './utils/error-log' // error log
import request from '@/utils/request'

import * as filters from './filters' // global filters
import { hasPermission, hasNoPermission, hasAnyPermission } from './utils/permissionDirect'

import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'
import $ from 'jquery'

import wangEditor from 'wangeditor'

import '@/assets/scss/reset.scss'

const Plugins = [
  hasPermission,
  hasNoPermission,
  hasAnyPermission
]

Plugins.map((plugin) => {
  Vue.use(plugin)
})

Vue.use(element, { i18n: (key, value) => i18n.t(key, value) }
)

Vue.prototype.$post = request.post
Vue.prototype.$get = request.get
Vue.prototype.$put = request.put
Vue.prototype.$delete = request.delete
Vue.prototype.$download = request.download
Vue.prototype.$upload = request.upload
Vue.prototype.$login = request.login

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
