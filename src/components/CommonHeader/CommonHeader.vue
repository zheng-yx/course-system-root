<template>
    <header>
        <div class="l-content">
            <el-button plain icon="el-icon-menu" size="mini" @click="collapseMenu"></el-button>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <!--很明显 首页 一定是存在的 所以这里直接写死-->
                <el-breadcrumb-item @click.native="clickHome">首页</el-breadcrumb-item>
                <!--第二级菜单名称 就要看左侧组件有没有点击指定菜单，没有那就只显示首页 点击就显示当前菜单名称-->
                <template v-if="current">
                    <el-breadcrumb-item :to="current.catalog" v-if="current.catalog !== 1000">{{current.label}}</el-breadcrumb-item>
                </template>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click" size="mini">
                <span class="el-dropdown-link"><img :src="userImg" class="user"></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <a title="退出" href="login" style="font-size: 13px; color: black" @click.prevent="logOut">退出</a>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                userImg: require('@/assets/images/user.png')
            }
        },
        methods: {
            //控制左侧菜单是否折叠
            collapseMenu() {
                this.$store.commit('collapseMenu')
            },
            clickHome() {
                const item = {
                    path: '/',
                    name: 'rootIndex',
                    label: '首页',
                    icon: 'home',
                    catalog: 1000
                }
                //调用vuex的selectMenu方法存储数据
                // window.sessionStorage.removeItem('activeMenu');
                this.$store.commit('selectMenu', item)
                this.$router.push({ name: item.name, params: { catalog: item.catalog }})
            },
            //退出登陆
            async logOut() {
                const confirmResult = await this.$confirm (
                    '是否确定退出？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).catch((err) => err)
                if (confirmResult !== 'confirm') {
                    return this.$message.info('取消了退出');
                }
                this.$get('/remove').then((r) => {
                    console.log(r)
                    if(r.data.data === "200") {
                        sessionStorage.clear()
                        window.location.href = 'login';
                    } else {
                        this.$message.error('退出失败！')
                    }
                })
            }
        },
        computed: {
          //获取vuex数据的另一种写法
            ...mapState({
                current: state => state.tab.currentMenu
            })
        } 
    }
</script>

<style lang="scss" scoped>
    header {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    }

    .l-content {
        display: flex;
        align-items: center;

        .el-button {
            margin-right: 20px;
        }
    }

    .r-content {
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
</style>

<style lang="scss">
    .el-breadcrumb__item {
        .el-breadcrumb__inner {
            color: #666666;
            font-weight: normal;
        }

        &:last-child {
            .el-breadcrumb__inner {
                color: #ffffff;
            }
        }
    }
    .el-tag {
        margin: 5px;
    }
</style>
