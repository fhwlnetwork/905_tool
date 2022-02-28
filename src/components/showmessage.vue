<template>
  <div>
    <el-col :span="24" v-if="top === '7e0b05'">
      <el-col :span="12"
        ><el-card class="box-card" style="float: left; margin-top: 50px">
          <div class="text item">
            {{ "设备id: " + machine }}
          </div>
          <div class="text item">
            {{ "上车时间: " + first_time }}
          </div>
          <div class="text item">
            {{ "下车时间::" + second_time }}
          </div>
        </el-card></el-col
      >
      <el-col :span="12">
        <el-card
          class="box-card"
          style="float: left; margin-left: 100px; margin-top: 50px"
        >
          <div class="text item">
            {{
              "计程公里: " +
              this.$store.state.getmessgaeaAbout.count_kilo +
              "km"
            }}
          </div>
          <div class="text item">
            {{
              "空驶里程: " +
              this.$store.state.getmessgaeaAbout.Air_mileage +
              "km"
            }}
          </div>
          <div class="text item">
            {{
              "交易金额::" +
              this.$store.state.getmessgaeaAbout.trading_volume +
              "元"
            }}
          </div>
        </el-card>
      </el-col>
    </el-col>
    <el-col :span="24" v-else-if="top === '7e8bd2'">
      <el-col :span="12">
        <el-card class="box-card" style="float: left; margin-top: 50px">
          <div class="text item">
            {{ "设备id: " + machine }}
          </div>
          <div class="text item">
            {{ "比对结果: " + comparison }}
          </div>
          <div class="text item">
            {{ "业务类型::" + type_service }}
          </div>
          <div class="text item">
            {{ "相似度:" + similate }}
          </div>
          <div class="text item">
            {{ "通道号:" + chanel }}
          </div>
        </el-card>
        </el-col>
    </el-col>
    <el-col v-else> 输入信息回车后解析</el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comparison: "等待输入",
      type_service: "",
    };
  },
  computed: {
    machine() {
      this.changetime();
      return this.$store.state.getmessgaeaAbout.machine;
    },
    first_time() {
      return this.$store.state.dateChangeAbout.first_time;
    },
    second_time() {
      return this.$store.state.dateChangeAbout.second_time;
    },
    top() {
      this.face();
      return this.$store.state.getmessgaeaAbout.top;
    },
    //相似度 范围0---100
    similate() {
      return this.$store.state.BodyFaceAbout.similate;
    },
    //通道号
    chanel() {
      return this.$store.state.BodyFaceAbout.chanel;
    },
  },

  methods: {
    //格式化时间
    changetime() {
      let first_time = this.$store.state.getmessgaeaAbout.firsttime;
      let second_time = this.$store.state.getmessgaeaAbout.secondtime;
      this.$store.dispatch("dateChangeAbout/dataChange", [
        first_time,
        second_time,
      ]);
    },
    //人脸比对
    face() {
      //比对结果 0:比对成功，1比对失败
      let comparisons = this.$store.state.BodyFaceAbout.comparison;
      if (comparisons == "00") {
        this.comparison = true;
      } else {
        this.comparison = false;
      }
      //业务类型 0:签到，1：动态查岗
      let type_service = this.$store.state.BodyFaceAbout.type_service;
      if (comparisons == "00") {
        this.type_service = "签到";
      } else if (comparisons == "01") {
        this.type_service = "动态查岗";
      } else {
        this.type_service = "未知，参考协议";
      }
    },
  },
};
</script>

<style scoped>
.text {
  font-size: 14px;
  text-align: left;
}

.item {
  padding: 18px 0;
}
.el-col-24{

  margin-left: 10%;
}

.box-card {
  width: 480px;
}
</style>