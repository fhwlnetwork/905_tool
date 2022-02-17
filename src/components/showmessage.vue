<template>
  <div>
    设备id:{{ machine }}
    <br>
      上车时间:{{ firsttime }}
      <br>
      下车时间{{this.$store.state.getmessgaeaAbout.secondtime}}
      <br>
      计程公里{{this.$store.state.getmessgaeaAbout.count_kilo}}km
      <br>
      空驶里程{{this.$store.state.getmessgaeaAbout.Air_mileage}}km
       <br>
      附加费{{this.$store.state.getmessgaeaAbout.extra_charge}}元
      <br>
      等待计时时间{{this.$store.state.getmessgaeaAbout.wait_time}}
      <br>
      交易金额{{this.$store.state.getmessgaeaAbout.trading_volume}}

  </div>

</template>

<script>
export default {
  computed: {
    machine() {
         return this.$store.state.getmessgaeaAbout.machine;
    },
    firsttime(){
       return this.$store.state.getmessgaeaAbout.firsttime;
    }
    
  },
};
</script>

<style>
</style>