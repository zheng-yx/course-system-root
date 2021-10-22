<template>
    <el-container style="height: 100%">
        <!--左侧栏-->
        <el-aside width="auto">
            <!--左侧栏控件-->
            <common-aside></common-aside>
        </el-aside>
        <!--右侧栏-->
        <el-container>
            <!--header部分-->
            <el-header>
                <!--header部分控件-->
                <common-header></common-header>
            </el-header>
            <common-tab class="point"></common-tab>
            <el-main>
                <!--左侧栏 和 header部分对于整个后台部分都是不变的，唯一变的就是上面3的部分，这里就通过router-view来展示所需控件-->
                <router-view :key="$route.fullPath" />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import CommonAside from '@/components/CommonAside/CommonAside'
    import CommonHeader from "@/components/CommonHeader/CommonHeader";
    import CommonTab from "@/components/CommonTab/CommonTab";
    export default {
        components: {
            CommonAside,
            CommonHeader,
            CommonTab
        }
    }
</script>
<style lang="scss" scoped>
    .el-header {
        background: black;
    }
    .el-main {
        background: white;
    }
    .el-tag {
        cursor: pointer !important;
    }
    .el-breadcrumb-item {
        cursor: pointer !important;
    }
</style>