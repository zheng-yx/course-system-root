<template>
  <div>
    <!-- 导航 -->
    <div id="index">
      <!-- 顶部 -->
      <div class="topBox">
        <!-- 顶部顶栏 -->
        <div class="borderBottom">
          <div class="container">
            <div class="languageBox"><a href="#">加入收藏</a></div>
            <div class="languageBox"><router-link to="/content">首页</router-link></div>
            <div class="languageBox"><a href="#">招生代码 12668</a></div>
          </div>
        </div>
        <!-- 顶部图片栏 -->
        <div class="container">
          <div class="row">
            <!-- <div class="col-xs-12 col-sm-6 col-md-8 logo">
            </div>
            <div class="col-xs-6 col-sm-3 col-md-2">
              <div class="address" />
            </div> -->
          </div>
        </div>
      </div>
      <nav class="navbar navbar-static-top navbar-default">
        <div class="container nav-flex">
          <!-- 导航栏浮现 -->
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><router-link to="/content">首页</router-link></li>

              <li class="dropdown downss">
                <router-link to="/planningMain" class="dropdown-toggle" data-toggle="dropdown">课程建设与改革</router-link>
                <a id="app_menudown" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs" /></a>
                <ul class="dropdown-menu" role="menu">
                  <li><router-link to="/planningMain">建设规划</router-link></li>
                  <li><router-link to="/reformMain">教学改革</router-link></li>
                </ul>
              </li>

              <li class="dropdown downss">
                <router-link to="/teacherMain" class="dropdown-toggle" data-toggle="dropdown">教学团队</router-link>
                <a id="app_menudown" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs" /></a>
                <ul class="dropdown-menu" role="menu">
                  <li><router-link to="/teacherMain">主讲教师</router-link></li>
                  <li><router-link to="/teamMain">师资队伍</router-link></li>
                  <li><router-link to="/cultivateMain">师资培养</router-link></li>
                  <li><router-link to="/studyMain">科研教研</router-link></li>
                  <li><router-link to="/activityMain">教研活动</router-link></li>
                </ul>
              </li>

              <li class="dropdown downss">
                <router-link to="/introduceMain" class="dropdown-toggle" data-toggle="dropdown">教学内容</router-link>
                <a id="app_menudown" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs" /></a>
                <ul class="dropdown-menu" role="menu">
                  <li><router-link to="/introduceMain">课程介绍</router-link></li>
                  <li><router-link to="/outlineMain">课程大纲</router-link></li>
                  <li><router-link to="/scheduleMain">授课进度表</router-link></li>
                  <li><router-link to="/planMain">教案</router-link></li>
                  <li><router-link to="/PPTMain">PPT</router-link></li>
                  <li><router-link to="/videoMain">授课视频</router-link></li>
                </ul>
              </li>
              <li class="dropdown downss">
                <router-link to="/exerciseMain" class="dropdown-toggle" data-toggle="dropdown">教学条件</router-link>
                <a id="app_menudown" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs" /></a>
                <ul class="dropdown-menu" role="menu">
                  <li><router-link to="exerciseMain">课程练习</router-link></li>
                  <li><router-link to="bookMain">教程参考书</router-link></li>
                  <li><router-link to="resourceMain">网络资源</router-link></li>
                </ul>
              </li>
              <li class="dropdown downss">
                <router-link to="/prepareMain" class="dropdown-toggle" data-toggle="dropdown">教学方法与手段</router-link>
                <a id="app_menudown" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs" /></a>
                <ul class="dropdown-menu" role="menu">
                  <li><router-link to="/prepareMain">教学准备</router-link></li>
                  <li><router-link to="/methodMain">教学设计与方法</router-link></li>
                </ul>
              </li>
              <li class="dropdown downss">
                <router-link to="/softwareMain" class="dropdown-toggle" data-toggle="dropdown">实训教学</router-link>
                <a id="app_menudown" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs" /></a>
                <ul class="dropdown-menu" role="menu">
                  <li><router-link to="/softwareMain">课程实训软件</router-link></li>
                  <li><router-link to="/instructorMain">实训指导书</router-link></li>
                  <li><router-link to="/achievementMain">学生实训成果</router-link></li>
                </ul>
              </li>
              <li class="downss">
                <router-link to="/dataMain" class="dropdown-toggle" data-toggle="dropdown">教学效果</router-link>
                <a id="app_menudown" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs" /></a>
                <ul class="dropdown-menu" role="menu">
                  <li><router-link to="/dataMain">学生评教效果资料</router-link></li>
                  <li><router-link to="/awardMain">学生比赛奖励等</router-link></li>
                  <li><router-link to="/teacherAwardMain">教师获奖</router-link></li>
                  <li><router-link to="/teachingResultsMain">教学成果</router-link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <!-- 内容 -->
    <router-view />
    <!-- 底部 -->
    <div class="footer">
      <div class="row frow">
        <div class="col-md-3 col-xs-6 fourdiv" style="text-align: left;">
          <h3>网络营销</h3>
          <p class="copyright-text">&copy; Copyright &copy;&nbsp;&nbsp;2014 </p>
        </div>
        <div class="col-md-3 col-xs-6 fourdiv" style="text-align: left;">
          <h5>联系方式</h5>
          <ul>
            <span class="glyphicon glyphicon-map-marker mrg" />
            <li class="address-icon">地址: 中国&#8226;大连&#8226;西岗区欢胜街1号<br></li>
            <span class="glyphicon glyphicon-earphone mrg" />
            <li class="phone-icon">电话: 400-655-6088<br></li>
            <span class="glyphicon glyphicon-envelope mrg" />
            <li class="email-icon">Email: help@dlut.edu.cn</li>
          </ul>
        </div>
        <div class="col-md-3 col-xs-6 fourdiv" style="text-align: left;">
          <h5>网络资源</h5>
          <ul>
            <span class="glyphicon glyphicon-map-marker mrg" />
            <li class="address-icon">
              <a href="http://media4.open.com.cn/l602/1409/dagong/jisuanjwljs/6_3.html">
                大连理工大学资料
              </a><br>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-xs-6 fourdiv" style="text-align: left;">
          <h5>访问统计</h5>
          {{ count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/styles/insidePage.scss'
import './css/bootstrap.css'
import './css/style.css'
import './css/online.css'
import ContentArea from './content'
import myJs from './js/index'
export default {
  name: 'Index',
  components: {
    ContentArea
  },
  data() {
    return {
      count: 0
    }
  },
  created () {
    this.$get('/count').then((r) => {
      this.count = r.data.data
    })
  },
  mounted() {
    myJs.chadisplay()
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  .topBox {
    background: url(./images/head.jpg);
    background-size:80% 100%;
    background-repeat:no-repeat;
    background-position: center center;
    height: 145px;
    background-color: white;
  }
</style>
