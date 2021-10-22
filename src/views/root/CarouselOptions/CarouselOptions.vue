<template>
    <div>
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
            <div class="el-upload__text">将封面图片拖到此处，或<em>点击上传</em></div>
        </el-upload>
        <el-button type="primary" plain @click="addVideo">
            <template v-if="id === undefined">
              添加
            </template>
            <template v-else>
              修改
            </template>
        </el-button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            fileList: [],
            fileListLength: 0,
            imgFile: [],
            hideupload: false,
            id: 0,
            form: {},
        }
    },
    created () {
      if(this.$route.params.id !== undefined) {
        this.id = this.$route.params.id
      }
    },
    methods: {
        fetch() {
            const params = {
                pageNum: 1,
                pageSize: 100
            }
            this.$get('/image/list', {
                ...params
            }).then((r) => {
            })
        },
        httpRequest(param) {
            this.imgFile.push(param.file);
            // 一般情况下是在这里创建FormData对象，但我们需要上传多个文件，为避免发送多次请求，因此在这里只进行文件的获取，param可以拿到文件上传的所有信息
        },
        //提交
        addVideo() {
            let formData = new FormData()
            this.$refs.upload.submit();
            // 这里是执行文件上传的函数，其实也就是获取我们要上传的文件    
            this.imgFile.forEach(function (file) {
                // 因为要上传多个文件，所以需要遍历
                formData.append('img', file, file.name);
            })
            if(formData.get('img') === null) {
                this.$message.error("请添加图片！")
                return false
            }
            formData.append('state', 2); 
            if(this.id === 0) {
                //新增图片
                this.$axios({
                method: "POST",
                url: '/image',
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
                formData.append('id', this.id);
                this.$axios({
                method: "PUT",
                url: '/image',
                headers: {'Content-Type': 'multipart/form-data'},
                data: formData
                }).then((response) => {
                if(response.status === 200) {
                    this.$message.success("修改成功");
                    this.$router.go(-1)
                } else {
                    this.$message.error('修改失败');
                }
                })
                .catch((e) => {
                this.$message.error('修改失败')
                return false;
                })
            }
        },
    }
}
</script>
<style lang="scss" scoped>
    .el-image {
        margin-top: 20px;
    }
</style>