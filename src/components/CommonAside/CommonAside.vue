<template>
  <!--collapse 是否水平折叠收起菜单-->
  <el-menu
    :collapse="isCollapse"
    :default-active="activeMenu"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    unique-opened
  >
    <!--是否水平折叠收起菜单 会影响这里字段的显示 -->
    <h3 v-show="isCollapse"><i class="el-icon-monitor"></i></h3>
    <h3 v-show="!isCollapse"><i class="el-icon-monitor"></i>课程管理系统</h3>
    <el-submenu :index="item.label" v-for="(item, index) in hasChildren" :key="index">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="subItem.catalog.toString()" v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">
          <i :class="'el-icon-' + subItem.icon"></i>
          <span slot="title">{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  //计算属性
  computed: {
    //有子菜单 (这样设置会有一个问题 就是有子菜单的 永远会在没有子菜单的下面
    hasChildren() {
      return this.menu.filter(item => item.children)
    },
    isCollapse() {
      // 这里的数据就是从vuex取得
      return this.$store.state.tab.isCollapse
    },
    // activeMenu() {
    //   return window.sessionStorage.getItem('activeMenu');
    // },
    //获取vuex的标签集合数据
    ...mapState({
      tags: state => state.tab.tabsList,
      activeMenu: state => state.tab.currentMenu.catalog + ''
    }),
  },
  data() {
    return {
      menu: [
        {
          label: '首页修改',
          icon: 'location',
          children: [
            {
              path: '/root/CarouselData/CarouselData',
              name: 'CarouselData',
              label: '课程介绍轮播图',
              icon: 'setting',
              url: '/root/CarouselData/CarouselData',
              catalog: 0
            }
          ]
        },
        {
          label: '课程建设与改革',
          icon: 'location',
          children: [
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '建设规划',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 1
            },
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '教学改革',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 2
            }
          ]
        },
        {
          label: '教学团队',
          icon: 'location',
          children: [
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '主讲教师',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 11
            },
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '师资队伍',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 12
            },
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '师资培养',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 13
            },
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '科研教研',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 14
            },
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '教研活动',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 15
            }
          ]
        },
        {
          label: '教学内容',
          icon: 'location',
          children: [
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '课程介绍',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 21
            },
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '课程大纲',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 22
            },
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '授课进度表',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 23
            },
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '教案',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 24
            },
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: 'PPT',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 25
            },
            {
              path: '/root/VideoData/VideoData',
              name: 'VideoData',
              label: '授课视频',
              icon: 'setting',
              url: '/root/VideoData/VideoData',
              catalog: 26
            },
          ]
        },
        {
          label: '教学条件',
          icon: 'location',
          children: [
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '课程练习',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 31
            },
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '教程参考书',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 32
            },
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '网络资源',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 33
            }
          ]
        },
        {
          label: '教学方法与手段',
          icon: 'location',
          children: [
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '教学准备',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 41
            },
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '教学设计与方法',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 42
            }
          ]
        },
        {
          label: '实训教学',
          icon: 'location',
          children: [
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '课程实训软件',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 51
            },
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '实训指导书',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 52
            },
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '学生实训成果',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 53
            }
          ]
        },
        {
          label: '教学效果',
          icon: 'location',
          children: [
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '学生评教效果资料',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 61
            },
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '学生比赛奖励等',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 62
            },
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '教师获奖',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 64
            },
            {
              path: '/root/ArticleData/ArticleData/:catalog',
              name: 'ArticleData',
              label: '教学成果',
              icon: 'setting',
              url: '/root/ArticleData/ArticleData',
              catalog: 63
            }
          ]
        },
      ]

    }
  },
  methods: {
    //跳转路由 根据名称跳转
    clickMenu(item) {
      //调用vuex的selectMenu方法存储数据
      this.$store.commit('selectMenu', item)
      this.$router.push({ name: item.name, params: { catalog: item.catalog } })
      window.sessionStorage.setItem('activeMenu', item.catalog);
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #ffffff;
    text-align: center;
    line-height: 48px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px; 
  min-height: 400px;
}
</style>
