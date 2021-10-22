<template>
    <!-- 内容 -->
    <div class="home">
      <el-switch
        v-model="articleType"
        active-color="#13ce66"
        inactive-color="#409EFF"
        active-text="图文"
        inactive-text="文件"
        @change="switchChange"
      >
      </el-switch>
      <template v-if="articleType===true">
        <el-form label-position="right" label-width="80px" ref="form" :model="form" :rules="formRules">
          <el-form-item label="文章标题" prop="title">
            <el-col :span="9">
              <el-input v-model="form.title" placeholder="标题"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item prop="content" label="文章内容">
          <div id="demo1" :v-model="form.content"></div>
          </el-form-item>
          <el-form-item label="首页图片" prop="file" v-if="routerc_Id == 11 || routerc_Id == 61 || routerc_Id == 62 || routerc_Id == 62 || routerc_Id == 64">
            <el-upload
                drag
                action=""
                ref="upload"
                class="upload-demo"
                :auto-upload="false"
                accept=".png, .jpg, .jpeg"
                :http-request="httpRequest"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">若需将文章放到首页，请将展示图拖到此处，或<em>点击上传</em></div>
            </el-upload>
          </el-form-item>
          <el-form-item>
          <el-button type="primary" @click="addArticle(2)" plain>
            <template v-if="routerId === undefined">
              添加
            </template>
            <template v-else>
              修改
            </template>
          </el-button>
          <el-button type="warning" plain @click="addArticle(0)">保存至草稿</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template v-else>
        <template>
          <el-form label-position="right" :model="fileForm" ref="fileForm" :rules="fileFormRules">
              <el-form-item label="标题" prop="title">
                <el-col :span="9">
                  <el-input v-model="fileForm.title" ></el-input>  
                </el-col>
              </el-form-item>
              <el-form-item label="文件" prop="file">
                  <el-upload
                    drag
                    action=""
                    ref="fileUpload"
                    class="upload-demo"
                    :auto-upload="false"
                    :accept="uploadAccept"
                    :http-request="fileHttpRequest"
                    :on-change="fileChange"
                    :multiple="false"
                  >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  </el-upload>
              </el-form-item>
          <el-form-item label="首页图片" prop="file" v-if="routerc_Id == 11 || routerc_Id == 61 || routerc_Id == 62 || routerc_Id == 62 || routerc_Id == 64">
            <el-upload
                drag
                action=""
                ref="upload"
                class="upload-demo"
                :auto-upload="false"
                accept=".png, .jpg, .jpeg"
                :http-request="httpRequest"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">若需将文章放到首页，请将展示图拖到此处，或<em>点击上传</em></div>
            </el-upload>
          </el-form-item>
              <template v-if="routerId === undefined">
                <el-form-item>
                    <el-button type="primary" plain @click="addFile(2)">上传</el-button>
                    <el-button type="warning" plain @click="addFile(0)">保存至草稿</el-button>
                </el-form-item>
              </template>
              <template v-else>
                <el-form-item>
                    <el-button type="primary" plain @click="editFile(2)">修改</el-button>
                    <el-button type="warning" plain @click="editFile(0)">保存至草稿</el-button>
                </el-form-item>
              </template>
          </el-form>
        </template>
      </template>
    </div>
</template>
<script>
import wangEditor from 'wangeditor'
export default {
  name: "hh",
  data() {
    return {
        list: [],
        editor: null,
        editorData: '',
        form: {},
        str: '',
        routerId: -1,
        routerc_Id: -1,
        imgFile: [],
        //文章是图文还是文件
        articleType: true,
        fileData: [],
        file:[],
        uploadAccept: '',
        fileForm: {},
        //文章表单规则
        formRules: {
          title: [
            { required: true, message: "标题不能为空", trigger: "change" }
          ]
        },
        //文件表单规则
        fileFormRules: {
          title: [
            { required: true, message: "标题不能为空", trigger: "change" }
          ]
        }
    };
  },
  created() {
    this.getRouterParams()
  },
  mounted(){
    this.editorCreate()
  },
  methods: {
    search() {
      this.fetch({
        ...this.queryParams,
        ...this.sort
      })
    },
    getRouterParams() {
      this.routerId = this.$route.params.id
      this.routerc_Id = this.$route.params.c_id
      if(this.routerc_Id === 25) {
        this.uploadAccept = '.ppt, .pptx'
      } else {
        this.uploadAccept = '.pdf'
      }
      if(this.routerId !== undefined) {
        this.$get('/queryArticleContent', {
          articleId: this.routerId
        }).then((r) => {
          this.form = r.data
          this.str = r.data.content
          this.editor.txt.html(this.str)
        })
      }
    },
    httpRequest(param) {
      this.imgFile.push(param.file);
      // 一般情况下是在这里创建FormData对象，但我们需要上传多个文件，为避免发送多次请求，因此在这里只进行文件的获取，param可以拿到文件上传的所有信息
    },
    //添加，修改文章
    addArticle(state) {
      this.$refs.form.validate(valid => {
        if (valid) {
          if(this.form.content === undefined || this.form.content === '') {
            this.$message.error("请输入文章内容！")
            return
          }
          let formData = new FormData()
          if(this.routerc_Id == 11 || this.routerc_Id == 61 || this.routerc_Id == 62 || this.routerc_Id == 63 || this.routerc_Id == 64) {
            console.log("111")
            this.$refs.upload.submit();
            if(this.imgFile.length !== 0) {
              // 这里是执行文件上传的函数，其实也就是获取我们要上传的文件
              this.imgFile.forEach(function (file) {
                // 因为要上传多个文件，所以需要遍历
                formData.append('imgFile', file, file.name);
              })
            }
          }
          formData.append('title', this.form.title); 
          formData.append('c_id', this.routerc_Id); 
          formData.append('state', state); 
          formData.append('content', this.form.content); 
          if(this.articleType === true) {
            formData.append('sort', 1); 
          } else {
            formData.append('sort', 2); 
          }
          if(this.routerId === undefined) {
              //新增图片
              this.$axios({
              method: "POST",
              url: '/addArticle',
              headers: {'Content-Type': 'multipart/form-data'},
              data: formData
              }).then((r) => {
                console.log(r)
              if(r.status === 200) {
                  this.$message.success("添加成功");
                  this.$router.push({name: 'ArticleData', params: { catalog: this.routerc_Id }})
              } else {
                  this.$message.error('添加失败');
              }
              })
              .catch((e) => {
              this.$message.error('添加失败')
              return false;
              })
          } else {
              formData.append('id', this.routerId);
              this.$axios({
              method: "PUT",
              url: '/updateArticle',
              headers: {'Content-Type': 'multipart/form-data'},
              data: formData
              }).then((r) => {
                console.log(r)
              if(r.status === 200) {
                this.$message.success("修改成功");
                this.$router.push({name: 'ArticleData', params: { catalog: this.routerc_Id }})
              } else {
                this.$message.error('修改失败');
                this.clearUpload()
              }
              })
              .catch((e) => {
                this.$message.error('修改失败')
                this.clearUpload()
              return false;
              })
          }
        }
      })
    },
    // 文件状态改变时的钩子
    fileChange(file, fileList) {
      this.fileForm.file = file.raw
    },
    fileHttpRequest(param) {
        this.file.push(param.file);
        // 一般情况下是在这里创建FormData对象，但我们需要上传多个文件，为避免发送多次请求，因此在这里只进行文件的获取，param可以拿到文件上传的所有信息
    },
    //提交文件
    addFile(value) {
      this.$refs.fileForm.validate(valid => {
        if (valid) {
          let formData = new FormData()
          if(this.routerc_Id == 11 || this.routerc_Id == 61 || this.routerc_Id == 62 || this.routerc_Id == 63 || this.routerc_Id == 64) {
            console.log("111")
            this.$refs.upload.submit();
            if(this.imgFile.length !== 0) {
              // 这里是执行文件上传的函数，其实也就是获取我们要上传的文件
              this.imgFile.forEach(function (file) {
                // 因为要上传多个文件，所以需要遍历
                formData.append('imgFile', file, file.name);
              })
            }
          }
          this.$refs.fileUpload.submit();
          // 这里是执行文件上传的函数，其实也就是获取我们要上传的文件    
          this.file.forEach(function (file) {
            // 因为要上传多个文件，所以需要遍历
            formData.append('pdfFile', file, file.name);
          })
          if(formData.get('pdfFile') === null) {
            this.$message.error("请上传文件！")
            return
          }
          formData.append('c_id', this.routerc_Id);
          formData.append('state', value);
          formData.append('title', this.fileForm.title);
          if(this.articleType === true) {
            formData.append('sort', 1);
          } else {
            formData.append('sort', 2);
          }
          this.$axios({
            method: "POST",
            url: '/addArticle',
            header: {'Content-Type': 'multipart/form-data'},
            data: formData
          }).then((r) => {
            console.log(r)
            if(r.status === 200) {
              this.$message.success("上传成功");
              this.$router.push({name: 'ArticleData', params: { catalog: this.routerc_Id }})
            } else {
            this.$message.error(r.data.msg);
            }
          })
          .catch((e) => {
            this.$message.error('上传失败')
            this.clearUpload()
            return false;
          })
        } else {
          return false;
        }
      });
    },
    //编辑文件
    editFile(value) {
      let formData = new FormData()
      if(this.routerc_Id === '11' || this.routerc_Id === '61' || this.routerc_Id === '62' || this.routerc_Id === '63' || this.routerc_Id === '64') {
        this.$refs.upload.submit();
        if(this.imgFile.length !== 0) {
          // 这里是执行文件上传的函数，其实也就是获取我们要上传的文件
          this.imgFile.forEach(function (file) {
            // 因为要上传多个文件，所以需要遍历
            formData.append('imgFile', file, file.name);
          })
        }
      }
      if(this.file.length !== 0) {
        this.$refs.fileUpload.submit();
        // 这里是执行文件上传的函数，其实也就是获取我们要上传的文件    
        this.file.forEach(function (file) {
          // 因为要上传多个文件，所以需要遍历
            formData.append('pdfFile', file, file.name);
        })
      }
      formData.append('id', this.routerId);
      formData.append('c_id', this.routerc_Id);
      formData.append('state', value);
      formData.append('title', this.fileForm.title);
      if(this.articleType === true) {
        formData.append('sort', 1); 
      } else {
        formData.append('sort', 2); 
      }
      this.$axios({
          method: "PUT",
          url: '/updateArticle',
          header: {'Content-Type': 'multipart/form-data'},
          data: formData
      }).then((r) => {
          if(r.status === 200) {
              this.$message.success("修改成功");
              this.$router.push({name: 'ArticleData', params: { catalog: this.routerc_Id }})
          } else {
          this.$message.error(r.data.msg);
          }
      })
      .catch((e) => {
          this.$message.error('修改失败')
          this.clearUpload()
          return false;
      })
    },
    //清除上传文件
    clearUpload() {
      this.imgFile = []
      this.file = []
      this.$refs.upload.clearFiles();
      if(this.$refs.fileUpload !== undefined) {
        this.$refs.fileUpload.clearFiles();
      }
      this.form = {}
      this.fileForm = {}
    },
    //检测开关改变
    switchChange() {
      this.clearUpload()
      if(this.articleType === true) {
        //图文
        this.$nextTick(function() {
          this.editorCreate()
        })
      } else {
        //文件
        this.editorDestroy()
      }
    },
    //创建富文本编辑器
    editorCreate() {
      const editor = new wangEditor(`#demo1`)
      editor.config.zIndex = 1
      editor.config.height = 390
      editor.config.uploadImgShowBase64 = true
      // 配置 onchange 回调函数，将数据同步到 vue 中
      editor.config.onchange = (newHtml) => {
        this.form.content = newHtml
        this.str = newHtml
      }
      // 创建编辑器
      editor.create()
      this.editor = editor
    },
    //销毁富文本编辑器
    editorDestroy() {
      this.editor.destroy()
      this.editor = null
    }
  }
};
</script>
<style lang="scss" scoped>
  .home {
    width: 100%;
    margin: auto;
    position: relative;
  }
  .home h3 {
    margin: 30px 0 15px;
  }
  .el-switch {
    margin: 20px 0;
  }
</style>
