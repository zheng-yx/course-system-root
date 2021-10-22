<template>
    <div>
      <div class="filter-container">
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
        <el-button class="filter-item" type="success" plain icon="el-icon-plus" @click="addVideo">添加视频</el-button>
        <el-button class="filter-item stateButton" :class="{ isClick: isClick }" plain icon="el-icon-refresh" @click="turnArticleState">切换文章状态</el-button>
        <el-button class="filter-item" style="background-color:	#CCCCFF; border: 1px solid #CCAAFF" plain icon="el-icon-folder-add" @click="showCatalog()">添加章节</el-button>
      </div>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item v-for="(item, value) in videoChapter" :key="value" :name="item.kid">
          <template slot="title">
            <h2>第 {{ value + 1 }} 章 {{item.name}}</h2>
            <el-button type="warning" plain icon="el-icon-edit" circle size="mini" class="titlebutton" @click.stop="showCatalog(item.kid)"></el-button>
            <el-button type="danger" plain icon="el-icon-delete" circle size="mini" class="titlebutton" @click.stop="deleteCatalog(item.kid)"></el-button>
          </template>
          <el-table
            stripe
            border
            style="width: 100%"
            :data="tableData"
          >
            <el-table-column
              prop="name"
              label="视频名称"
              width="140">
            </el-table-column>
            <el-table-column
              prop="detail"
              label="视频简介"
              width="180">
            </el-table-column>
            <el-table-column
              prop="more"
              label="视频详情">
            </el-table-column>
            <el-table-column
              prop="updateTime"
              label="更改时间"
              width="140"
              >
              <template slot-scope="scope">
                {{ scope.row.updateTime.substring(0, 10) }}
              </template>
            </el-table-column>
            <el-table-column
              prop="teacher"
              label="授课老师"
              width="100">
            </el-table-column>
            <el-table-column
              prop="state"
              label="发布状态"
              width="100"
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
                    @click="editVideo(scope.row)"></el-button>
                <el-button
                    plain
                    size="mini"
                    type="danger"
                    icon="el-icon-delete"
                    @click="deleteVideo(scope.row)"></el-button>
                </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
      <!-- 添加章节对话框 -->
      <el-dialog
        center
        top="40vh"
        width="30%"
        destroy-on-close
        @close="dialogClose"
        :title="dialogTitle + '章节'"
        :visible.sync="dialogVisible"
      >
        <el-form>
          <el-form-item>
            <el-input v-model="name" placeholder="章节名"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="catalogOptions(dialogTitle)">{{ dialogTitle }}</el-button>
        </span>
      </el-dialog>
  </div>
</template>
<script>
export default {
  name: "hh",
  data() {
    return {
      //默认打开的面板
      activeName: 1,
      state: 2,
      //获取所有章节名
      videoChapter: [],
      //获取所有视频信息
      videoDepository: [],
      
      sort: {},
      queryParams: {
      },
      //对话框
      dialogVisible: false,
      dialogTitle: '',
      name: '',
      kid: -1,
      flag: false,

      //按钮颜色
      isClick: false
    }
  },
  methods: {
    search() {
      this.fetch({
        ...this.queryParams,
        ...this.sort
      })
    },
    fetch(params = {}) {
      this.$get('/coursecatalog').then(r => {
        const data1 = r.data.data
        this.videoChapter = data1
        for(var i = 0; i < data1.length; i++) {
          if(data1[i].kid !== '' || data1[i].kid !== null) {
            const params = {
              state: 2,
              kId: data1[i].kid,
              pageNum: 1,
              pageSize: 100
            }
            this.$get('/video/list', {
              ...params
            }).then(r => {
              const data2 = r.data.data.rows
              for(var j = 0; j < data2.length; j++) {
                this.videoDepository.push(data2[j])
                }
            })
          }
        }
      this.loading = false
      })
    },
    addVideo() {
      this.$router.push({ name: 'VideoOptions1' })
    },
    editVideo(value) {
      this.$router.push({ name: 'VideoOptions2', params: { vid: value.vid } })
    },
    async deleteVideo(value) {
      const confirmResult = await this.$confirm (
        '此操作将删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch((err) => err)
      if (confirmResult !== 'confirm') {
        return this.$message.info('取消了删除');
      }
      const videoIds = value.vid
      this.$delete(`/video/${videoIds}`).then(r => {
        if (r.status === 200) {
          this.$message.success('删除成功！');
          this.videoDepository = []
          this.search()
        } else {
          this.$message.error('删除失败！');
        }
      })
    },
    showCatalog(kid) {
      this.dialogVisible = true
      if(kid !== undefined) {
        // 修改章节
        this.dialogTitle = '修改'
        this.kid = kid
        this.$get('/coursecatalog').then((r) => {
          const data = r.data.data
          for(let i = 0; i < data.length; i++) {
            if(data[i].kid === kid) {
              this.name = data[i].name
              break
            }
          }
        })
      } else {
        // 添加章节
        this.dialogTitle = '添加'
      }
    },
    catalogOptions(title) {
      this.dialogVisible = false
      this.name = this.name.trim()
      if(this.name.length !== 0) {
        this.$get('/coursecatalog').then((r) => {
          const data = r.data.data
          for(let i = 0; i < data.length; i++) {
            if(data[i].name === this.name) {
              this.name = data[i].name
              this.flag = true
              break
            }
          }
        })
      } else {
        this.$message.error("请输入章节名！")
        return
      }
      if(title === '添加') {
          if(!this.flag) {
            this.$post('/coursecatalog', {
              name: this.name
            }).then((r) => {
              if(r.status === 200) {
                this.$message.success("添加成功")
                this.videoDepository = []
                this.search()
              } else {
                this.$message.error("添加失败")
              }
            })
          } else {
            this.$message.error("添加失败，已有同名章节")
          }
      } else {
        if(this.name !== '' || this.name !== null) {
          if(!this.flag) {
            this.$put('/coursecatalog', {
              name: this.name,
              kId: this.kid
            }).then((r) => {
              if(r.status === 200) {
                this.$message.success("修改成功")
                this.videoDepository = []
                this.search()
              } else {
                this.$message.error("修改失败")
              }
            })
          } else {
            this.$message.error("修改失败，已有同名章节")
          }
        }
      }
    },
    async deleteCatalog(kid) {
      const confirmResult = await this.$confirm (
        '此操作将删除该章节, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch((err) => err)
      if (confirmResult !== 'confirm') {
        return this.$message.info('取消了删除');
      }
      this.$delete(`/coursecatalog/${kid}`).then((r) => {
        if(r.status === 200) {
          this.$message.success('删除成功！')
          this.videoDepository = []
          this.search()
        } else {
          this.$message.error('删除失败！')
        }
      })
    },
    dialogClose() {
      this.name = ''
      this.kid = -1
      this.flag = false
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
      this.videoDepository = []
      this.fetch()
    }
  },
  created() {
    this.fetch()
  },
  computed: {
    tableData() {
      return this.videoDepository.filter(item => item.kid === this.activeName)
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
