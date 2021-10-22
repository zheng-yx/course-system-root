<template>
  <div>
    <!-- 内容 -->
    <div class="content index">
      <!-- 左栏 -->
      <div class="index-left">
        <!-- 左上栏：轮播图和课程简介 -->
        <div class="index-one">
          <!-- 图片栏 -->
          <div class="inl">
            <div class="block">
              <el-carousel trigger="click">
                <el-carousel-item v-for="(item, value) in courceIntroduce" :key="value">
                  <img :src="item.url" width="100%" height="100%">
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <!-- 课程介绍 -->
          <div class="inr">
            <router-link :to="{path:'/introduceData'}" class="title_s">课程介绍</router-link>
            <p style="text-indent: 2em">
              经管实训中心是由工商管理学院和经济管理学院合建的，主要服务于我校文科院系及工科院系部分专业的经管实验实训教学中心，经过十来年的建设发展，已经初具规模，并取得了较大的教学成效和一定的社会影响力。截止到2017年年底，我校经管实训中心现有实验用房 1540平方米，电脑实验室15间共 800 余个机位，设备数量692台（件），设备总值近500万元。

              <!-- <router-link :to="{path:'/introduceData'}" style="font-size: 13px">查看详情</router-link> -->
              <a title="查看详情" href="#/introduceData/157" style="font-size: 13px; color: black">+查看详情</a>
            </p>
          </div>
        </div>
        <!-- 左下栏：轮播图教学效果 -->
        <div class="index-two">
          <!-- 标题 -->
          <div class="intitle">
            <div class="title_s">
              <router-link :to="{path:'/teachingResultsData'}" style="color: #fff">教学效果</router-link>
            </div>
          </div>
          <!-- 轮播图 -->
          <div id="demo">
            <table cellspacing="1" cellpadding="1" align="center" border="0" cellspace="0">
              <tbody>
                <tr>
                  <td id="marquePic1" bgcolor="#ffffff" valign="top">
                    <table cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td align="center" style="width: 200px;padding-left: 10px;padding-right: 10px" 
                              v-for="(item, value) in teachingResult" :key="value"
                          >
                            <router-link :to="{name: 'teachingResultsDataOnly', params: { id: item.id }}" style="color:#333">
                              <img :src="item.url" alt="" aria-hidden="true" width="200" height="134">
                              <span>{{ item.title }}</span>
                            </router-link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td id="marquePic2" bgcolor="#ffffff" valign="top">
                    <table cellspacing="0" width="100%" border="0">
                      <tbody>
                        <tr>
                          <td align="center" style="width: 200px;padding-left: 10px;padding-right: 10px" 
                              v-for="(item, value) in teachingResult" :key="value"
                          >
                            <router-link :to="{name: 'teachingResultsDataOnly', params: { id: item.id }}" style="color:#333">
                              <img :src="item.url" alt="" aria-hidden="true" width="200" height="134">
                              <span>{{ item.title }}</span>
                            </router-link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- 右栏 -->
      <div class="index-right">
        <!-- 教师团队 -->
        <div class="right">
          <div class="title_s">
              <router-link :to="{path:'/teacherData'}">教师团队</router-link>
          </div>
          <div class="quickse">         
            <!-- <h3>教师团队</h3> -->
            <ul>
              <li v-for="(item, value) in teacherTeam" :key="value">
                <router-link :to="{name: 'teacherDataOnly', params: { id: item.id }}">
                  <img :src="item.url" alt="" aria-hidden="true" style="width:60px;height:60px;border-radius:50%;">
                  <span>{{ item.title }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- 教学内容 -->
        <div class="xia">
          <div class="title_s">
              <router-link :to="{path:'/introduceData'}">教学内容</router-link>
          </div>
          <div class="you">
            <ul>
              <li style="width:64px;height:60px;margin-bottom:10px;">
                <router-link :to="{path:'/introduceData'}">
                  <span class="glyphicon glyphicon-th" aria-hidden="true" />
                  <span>课程介绍</span>
                </router-link>
              </li>
              <li style="width:64px;height:60px;margin-bottom:10px;">
                <router-link :to="{path:'/outlineData'}">
                  <span class="glyphicon glyphicon-list" aria-hidden="true" />
                  <span>课程大纲</span>
                </router-link>
              </li>
              <li style="width:64px;height:60px;margin-bottom:10px;">
                <router-link :to="{path:'/scheduleData'}">
                  <span class="glyphicon glyphicon-align-justify" aria-hidden="true" />
                  <span>授课进度</span>
                </router-link>
              </li>
              <li style="width:64px;height:60px;margin-bottom:10px;">
                <router-link :to="{path:'/planData'}">
                  <span class="glyphicon glyphicon-folder-close" aria-hidden="true" />
                  <span> 教 案 </span>
                </router-link>
              </li>
              <li style="width:64px;height:60px;margin-bottom:10px;">
                <router-link :to="{path:'/PPTData'}">
                  <span class="glyphicon glyphicon-pencil" aria-hidden="true" />
                  <span>课 件(ppt)</span>
                </router-link>
              </li>
              <li style="width:64px;height:60px;margin-bottom:10px;">
                <router-link :to="{path:'/videoData'}">
                  <span class="glyphicon glyphicon-expand" aria-hidden="true" />
                  <span>授课视频</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import myJs from './js/index'
Vue.use(ElementUI)
export default {
  name: 'Content',
  data() {
    return {
      msg: 'hello',
      demo: '',
      marquePic1: '',
      //保存教师团队
      teacherTeam: [],
      teachingResult: [],
      courceIntroduce: []
    }
  },
  watch: {
    '$route': 'getPath'
  },
  created () {
    this.getTeacherTeam()
    this.getTeachingResult()
    this.getCourceIntroduce()
  },
  mounted() {
    // myJs.dosuba52395a();
    // myJs.hotKeysa52395a();
    // myJs.setHomepagea52395a();
    myJs.slkdfj()
    // myJs.lunbo();
    // myJs.shiyan();
    this.demo = document.getElementById('demo')
    this.marquePic1 = document.getElementById('marquePic1')
  },
  methods: {
    getPath() {
      myJs.slkdfj(this.demo, this.marquePic1)
    },
    tabs(n) {
      var len = 4
      if (n == 1 || n == 2) {
        for (var i = 1; i <= 2; i++) {
          document.getElementById('tab_a' + i).style.display = (i == n) ? 'block' : 'none'
          document.getElementById('tab_' + i).className = (i == n) ? ' cur' : 'none'
        }
      } else {
        for (var i = 3; i <= 4; i++) {
          document.getElementById('tab_a' + i).style.display = (i == n) ? 'block' : 'none'
          document.getElementById('tab_' + i).className = (i == n) ? ' cur' : 'none'
        }
      }
    },
    outStyle(i) {
      document.getElementById('tab_' + i).className = 'none'
    },
    //动态渲染教师团队
    getTeacherTeam() {
      const ArticlePage = {
        page: 1,
        count: 12,
        state: 2,
        catalog: 11
      }
      this.$get('selectArticleMessageByPage', {
        ...ArticlePage
      }).then((r) => {
        this.teacherTeam = r.data.data.rows
      })
    },
    getTeachingResult() {
      const ArticlePage = {
        page: 1,
        count: 12,
        state: 2,
        catalog: 63
      }
      this.$get('selectArticleMessageByPage', {
        ...ArticlePage
      }).then((r) => {
        this.teachingResult = r.data.data.rows
      })
    },
    getCourceIntroduce() {
      const params = {
        pageNum: 1,
        pageSize: 10
      }
      this.$get('/image/list', {
        ...params
      }).then((r) => {
        this.courceIntroduce = r.data.data.rows
      })
    }
  }
}
</script>

<style lang="scss" scoped>
a{
	text-decoration: none;
   }
   a:link,a:visited{color:#333;}
   *{
	padding: 0px;
	margin: 0px;
   }
   ul{
	list-style: none;
   }
   .clear{
	clear: both;
   }
   img{
	border: none;
   }
   a:hover{
	color:  #9c2626;
   }

   body{
	font:12px/30px "寰蒋闆呴粦";
	color: #333;
   }
   .inner{width:1000px;position:relative;margin:0 auto;}
   .header{
	height: 163px;
	position: relative;
	margin: 0 auto;
	z-index:100010;
   }
   .header .sfzx{
	font:20px/20px "寰蒋闆呴粦";
	color: #700100;
	position: absolute;
	top:16px;
	right: 6px;
   }
   .header .subnav{
	position: absolute;
	top:50px;
	right: 8px;
	font:12px/12px "寰蒋闆呴粦";
	color: #000;
   }
   .header .subnav a{
	font:12px/12px "寰蒋闆呴粦";
	color: #000;
   }
   .header .subnav span{
	font:12px/12px "寰蒋闆呴粦";
	color: #000;
   }
   .header .subnav a:hover{
	color: #991a21;
   }
   .header .soso{
	position: absolute;
	top:76px;
	right: 8px;
   }
   .header .notxt{
	width: 170px;
	height: 23px;
	outline: none;
	border: 1px solid #acacac;
	color: #d3d3d3;
	font:12px/12px "瀹嬩綋";
  line-height: 24px;
	padding-left: 5px;
   }
   .header .notxt1{
	position: absolute;
	top:0px;
	right:0px;
	width: 38px;
	height: 25px;
	/* background: url(./images/fangda.jpg) no-repeat; */
	border: none;
	outline: none;
   }
   #head {
   height: 127px;
   background-position: 0 0;
   background-repeat: no-repeat;
   position: relative;
   /* background: url(img/bg.jpg) no-repeat left top; */
   }
   .logo {
   font-size: 20px;
   top: 25px;
   left:90px;
   overflow: hidden;
   /* background: url(./img/logo.png) no-repeat 0 15px; */
   padding-left: 0;
   padding-top: 32px;
   position: absolute;
   width: 510px;
   font-weight: 600;
   }
   .logo a, .logo a:hover {
   text-decoration: none;
   color: #333;
   font-size: 28px;
   font-family: SimHei;
   }
   .logo span {
   font-size: 10px;
   margin-top: -1px;
   display: block;
   font-weight: normal;
   }

   .logo p {
   font-family: 寰蒋闆呴粦;
   font-size: 12px;
   margin-top: -12px;

   }
   .right-logo {
   width: 400px;
   height: 127px;
   position: absolute;
   right: 0;
   top: 0;
   /* background: url(./img/xiaoxun5.jpg) no-repeat right center; */
   text-align: right;
   }

   .in-right-logo{
	padding-right: 45px;
   }

   .right-logo span, .right-logo a {
   margin-left: 15px;
   }
   .right-logo span strong {
   vertical-align: middle;
   }
   /* .xiaohui{background:url(./img/xiaohui.png) no-repeat 0 28px;height:100%;} */
   .header .nav{
	height: 35px;
	border: 1px solid #c57574;
	border-bottom: none;
	background:  #9c2626;
	z-index: 9999;
   }
   .header .nav ul li.fuli{
	width: 124px;
	height: 35px;
	text-align: center;
	/* background: url(img/xian.jpg) no-repeat left top; */
	position: relative;
	float: left;
   }
   .header .nav ul li.first{
	background: none;
   }
   .header .nav ul li.fuli a{
	font:16px/35px "寰蒋闆呴粦";
	color: #fff;
   }
   .header .nav ul li.cur{
	/* background: #700100 url(img/xian.jpg) no-repeat left top; */
   }
   .header .nav ul li.fuli .menu{
	position: absolute;
	top:35px;
	left: 2px;
	width: 123px;
	padding-top: 5px;
	padding-bottom: 5px;
	/* background: url(img/hei.png); */
	display: none;
	z-index:100010;
   }
   .header .nav ul li.fuli .menu ul li{
	text-align: center;
   }
   .header .nav ul li.fuli .menu ul li a{
	font:14px/30px "寰蒋闆呴粦";
	color: #fff;
   }
   .header .nav ul li.fuli .menu ul li a:hover{
	color: #700100;
   }

   .index{overflow:hidden;}
   .index-one{overflow:hidden;}
   .index-left{float:left;width:764px;margin:20px 0 0px!important;}
.index-left .inl{
    float:left;
    width:450px;
}
   .slide_x{overflow:hidden;position:relative;width:475px;height:248px;border:1px solid #ddd;background:#000;}
   .slide_x a{color:#eee;text-decoration:none;}
   .slide_x .box{overflow:hidden;position:relative;width:475px;height:248px;}
   .slide_x .list{overflow:hidden;width:9999px;}
   .slide_x .list li{float:left;position:relative;width:475px;}
   .slide_x .list img{vertical-align:top;}
   .slide_x .list p{position:absolute;bottom:0;left:0;width:100%;height:24px;color:#eee;font:12px/24px "寰蒋闆呴粦";text-indent:12px;
   filter:progid:DXImageTransform.Microsoft.gradient(enabled='true',startColorstr='#99000000',endColorstr='#99000000');background:rgba(0,0,0,0.6);}
   .slide_x .btn{overflow:hidden;position:absolute;bottom:4px;right:6px;}
   .slide_x .btn li{float:left;width:16px;height:16px;margin:0 0 0 10px;border-radius:2px;background:#eee;color:#333;font:11px/16px "寰蒋闆呴粦";text-align:center;cursor:pointer;}
   .slide_x .btn .selected{background:#f30;color:#fff;}
.index-left .inr{
    float:left;
    width:290px;
    border: 1px solid #ddd;
    padding: 0 10px 10px;
    margin-left: 15px;
    height: 300px;
}
.index-left .title_s {
	  height: 30px;
    line-height: 30px;
	  padding: 0 10px;
	  color: #fff;
    float: left;
	  margin-top: 8px;
	  margin-bottom: 2px;
    background:  #9c2626;
}
.index-right .title_s{
    height: 30px;
    line-height: 30px;
	  padding: 0 10px;
	  color: #fff !important;
	  margin-top: 8px;
	  margin-bottom: 2px;
    background:  #9c2626;
    width: 84px;
    font-size: 16px;
}
.index-right .xia .title_s {
    display: flex;
    align-self: flex-end;
}
.index-right .title_s a:hover, a:link, a:visited{
    color: #fff;
}

   .index-left .inr p {
	   width: 100%;
	   float: left;
	   font-size: 13px;
	   line-height: 22px;
   }
.index-right{
    float:right;
    width:250px;
    margin:20px 0!important;
}
   .index-two{overflow:hidden;margin-top:10px;padding-right:11px;}
   .index-two .intitle{width:100%;border-bottom:1px solid #ccc;overflow:hidden;}
   .index-two .title_s{margin-bottom:0;}
   #demo{width:779px; overflow:hidden; margin:10px auto;margin-left:-10px;}
   #demo a:hover {text-decoration: underline;}
   #demo a{font-size: 15px; font-family: 寰蒋闆呴粦;}
   .index-three{overflow:hidden;}
.content{
	  width: 1020px;
	  margin: 0 auto;
}
   .content .zhong{

	overflow: hidden;
   }
   .content .zhong .gong{
	float: left;
	width: 386px;
	height: 262px;
   }
   .content .zhong .gong .hd{
	position: relative;
	width: 372px;
	height: 35px;
	border-bottom: 1px solid #7E7E7E;
   }
   .content .zhong .gong .hd h3{
	float: left;
	height: 32px;
	width: 100px;
	text-indent: 10px;
	font:15px/35px "寰蒋闆呴粦";
	color: #373737;
	cursor: pointer;
   }
   .content .zhong .gong .hd h3.xw{
	position: absolute;
	top:2px;
	left: 0px;
	top:-1px;
   }
   .content .zhong .gong .hd h3.hz{
	position: absolute;
	top:2px;
	left: 100px;
   }
   .content .zhong .gong .hd h3.cur{
	border-bottom: 3px solid  #9c2626;
   }
   .content .zhong .gong .hd a{
	display: none;
    position: absolute;
    top: 14px;
    right: 0px;
    width: 48px;
    height: 12px;
    font: 12px/12px "\5BF0\E1BF\848B\95C6\5474\7CA6";
    color: #373737;
    padding-left: 24px;
    text-align: right;
   }
   .content .zhong .gong .hd a.chu{
	display: block;
   }
   .content .zhong .gong .bd{
	width: 372px;
	padding-top: 8px;
	display: none;
   }
   .content .zhong .gong .no1{
	display: block;
   }
   .content .zhong .gong .bd ul li{
	padding-left: 23px;
	/* background: url(img/icon2.jpg) no-repeat 10px 10px; */

   }
   .content .zhong .gong .bd ul li span{
	float: right;
	padding-right: 10px;
	font:12px/28px "寰蒋闆呴粦";
	color: #373737;

   }
   .content .zhong .gong .bd ul li a{
	font:12px/28px "寰蒋闆呴粦";
	color: #373737;
   }
   .content .zhong .center{
	float: left;
	width: 398px;
   }
   .content .right{
	  width: 100% !important;
   }
/**教师团队 */
.content .right .quickse {
    float: left;
    width: auto;
    height: 270px;
}
.content .right .quickse ul{
    padding-top: 4px;
    border: 1px solid #dfdfdf;
    
    display: flex;
    /* display: -webkit-flex; */
    flex-wrap: wrap;
    /* justify-content: space-around; */
    align-content: flex-start;
    list-style: none;
}
.content .right .quickse ul li a{
    /* font:14px/34px "寰蒋闆呴粦"; */
    display: flex;
    flex-direction: column;
	  color: #3e3e3e;
	  width: 100%;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    margin: 0 2px 5px 0;
}

.content .zhong .gong .bd ul li a:hover{
	  color:  #9c2626;
}
.content .xia{
	  margin:0px 0px;
}
.content .xia .you{
	  float: right;
	  width: 100%;
}

.content .xia .you .hd span {
    background-color: #fff;
    text-align: left;
    padding: 1px 75px 7px 5px;
    font-weight: 600;
    font-size: 18px;
    color: #000;
}
.content  .xia .you ul{
    margin-top: 10px;
    padding: 20px 5px 10px 5px;
    /* display: flex;
    display: -webkit-flex;*/
    border: 1px solid #dfdfdf;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li:nth-child(5), li:nth-child(6) {
      //  margin-left: 5%;
    }
}
.content  .xia .you ul li a{
    /* font:14px/34px "寰蒋闆呴粦"; */
    display: flex;
    flex-direction: column;
    color: #3e3e3e;
    width: 100%;
    text-align: center;
    font-size: 16px !important;
    /* font-weight: 600; */
}

.content  .xia .you ul .glyphicon{
    margin-bottom: 7px;
    font-size: 42px !important;
    color: rgb(109, 152, 236);
}

   .content1{
	width: 1000px;
	margin: 0 auto;
	overflow: hidden;
   }
   .content1 .left{
	width: 226px;
	float: left;
	background: #E5E5E5;
	border-top: 1px solid #CECECE;
   }
   .content1 .left ul li{
	border-bottom: 1px solid #CECECE;
	height: 59px;
	width: 226px;
	text-align: center;
   }
   .content1 .left ul li a{
	width: 226px;
	height: 59px;
	display: block;
	font:16px/59px "寰蒋闆呴粦";
	color: #9C2626;
   }
   .content1 .left ul li a:hover{
	border-left: 5px solid #9C2626;
	width: 221px;
   }
   .content1 .right{
	float: right;
	width: 748px;
	padding-left: 26px;
   }
   .content1 .right .bread{
	font:14px/48px "寰蒋闆呴粦";
	color: #323232;
   }
   .content1 .right .bread a{
	font:14px/48px "寰蒋闆呴粦";
	color: #323232;
   }
   .content1 .right .bread a:hover{
	color: #9C2626;
   }
   .content1 .right ul.liebiao{
	padding-top: 8px;
	overflow: hidden;
	padding-bottom: 7px;
   }
   .content1 .right ul.liebiao li{
	padding-left: 36px;
	/* background: url(img/icon4.jpg) no-repeat 15px 8px; */
   }
   .content1 .right ul.liebiao li .inner{
	border-bottom: 1px solid #E5E5E5;
   }
   .content1 .right ul.liebiao li a{
	font:12px/29px "寰蒋闆呴粦";
	color: #323232;
   }
   .content1 .right ul.liebiao li span{
	font:12px/29px "Arial";
	color: #323232;
	float: right;
   }
   .content1 .right ul.liebiao li a:hover{
	color: #9c2626;
   }
   .yema{
	font:12px/40px "寰蒋闆呴粦";
	color: #323232;
	text-align: center;

	padding-bottom: 15px;
   }
   .yema a{
	font:12px/40px "寰蒋闆呴粦";
	color: #323232;
   }
   .content1 .right .lietu {
   margin: 10px 0 0 0;
   overflow: hidden;
   width: 734px;
   text-align: center;
   }
   .content1 .right .lietu ul {
   width: 800px;
   padding-top: 13px;
   overflow: hidden;
   }
   .content1 .right  .lietu ul li {
   float: left;
   height: 174px;
   width: 214px;
   padding: 0;
   padding-right: 42px;
   padding-bottom: 35px;
   background: none;
   }
   .content1 .right .lietu ul li a {

   line-height: 30px;
   font-size: 14px;

   color: #444;
   }
   .content1 .right .lietu ul li a:hover{
	color: #991A21;
   }
   .content1 .right .article h2{
	font-size: 18px;
	color: #991A21;
	line-height: 40px;
	padding: 10px 0px 0px 0px;
	text-align: center;
   }
   .content1 .right .article .resource {
   height: 30px;
   text-align: center;
   line-height: 30px;
   color: #777;
   border-bottom: 1px solid #ccc;
   margin-bottom: 10px;
   }
   .content1 .right .fujian {
   padding: 10px 20px 20px 0px;
   overflow: hidden;
   }
   .content1 .right .fujian h3 {
   font-size: 16px;
   line-height: 30px;
   color: #991A21;
   padding: 0 0 0 8px;
   }
   .content1 .right .fujian ul{
	padding-top: 10px;
   }
   .content1 .right .fujian ul li {
   height: 26px;
   line-height: 26px;
   /* background: url(img/icon2.jpg) no-repeat 20px center; */
   padding-left: 42px;
   }
	.content1 .right .fujian ul li a {
   font-size: 12px;
   line-height: 24px;
   color: #656464;
   }
	.content1 .right .fujian ul li a:hover{
	 color: #991A21;
	}
   .content1 .right .tou{
	  position: relative;
	  height: 40px;
	 }
   .content1 .right .tou h3{
	font:16px/40px "寰蒋闆呴粦";
	color: #991A21;
	font-weight: bold;
   }
   .content1 .right .tou a{
	position: absolute;
	top:0px;
	right:10px;
	font:12px/40px "寰蒋闆呴粦";
	color: #323232;
   }
   .content1 .tong{
	width: 1000px;
	margin: 0 auto;
   }
   .content1 .tong .bread{
	font: 14px/48px "寰蒋闆呴粦";
	color: #323232;
   }
   .content1 .tong .bread a{
	font: 14px/48px "寰蒋闆呴粦";
	color: #323232;
   }
   .content1 .tong .bread a:hover{
	color: #9C2626;
   }
   .content1 .tong ul.liebiao {
   padding-top: 8px;
   overflow: hidden;
   padding-bottom: 7px;
   }
   .content1 .tong ul.liebiao li {
   padding-left: 36px;
   /* background: url(img/icon4.jpg) no-repeat 15px 8px; */
   }
   .content1 .tong ul.liebiao li .inner {
   border-bottom: 1px solid #E5E5E5;
   }
   .content1 .tong ul.liebiao li span {
   font: 12px/29px "Arial";
   color: #323232;
   float: right;
   }
   .content1 .tong ul.liebiao li a {
   font: 12px/29px "寰蒋闆呴粦";
   color: #323232;
   }
   .content1 .tong ul.liebiao li a:hover{
	color: #991A21;
   }
   .content1 .tong .bread{
	padding-left: 11px;
   }
   .content1 .yema a:hover{
	color: #991A21;
   }
   .content1 .tong .article h2 {
	font-size: 18px;
	color: #991A21;
	line-height: 40px;
	padding: 10px 0px 0px 0px;
	text-align: center;
   }
   .content1 .tong .article .resource {
	height: 30px;
	text-align: center;
	line-height: 30px;
	color: #777;
	border-bottom: 1px solid #ccc;
	margin-bottom: 10px;
   }
   .content1 .tong .fujian {
   padding: 10px 20px 20px 0px;
   overflow: hidden;
   }
   .content1 .tong .fujian h3 {
   font-size: 16px;
   line-height: 30px;
   color: #991A21;
   padding: 0 0 0 8px;
   }
   .content1 .tong .fujian ul {
   padding-top: 10px;
   }
   .content1 .tong .fujian ul li {
   height: 26px;
   line-height: 26px;
   /* background: url(img/icon2.jpg) no-repeat 20px center; */
   padding-left: 42px;
   }
   .content1 .tong .fujian ul li a {
   font-size: 12px;
   line-height: 24px;
   color: #656464;
   }
   .content1 .tong .fujian ul li a:hover{
	color: #991A21;
   }

   .celan{
	 width: 226px;
	 float: left;
	 background: #E5E5E5;
	 border-top: 1px solid #CECECE;
   }

   .celan h2{
	  background:#9C2626;
	  height:60px;
	  line-height:60px;
	  text-align:center;
	  color:#fff;
   }

   .celan ul{
	list-style: none;
   }

   .celan ul li{
	border-bottom: 1px solid #CECECE;
	   height: 59px;
	   width: 226px;
	   text-align: center;
   }

   .celan ul li a{
	width: 226px;
	   height: 59px;
	   display: block;
	   font: 16px/59px "寰蒋闆呴粦";
	   color: #9C2626;
   }

   .celan ul li a:hover{
	border-left: 5px solid #9C2626;
   }

   .about{
	float: right;
	   width: 748px;
	   padding-left: 26px;
   }

   .about .bread{
	font: 14px/48px "寰蒋闆呴粦";
	   color: #323232;
   }

   .about .title{
	position: relative;
	   height: 40px;
   }

   .about .title h3{
	font: 16px/40px "寰蒋闆呴粦";
	   color: #991A21;
	   font-weight: bold;
   }

   .about .title a{
	position: absolute;
	   top: 0px;
	   right: 10px;
	   font: 12px/40px "寰蒋闆呴粦";
	   color: #323232;
   }

   .about .liebiao{
	list-style: none;
	padding-top: 8px;
	   overflow: hidden;
	   padding-bottom: 7px;
   }

   .about .liebiao li{
	padding-left: 36px;
	   /* background: url(./img/icon4.jpg) no-repeat 15px 8px; */
   }

   .about .liebiao li .neirong{
	border-bottom: 1px solid #E5E5E5;
   }

   .about .liebiao li .neirong span{
	font: 12px/29px "Arial";
	   color: #323232;
	   float: right;
   }

   .about .liebiao li .neirong a{
	font: 12px/29px "寰蒋闆呴粦";
	   color: #323232;
   }

   .article h2{
	font-size: 18px;
	   color: #991A21;
	   line-height: 40px;
	   padding: 10px 0px 0px 0px;
	   text-align: center;
   }

   .article p{
	   font-size: 14pt;
	   line-height: 150%;
	   font-family: 瀹嬩綋;
   }

   .imgbar{
	display: inline-block;
	padding: 0 15px;
	width: 300px;
	   padding-left: 43px;
	padding-bottom: 10px;
   }

   .imgbar p{
	text-align: center;

   }

   .imgbar img{
	width: 100%;
	height: auto;
	border: 0;
	border-radius:10px;
	-webkit-border-radius:10px;
	-moz-border-radius:10px;
   }

   /* The slider */
.iviewSlider {
	overflow: hidden;
}

/* The timer in the Slider */
#iview-timer {
	position: absolute;
	z-index: -10;
	border-radius: 5px;
	cursor: pointer;
}

#iview-timer div {
	border-radius: 3px;
}

/* The Preloader in the Slider */
#iview-preloader {
	position: absolute;
	z-index: 1000;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	border: #000 1px solid;
	padding: 1px;
	width: 100px;
	height: 3px;
}
#iview-preloader div {
	float: left;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	border-radius: 2px;
	height: 3px;
	background: #000;
	width: 0px;
}

/* The strips and boxes in the Slider */
.iview-strip {
	display:block;
	position:absolute;
	z-index:5;
}
.iview-block {
	display:block;
	position:absolute;
	z-index:5;
}

/* Direction nav styles (e.g. Next & Prev) */
.iview-directionNav a {
	position:absolute;
	top:45%;
	z-index:9;
	cursor:pointer;
}
.iview-prevNav {
	left:0px;
}
.iview-nextNav {
	right:0px;
}

/* Control nav styles (e.g. 1,2,3...) */
.iview-controlNav {
	position:absolute;
	z-index:1000;
}
.iview-controlNav a {
	z-index:1000;
	cursor:pointer;
}
.iview-controlNav a.active {
	font-weight:bold;
}
.iview-controlNav .iview-items ul {
	list-style: none;
}
.iview-controlNav .iview-items ul li {
	position: relative;
}
.iview-controlNav .iview-tooltip {
	position: absolute;
}

/* The captions in the Slider */
.iview-caption {
	position:absolute;
	z-index:4;
	overflow: hidden;
	cursor: default;
}

/* The video show in the Slider */
.iview-video-show {
	background: #000;
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 101;
}
.iview-video-show .iview-video-container {
	position: relative;
	width: 100%;
	height: 100%;
}
.iview-video-show .iview-video-container a.iview-video-close {
	position: absolute;
	right: 10px;
	top: 10px;
	background: #222;
	color: #FFF;
	height: 20px;
	width: 20px;
	text-align: center;
	line-height: 29px;
	font-size: 22px;
	font-weight: bold;
	overflow: hidden;
	-webkit-border-radius: 15px;
	-moz-border-radius: 15px;
	border-radius: 15px;
}
.iview-video-show .iview-video-container a.iview-video-close:hover {
	background: #444;
}

.container {
	width:1000px; height:293px; margin:0 auto; position:relative;
}

#iview {
	display: block;
	width: 760px;
	height: 293px;
	position: relative;
}

#iview .iviewSlider {
	display: block;
	width: 760px;
	height: 293px;
	overflow: hidden;
}
#iview .iviewSlider a{ display:block; width: 760px; height:293px; position:absolute; left:0; top:0; z-index:10000;}
#iview .iviewSlider a img{ display:block; width: 760px; height:293px;}
.iview-controlNav {
	position: absolute; display:block;
	top: 0px;
	right: -240px;width: 230px;
	height: 293px; z-index:1000;
}

/*.iview-controlNav a {
	text-indent: -9999px;
}*/

.iview-controlNav a {display:block; background:#ccc;filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacity:0; line-height:68px; text-align:center; width:230px; height:68px; overflow:hidden;}

.iview-controlNav a.iview-controlPrevNav {
	float: left;
	width: 50px;
	height: 44px;
	/* background: url('../../img/slider-controls.png') no-repeat; display:none; */
}

.iview-controlNav a.iview-controlNextNav {
	float: left;
	width: 50px;
	height: 44px;
	/* background: url('../../img/slider-controls.png') no-repeat -50px 0px; display:none; */
}

.iview-controlNav div.iview-items {
	width:230px;
	height: 293px;
}
.iview-controlNav div.iview-items ul{ width: 230px; height:293px;}
.iview-controlNav div.iview-items ul li{ display:block; font-size:12px; line-height:68px; text-align:center; width:230px; height:68px; overflow:hidden;}
.iview-controlNav div.iview-items ul li a{ display:block; font-size:12px; line-height:68px; text-align:center; width:230px; height:68px; overflow:hidden;}
.iview-controlNav a.iview-control {
	display:block; text-align:center;
	width: 230px;
	height: 68px;
	line-height: 68px;color:#000;
}

.iview-controlNav a.iview-control.active {
	display:block; width:230px; height:68px; overflow:hidden;
}

.iview-caption {
	color: #FFF;
	border-radius: 3px;
	padding: 10px 15px;
	font-family: Verdana;
	font-size: 12px;
	text-shadow: #000 1px 1px 0px;
}

.iview-caption.caption1 {
	font-size: 36px;
	font-weight: bold;
	height: 45px;
}

.iview-caption.caption2 {
	background: #00b4ff;
	font-size: 36px;
	font-weight: bold;
	text-shadow: none;
}

.iview-caption.caption3 {
	background: #FFF;
	color: #000;
	font-size: 26px;
	text-shadow: none;
}

.iview-caption.caption4 {
	font-size: 22px;
	font-weight: bold;
}

.iview-caption.caption5 {
	background: #c4302b;
	box-shadow: rgba(0, 0, 0, 0.7) 10px 10px 15px 0px;
	font-size: 20px;
	font-weight: bold;
	text-shadow: none;
}

.iview-caption.caption6 {
	font-size: 18px;
}

.iview-caption.caption7 {
	text-align: left;
	font-size: 11px;
	color: #888;
	border-radius: 0px;
}

.iview-caption.caption7 div {
	line-height: 200%;
}

.iview-caption.caption7 h3 {
	margin-bottom: 20px;
	color: #FFF;
}

.iview-caption.blackcaption {
	background: #000;
	box-shadow: rgba(0, 0, 0, 0.7) 10px 10px 15px 0px;
	text-shadow: none;
}

#iview-preloader {
	border: #666 1px solid;
	width: 150px
}

#iview-preloader div {
	background: #666;
}

.iview-controlNav div.iview-items ul li {
	width: 230px;
	height: 68px;
	line-height: 68px; margin-bottom:7px;
}

#iview #iview-tooltip {
	display:block;
	position: absolute;
	width: 230px;
	height:293px;
	top: 0px;
	right: -240px;
	z-index: 1;
}

#iview #iview-tooltip div.holder {
	display: block;
	width: 230px;
	height: 293px;
	overflow: hidden;
}

#iview #iview-tooltip div.holder div.container {
	display: block;
	width: 230px;
}

#iview #iview-tooltip div.holder div.container div {
	float: left;
	display: block;
	overflow: hidden;
	width: 230px;
	height: 68px;
	right: -240px;
	text-align: center; margin-bottom:7px; cursor:pointer;
}

#iview #iview-tooltip div.holder div.container div img {
	width:230px;height: 68px;
	margin:0 auto;
}
.closestyle54553{ font-size:12px;color:#333333;text-decoration: none ;}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

html, body { min-width: 600; width: 100vw !important;}

@media screen and (max-width: 1050px){
    .index-right {
        width: 194px;
        margin-right: 66px;
    }
    .content {
        width: 960px;
    }
}
@media screen and (max-width: 1000px){
    .index-right {
        width: 130px;
    }
    .content {
        width: 895px;
    }
}
@media screen and (max-width:920px) {
	.content,.zhong,.index-one{
    width:100vw;
		display: flex;
		flex-direction: column;
  }
  .index-one .inl{
    width: 100vw;
  }
  .index-right{
    display: none;
  }
  .gong{
      width: 100%;
  }
  .content .zhong .gong, .hd,.content .zhong .gong .bd {
    width: 100vw !important;
  }
  .inr{
    width: 100vw !important;
    margin-left: 0px !important;
  }
  .index-left .inr{
    height: auto !important;
  }
}

</style>
