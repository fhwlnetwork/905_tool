<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">905协议解析</h3>
    <div>
      <el-input
        placeholder="输入你的码流，按回车键确认"
        v-model="datamessage"
        clearable
        @keyup.enter="increment(datamessage)"
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
      datamessage:
        "7e0b0500831035000012344e310000040000000148011462b7044c83b70000002202181705000000040000000328011462a0044c83c100064422021817025958a5108058a5114001000000000000594c54343434303030303030303030303030303030303133353637383930303039303939303039000022021817021703000000000000000000000001000000a3c200357e",
    };
  },
  //测试,记得删除
  created() {
    this.$store.dispatch("getmessgaeaAbout/Change_message", this.datamessage);
  },
  methods: {
    ...mapActions("getmessgaeaAbout", { increment: "Change_message" }),
  },
};
</script>
