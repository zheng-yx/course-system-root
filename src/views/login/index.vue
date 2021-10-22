<template>
</template>

<script>
import db from '@/utils/localstorage'
import axios from 'axios'

  export default {
    created () {
      this.jumptologin()
    },
    methods: {
      jumptologin() {
        this.$get('/login').then((r) => {
          console.log(r)
        })
      }
    }
  }
</script>
<style scoped>
.login{
  border: 1px solid #ccc;
  width: 300px;
  height: 250px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  display: flex;
  align-items: center;
}
.el-form {
  width: 90%;
}
.login-bg {
  width: 100vw;
  height: 100vh;
  background: url("./login.jpg") no-repeat; 
  background-size: cover;
}
</style>
