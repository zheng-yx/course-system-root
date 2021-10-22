<template>
    <div>
        <el-button class="filter-item" type="success" plain icon="el-icon-plus" @click="addPhoto">添加图片</el-button>
        <div v-for="(item, value) in imageList" :key="value" class="imageDiv">
            <div slot="error" class="image-slot"></div>
            <el-image :src="item.url" style="width: 100px; height: 100px;" :preview-src-list="imageUrlList"></el-image>
            <el-button
                plain
                size="mini"
                type="warning"
                icon="el-icon-edit"
                @click="editPhoto(item.id)"
            ></el-button>
            <el-button
                plain
                size="mini"
                type="danger"
                icon="el-icon-delete"
                @click="deletePhoto(item.id)"
            ></el-button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            imageList: [],
            imageUrlList: []
        }
    },
    created () {
        this.fetch()
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
                this.imageList = r.data.data.rows
                for(let i = 0; i < this.imageList.length; i++) {
                    this.imageUrlList[i] = this.imageList[i].url
                }
            })
        },
        addPhoto() {
            if(this.imageList.length < 4) {
                this.$router.push({name: 'CarouselOptions1'})
            } else {
                this.$message.error('图片数量已达上限！')
            }
        },
        editPhoto(id) {
            this.$router.push({ name: 'CarouselOptions2', params: { id: id } })
        },
        async deletePhoto(id) {
            const confirmResult = await this.$confirm (
                '此操作将删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).catch((err) => err)
            if (confirmResult !== 'confirm') {
                return this.$message.info('取消了删除');
            }
            const imgIds = id
            this.$delete(`/image/${imgIds}`).then(r => {
                if (r.status === 200) {
                    this.$message.success('删除成功！');
                    this.videoDepository = []
                    this.fetch()
                } else {
                    this.$message.error('删除失败！');
                }
            })
        },
    }
}
</script>
<style lang="scss" scoped>
    .imageDiv {
        margin-top: 20px;
    }
</style>