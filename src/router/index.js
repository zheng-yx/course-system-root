import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Index from '@/views/index/index'
import db from '@/utils/localstorage'
import request from '@/utils/request'
import store from '@/store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Content from '@/views/index/content'
import index from '@/views/index/index'
// 登录页
import Login from '@/views/login/index'

import Layout from '@/views/root/Layout/Layout'
import RootIndex from '@/views/root/Index/Index'

Vue.use(Router)

const constRouter = [
  {
    path: '/',
    redirect: '/root'
  },
  {
    path: '/root',
    redirect: '/root/Layout',
  },
  {
    path:'/root/Layout',
    component: Layout,
    redirect: '/root/Index',
    children: [
      {
        path: '/root/Index',
        name: 'rootIndex',
        component: RootIndex
      },
      {
        path: 'CarouselData',
        name: 'CarouselData',
        component: () => import('@/views/root/CarouselData/CarouselData'),
      },
      {
        path: 'CarouselOptions',
        name: 'CarouselOptions1',
        component: () => import('@/views/root/CarouselOptions/CarouselOptions'),
      },
      {
        path: 'CarouselOptions/:id',
        name: 'CarouselOptions2',
        component: () => import('@/views/root/CarouselOptions/CarouselOptions'),
      },
      {
        path: 'ArticleData/:catalog',
        name: 'ArticleData',
        component: () => import('@/views/root/ArticleData/ArticleData'),
      },
      {
        path: 'ArticleOptions/:c_id',
        name: 'ArticleOptions1',
        component: () => import('@/views/root/ArticleOptions/ArticleOptions'),
      },
      {
        path: 'ArticleOptions/:c_id/:id',
        name: 'ArticleOptions2',
        component: () => import('@/views/root/ArticleOptions/ArticleOptions'),
      },
      {
        path: 'VideoData',
        name: 'VideoData',
        component: () => import('@/views/root/VideoData/VideoData'),
      },
      {
        path: 'VideoOptions',
        name: 'VideoOptions1',
        component: () => import('@/views/root/VideoOptions/VideoOptions'),
      },
      {
        path: 'VideoOptions/:vid',
        name: 'VideoOptions2',
        component: () => import('@/views/root/VideoOptions/VideoOptions'),
      },
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/404',
    component: (resolve) => require(['@/views/error-page/404'], resolve),
    hidden: true
  },
  {
    path: '/error',
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      {
        path: '404',
        component: (resolve) => require(['@/views/error-page/404'], resolve),
        name: 'Page404',
        meta: { title: 'page404', noCache: true }
      }
    ]
  }

]
const router = new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constRouter
})

const whiteList = ['/login']
export default router
