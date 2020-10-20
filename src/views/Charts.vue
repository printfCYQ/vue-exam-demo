<template>
  <div id="app">
    <el-row :gutter="20">
      <!-- 饼图 start-->
      <el-col :span="12" :xs="24">
        <el-card shadow="hover">
          <EChart
            style="height:300px;"
            :chartData="echartData.pie"
            :isAxisChart="false"
          ></EChart>
        </el-card>
      </el-col>
      <!-- 饼图 end-->

      <!-- 折线图 start-->
      <el-col :span="12" :xs="24">
        <el-card shadow="hover">
          <EChart style="height:300px;" :chartData="echartData.line"></EChart>
        </el-card>
      </el-col>
    </el-row>
    <!-- 折线图 end-->

    <el-divider></el-divider>

    <el-row :gutter="20">
      <!-- step line start -->
      <el-col :span="12" :xs="24">
        <el-card shadow="hover">
          <EChart
            style="height:300px;"
            :chartData="echartData.stepLine"
          ></EChart>
        </el-card>
      </el-col>
      <!-- step line end -->

      <!-- 柱状图 start-->
      <el-col :span="12" :xs="24">
        <el-card shadow="hover">
          <EChart style="height:300px;" :chartData="echartData.bar"></EChart>
        </el-card>
      </el-col>
      <!-- 柱状图 end-->
    </el-row>
    <el-divider></el-divider>
    <el-row :gutter="20">
      <!-- 空心 饼图 start-->
      <el-col :span="12" :xs="24">
        <el-card shadow="hover">
          <EChart
            style="height:300px;"
            :chartData="echartData.pie2"
            :isAxisChart="false"
          ></EChart>
        </el-card>
      </el-col>
      <!-- 空心 饼图 end-->

      <!-- 折线图 start-->
      <el-col :span="12" :xs="24">
        <el-card shadow="hover">
          <EChart style="height:300px;" :chartData="echartData.bar2"></EChart>
        </el-card>
      </el-col>
    </el-row>
    <!-- 折线图 end-->
    <!-- 返回顶部 start -->
    <el-backtop target :bottom="100">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #409EFF;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #FFF;
        border-radius: 8px;
      }"
      >
        UP
      </div>
    </el-backtop>
    <!-- 返回顶部 end -->
  </div>
</template>

<script>
import EChart from "../components/EChart";
import ChartData from "../db/data.js";
export default {
  name: "App",
  components: {
    EChart
  },
  data() {
    return {
      echartData: {}
    };
  },
  mounted() {
    // console.log(ChartData);
    this.echartData = ChartData.chartData;
  }
};
</script>
