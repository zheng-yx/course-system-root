export default {

  //存储数据
  state: {
    isCollapse: false,
    //当前菜单
    currentMenu: {
        path: '/',
        name: 'rootIndex',
        label: '首页',
        icon: 'home',
        catalog: 1000
    },
    tabsList: [
        {
            path: '/',
            name: 'rootIndex',
            label: '首页',
            icon: 'home',
            catalog: 1000
        }
    ]
  },
  //调用方法
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    selectMenu(state, val) {
      //如果点击应该是首页的话 要把这份数据清空 因为头部组件已经把首页写死了 只有点击不是首页菜单才存储当前菜单
    //  if (val.name === 'rootIndex') {
    //   state.currentMenu = null
    //  } else {
      state.currentMenu = val
      //如果等于-1说明tabsList不存在那么插入，否则什么都不做
      let result = state.tabsList.findIndex(item => item.catalog === val.catalog)
      result === -1 ? state.tabsList.push(val) : ''
    //  }
    },
    //关闭标签
    closeTab(state, val) {
      let result = state.tabsList.findIndex(item => item.catalog === val.catalog)
      state.tabsList.splice(result, 1)
    },
  },
  actions: {}
}
