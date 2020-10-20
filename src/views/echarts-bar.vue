<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <div style="height: 600px" ref="echart">echart</div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover"></el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["reduceN", "allowedN", "situationN"]
        },
        grid: {
          left: 100
        },
        xAxis: {
          type: "value",
          name: "Days",
          axisLabel: {
            formatter: "{value}"
          },
          min: 0,
          max: 50000,
          splitNumber: 5
        },
        yAxis: {
          type: "category",
          // inverse: true,
          data: []
        },
        series: []
      },
      dataArr: [
        {
          allowedN: 14452,
          allowedP: 38899,
          basin: "1",
          id: 1,
          reduceN: 28566,
          reduceP: 28842,
          situationN: 11885,
          situationP: 19856
        },
        {
          allowedN: 34452,
          allowedP: 58899,
          basin: "2",
          id: 2,
          reduceN: 18566,
          reduceP: 38842,
          situationN: 22222,
          situationP: 19856
        },
        {
          allowedN: 24452,
          allowedP: 38899,
          basin: "3",
          id: 3,
          reduceN: 28566,
          reduceP: 38842,
          situationN: 44885,
          situationP: 19856
        }
      ]
    };
  },
  mounted() {
    var myChart = echarts.init(this.$refs.echart);
    let seriesArr = [];
    let yArr = [];
    seriesArr.push({
      name: "allowedN",
      type: "bar",
      data: []
    }),
      seriesArr.push({
        name: "reduceN",
        type: "bar",
        data: []
      }),
      seriesArr.push({
        name: "situationN",
        type: "bar",
        data: []
      });
    for (let i = 0; i < this.dataArr.length; i++) {
      seriesArr[0].data.push(this.dataArr[i].allowedN);
      seriesArr[1].data.push(this.dataArr[i].reduceN);
      seriesArr[2].data.push(this.dataArr[i].situationN);
      yArr.push(this.dataArr[i].basin);
    }
    let index1 = yArr.indexOf("1");
    yArr.splice(index1, 1, "黄河");

    let index2 = yArr.indexOf("2");
    yArr.splice(index2, 1, "长江");

    let index3 = yArr.indexOf("3");
    yArr.splice(index3, 1, "尼罗河");

    this.option.series = seriesArr;
    this.option.yAxis.data = yArr;
    myChart.setOption(this.option);
  },
  methods: {}
};
</script>
