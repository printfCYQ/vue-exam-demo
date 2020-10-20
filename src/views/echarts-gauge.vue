<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <div style="height: 300px" ref="echart">echart</div>
        </el-card>
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
        title: {
          text: "仪表盘"
        },
        series: [
          {
            type: "gauge",
            center: ["50%", "45%"], // 仪表位置
            radius: "70%", //仪表大小
            startAngle: 170, //开始角度
            endAngle: 10, //结束角度
            axisLine: {
              show: false,
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [
                  [
                    0.5,
                    new echarts.graphic.LinearGradient(
                      0,
                      0,
                      1,
                      0,
                      [
                        {
                          offset: 1,
                          color: "#E75F25" // 50% 处的颜色
                        },
                        {
                          offset: 0.8,
                          color: "#D9452C" // 40% 处的颜色
                        }
                      ],
                      false
                    )
                  ], // 100% 处的颜色
                  [
                    0.7,
                    new echarts.graphic.LinearGradient(
                      0,
                      0,
                      1,
                      0,
                      [
                        {
                          offset: 1,
                          color: "#FFC539" // 70% 处的颜色
                        },
                        {
                          offset: 0.8,
                          color: "#FE951E" // 66% 处的颜色
                        },
                        {
                          offset: 0,
                          color: "#E75F25" // 50% 处的颜色
                        }
                      ],
                      false
                    )
                  ],
                  [
                    0.9,
                    new echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [
                        {
                          offset: 1,
                          color: "#C7DD6B" // 90% 处的颜色
                        },
                        {
                          offset: 0.8,
                          color: "#FEEC49" // 86% 处的颜色
                        },
                        {
                          offset: 0,
                          color: "#FFC539" // 70% 处的颜色
                        }
                      ],
                      false
                    )
                  ],
                  [
                    1,
                    new echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [
                        {
                          offset: 0.2,
                          color: "#1CAD52" // 92% 处的颜色
                        },
                        {
                          offset: 0,
                          color: "#C7DD6B" // 90% 处的颜色
                        }
                      ],
                      false
                    )
                  ]
                ],
                width: 50
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            pointer: {
              //指针样式
              length: 18
            },
            detail: {
              show: false
            }
          },
          {
            type: "gauge",
            center: ["50%", "45%"], // 默认全局居中
            radius: "70%",
            startAngle: 170,
            endAngle: 10,
            axisLine: {
              show: true,
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [
                  //表盘颜色
                  [0.333, "#DA462C"], //0-33.3%处的颜色
                  [0.666, "#FF9618"], //33.3%-66.6%处的颜色
                  [1, "#20AE51"] //90%-100%处的颜色
                ],
                width: 40 //表盘宽度
              }
            },
            splitLine: {
              //分割线样式（及10、20等长线样式）
              //  length : 30,
              //  lineStyle : { // 属性lineStyle控制线条样式
              //      width : 2
              //  }
              show: false
            },
            axisTick: {
              //刻度线样式（及短线样式）
              // length : 20
              show: false
            },
            axisLabel: {
              //文字样式（及“10”、“20”等文字样式）
              //  color : "black",
              //  distance : 5 //文字离表盘的距离
              show: false
            },
            detail: {
              formatter: "{value}",
              offsetCenter: [0, "40%"],
              backgroundColor: "#FFEC45",
              height: 30,
              rich: {
                score: {
                  color: "white",
                  fontFamily: "微软雅黑",
                  fontSize: 32
                }
              }
            },
            data: [
              {
                value: 83,
                label: {
                  textStyle: {
                    fontSize: 12
                  }
                }
              }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    var myChart = echarts.init(this.$refs.echart);
    myChart.setOption(this.option);
  },
  methods: {}
};
</script>
