<template>
    <!-- 内容 -->
    <div>
      <div style="width: 100%;">
        <!-- 查询 -->
        <div class="filter-container">
          <el-input
            v-model="queryParams.title"
            placeholder="标题"
            class="filter-item search-item"
          />
          <el-date-picker
            v-model="queryParams.time"
            type="daterange"
            align="right"
            unlink-panels
            value-format="yyyy-MM-dd"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            class="filter-item date-range-item"
          >
          </el-date-picker>
          <el-button class="filter-item" type="primary" plain icon="el-icon-search" @click="search">搜索</el-button>
          <el-button class="filter-item" type="warning" plain icon="el-icon-refresh" @click="reset">重置</el-button>
          <el-button class="filter-item" type="success" plain icon="el-icon-plus" @click="addArticle">添加文章</el-button>
          <el-button class="filter-item stateButton" :class="{ isClick: isClick }" plain icon="el-icon-refresh" @click="turnArticleState">切换文章状态</el-button>
        </div>
        <!-- 数据 -->
        <el-table
        border
        stripe
        ref="table"
        :data="list"
        style="width: 100%"
        >
        <el-table-column
            prop="title"
            label="标题"
            max-width="400">
        </el-table-column>
        <el-table-column
            prop="updateTime"
            label="更新时间"
            max-width="190">
        </el-table-column>
        <el-table-column
            prop="state"
            label="文章状态"
            max-width="185"
        >
            <template slot-scope="scope">
                <template v-if="scope.row.state === 0">
                    <el-tag type="warning">
                    未发布
                    </el-tag>
                </template>
                <template v-else-if="scope.row.state === 2">
                    <el-tag type="success">
                    已发布
                    </el-tag>
                </template>
                <template v-else>
                    <el-tag type="info">
                    已删除
                    </el-tag>
                </template>
            </template>
        </el-table-column>
        <el-table-column label="操作" max-width="250">
            <template slot-scope="scope">
            <el-button
                plain
                size="mini"
                type="warning"
                icon="el-icon-edit"
                @click="editArticle(scope.row)">编辑</el-button>
            <el-button
                plain
                size="mini"
                type="danger"
                icon="el-icon-delete"
                @click="deleteArticle(scope.row)">删除</el-button>
            </template>
        </el-table-column>
        </el-table>
      </div>
      <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="pagination.page"
      :limit.sync="pagination.count"
      @pagination="search"
      class="pagination"
      />
    </div>
</template>
<script>
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  name: "hh",
  data() {
    return {
      //分页用
      total: 0,
      pagination: {
        page: 1,
        count: 10
      },
      state: 2,
      catalog: 1,
      queryParams: {
      },
      sort: {},
      
      str: ``,
      list: [],
      isClick: false
    };
  },
  created() {
    this.fetch()
  },
  methods: {
    search() {
      this.fetch({
        ...this.queryParams,
        ...this.sort
      })
    },
    fetch(params = {}) {
        this.catalog = this.$route.params.catalog
        this.loading = true
        if(this.catalog !== undefined) {
          params.page = this.pagination.page
          params.count = this.pagination.count
          params.catalog = this.catalog
            params.state = this.state
          this.$get('/selectArticleMessageByPage', {
          ...params,
          }).then(r => {
          const data = r.data.data.rows
          this.total = r.data.data.total
          this.list = data
          for(var i = 0; i < this.list.length; i++) {
            if(this.list[i].updateTime !== '' || this.list[i].updateTime !== null) {
              this.list[i].updateTime = this.list[i].updateTime.substring(0, 10)
            }
          }
          this.loading = false
          })
        }
    },
    addArticle() {
        this.$router.push({ name: 'ArticleOptions1', params: { c_id: this.catalog } })
    },
    editArticle(value) {
        this.$router.push({ name: 'ArticleOptions2', params: { c_id: this.catalog, id: value.id } })
    },
    async deleteArticle(value) {
      const confirmResult = await this.$confirm (
        '此操作将删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch((err) => err)
      if (confirmResult !== 'confirm') {
        return this.$message.info('取消了删除');
      }
      this.$delete(`/deleteArticleByIds`, {
        articleIds: value.id
      }).then(r => {
        if (r.status === 200) {
          this.$message.success('删除成功！');
          this.fetch()
        } else {
          this.$message.error('删除失败！');
        }
      })
    },
    reset() {
      this.queryParams = {
      }
      this.sort = {}
      this.search()
    },
    //切换文章状态0/2
    turnArticleState() {
      if(this.state === 2) {
        this.state = 0
      } else {
        this.state = 2
      }
      this.isClick = true
      this.fetch()
    },
    mouseMove() {
      this.isClick = true
    }
  }
};
</script>
<style lang="scss" scoped>
  .stateButton {
    background-color:	#FFC8B4;
    border: 1px solid #FFA488;
    color: #FF7744;
  }
  .isClick {
    background-color:	#FFA488 !important;
    border: 1px solid #FFA488 !important;
    color: white !important;
  }
</style>
