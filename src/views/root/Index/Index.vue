<template>
  <div class="root-index">
    <el-calendar v-model="value" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: new Date()
    }
  }
}
</script>
<style>
.root-index {
    width: 350px;
    font-size: 10px;
}
.root-index /deep/ .el-calendar__header .el-calendar__button-group .el-button{
    width: 60px;
    font-size: 5px;
}
.root-index /deep/ .el-calendar-table .el-calendar-day {
     height: 30px;
     width: 10px;
     font-size: 5px;
}
</style>
