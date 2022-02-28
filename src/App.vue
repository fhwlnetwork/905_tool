<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <el-row>
      <el-col :span="24">
        <el-row>
          <el-col :span="24"> <header-iput /></el-col> 
        </el-row>
      </el-col>
      <showmessage />
    </el-row>
  </div>
</template>

<script>
import HeaderIput from "./components/HeaderIput.vue";

import Showmessage from "./components/showmessage.vue";

export default {
  name: "App",
  components: {
    HeaderIput,
    Showmessage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-input{
  width: 80%;
}

</style>
