<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">905协议解析</h3>
    <div>
      <el-input
        placeholder="输入你的码流，按回车键确认"
        v-model="datamessage"
        clearable
        @keyup.enter.native="add()"
      >
      </el-input>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "HeaderInput",
  data() {
    return {
      datamessage: "输入码流",
    };
  },
  //测试,记得删除
  // created() {
  //   this.$store.dispatch("getmessgaeaAbout/Change_message", this.datamessage);
  // },
  methods: {
    add() {
      let top = this.datamessage.substr(0, 6);
  
      this.$store.commit("getmessgaeaAbout/designDemo", top);
      switch (top) {
        //运营数据转换
        case "7e0b05":
          this.$store.dispatch(
            "getmessgaeaAbout/Change_message",
            this.datamessage
          );
          break;
        //人脸识别转换
        case "7e8bd2":
         this.$store.dispatch(
            "BodyFaceAbout/Change_message",
            this.datamessage
          );
          break;
        default:BodyFaceAbout
          //这里是没有找到对应的值处理
          console.log("welcome,66666");
          break;
      }
    },
  },
};
</script>
<style scoped>
.el-input{
  width: 80%;
}
</style>
