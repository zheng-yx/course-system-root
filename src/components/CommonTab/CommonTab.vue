<template>
  <div class="tabs">
    <!--closable这里说明rootIndex是不能关闭的-->
    <el-tag
      :key="index"
      size="large"
      v-for="(tag, index) in tags"
      :closable="tag.name !== 'rootIndex'"
      :disable-transitions="false"
      @close="handleClose(tag, index)"
      @click="changeMenu(tag)"
      :effect="tag.catalog == activeMenu ? 'dark' : 'plain'"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
      //获取vuex的标签集合数据
    ...mapState({
      tags: state => state.tab.tabsList,
      activeMenu: state => state.tab.currentMenu.catalog
    }),
  },
  methods: {
    ...mapMutations({
      close: 'closeTab'
    }),
    //关闭标签
    handleClose(tag, index) {
      let length = this.tags.length - 1
      //vuex调方法的另一种写法
      this.close(tag)
      // 如果关闭的标签不是当前路由的话，就不跳转
      if (tag.catalog !== this.$route.params.catalog) {
        return
      }
      // 关闭的标签是最右边的话，往左边跳转一个
      if (index === length) {
        // this.$router.push({ name: this.tags[index - 1].name })
        if(index === 0) {
        }
        this.$router.push({ name: this.tags[index - 1].name, params: { catalog: this.tags[index - 1].catalog } })
      } else {
        // 否则往右边跳转
        this.$router.push({ name: this.tags[index].name })
      }
    },

    //选择标签跳转路由
    changeMenu(item) {
      this.$router.push({ name: item.name, params: { catalog: item.catalog } })
      this.$store.commit('selectMenu', item)
      window.sessionStorage.setItem('activeMenu', item.catalog);
    }
  }
}
</script>