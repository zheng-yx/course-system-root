<template>
  <!-- 内容 -->
  <div class="home">
    <el-form label-position="right" label-width="80px" :model="form" ref="form" :rules="formRules">
      <el-form-item label="视频名称" prop="name">
        <el-col :span="8">
          <el-input v-model="form.name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="视频简述">
        <el-col :span="8">
          <el-input v-model="form.detail"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="更多信息">
        <el-col :span="8">
          <el-input v-model="form.more"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="视频章节" prop="kId">
        <el-col :span="8">
          <el-select v-model="form.kId" clearable placeholder="请选择" prop="kId">
            <el-option
              v-for="item in videoChapter"
              :key="item.kid"
              :label="item.name"
              :value="item.kid"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="主讲老师">
        <el-col :span="8">
          <el-input v-model="form.teacher" prop="teacher"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="封面">
        <el-upload
          drag
          action=""
          ref="photoUpload"
          class="upload-demo"
          accept=".jpg,.png,.jpeg"
          :multiple="false"
          :auto-upload="false"
          :on-change="photoChange"
          :http-request="httpRequestPhoto"
        >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-form-item>
      <el-form-item label="视频" prop="videoFile">
        <el-upload
          drag
          action=""
          ref="videoUpload"
          class="upload-demo"
          accept=".mp4"
          :multiple="false"
          :auto-upload="false"
          :on-change="videoChange"
          :http-request="httpRequestVideo"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" plain @click="addVideo(2)">
        <template v-if="routerVid === undefined">
          添加
        </template>
        <template v-else>
          修改
        </template>
      </el-button>
      <el-button type="warning" plain @click="addVideo(0)">保存至草稿</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "hh",
  data() {
    return {
      list: [],
      editor: null,
      editorData: '',
      form: {},
      // 验证规则
      formRules: {
        name: [
          { required: true, message: '请填写视频名称！', trigger: 'blur' },
        ],
        kId: [
          { required: true, message: '请填写视频章节！', trigger: 'blur' },
        ],
        videoFile: [
          { required: true, message: '请上传视频！', trigger: 'blur' },
        ],
      },
      str: '',
      routerId: -1,
      fileList: [],
      fd: {},
      imgFile: [],
      videoFile: [],
      //视频章节
      videoChapter: []
    };
  },
  created() {
    this.getRouterVid()
    this.getVideoByVid()
    this.getVideoChapter()
  },
  methods: {
     //获取上一页传来的数据
    getRouterVid() {
      this.routerVid = this.$route.params.vid
    },
    //根据上一页数据渲染修改页面
    getVideoByVid() {
      if(this.routerVid !== undefined) {
        this.$get('/video', {
          vId: this.routerVid
        }).then((r) => {
          const data = r.data.data
          this.form = data
          this.form.kId = data.kid
        })
      }
    },
    //获取视频章节
    getVideoChapter() {
      this.$get('/coursecatalog').then(r => {
        const data = r.data.data
        this.videoChapter = data
      })
    },
    // 文件状态改变时的钩子
    photoChange(file, fileList) {
      this.form.imgFile = file.raw
    },
    videoChange(file, fileList) {
      this.form.videoFile = file.raw
    },
    httpRequestPhoto(param) {
      this.imgFile.push(param.file);
      // 一般情况下是在这里创建FormData对象，但我们需要上传多个文件，为避免发送多次请求，因此在这里只进行文件的获取，param可以拿到文件上传的所有信息
    },
    httpRequestVideo(param) {
      this.videoFile.push(param.file);
    },
    //提交
    addVideo(value) {
      this.$refs.form.validate(valid => {
        if (valid) {
          let formData = new FormData()
          this.$refs.photoUpload.submit();
          this.$refs.videoUpload.submit();
          // 这里是执行文件上传的函数，其实也就是获取我们要上传的文件    
          this.imgFile.forEach(function (file) {
            // 因为要上传多个文件，所以需要遍历
              formData.append('imgFile', file, file.name);
          })
          this.videoFile.forEach(function (file) {
            // 因为要上传多个文件，所以需要遍历
              formData.append('videoFile', file, file.name);
          })
          formData.append('state', value); 
          formData.append('name', this.form.name);
          formData.append('detail', this.form.detail);
          formData.append('more', this.form.more);
          formData.append('kId', this.form.kId);
          formData.append('teacher', this.form.teacher);
          if(this.routerVid === undefined) {
            this.$axios({
            method: "POST",
            url: '/video',
            headers: {'Content-Type': 'multipart/form-data'},
            data: formData
            }).then((response) => {
              if(response.status === 200) {
                this.$message.success("上传成功");
                this.$router.go(-1)
              } else {
                this.$message.error('上传失败');
              }
            })
            .catch((e) => {
              this.$message.error('上传失败')
              return false;
            })
          } else {
            formData.append('vId', this.routerVid);
            this.$axios({
            method: "PUT",
            url: '/video',
            headers: {'Content-Type': 'multipart/form-data'},
            data: formData
            }).then((response) => {
              if(response.status === 200) {
                this.$message.success("上传成功");
                this.$router.go(-1)
              } else {
                this.$message.error('上传失败');
              }
            })
            .catch((e) => {
              this.$message.error('上传失败')
              return false;
            })
          }
        }
      })
    },
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
</style>
