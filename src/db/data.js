let chartData = {
  line: {
    series: [
      {
        name: "vue",
        type: "line",
        data: [6, 10, 10, 20, 10, 30]
      },
      {
        name: "js",
        type: "line",
        data: [10, 10, 20, 5, 20, 36]
      },
      {
        name: "css",
        type: "line",
        data: [25, 20, 10, 20, 36, 10]
      },
      {
        name: "java",
        type: "line",
        data: [19, 20, 36, 40, 10, 20]
      },
      {
        name: "ts",
        type: "line",
        data: [5, 30, 36, 10, 40, 20]
      },
      {
        name: "react",
        type: "line",
        data: [15, 20, 39, 15, 10, 20]
      }
    ],
    xData: ["1月", "2月", "3月", "4月", "5月", "6月"],
    title: "折线图"
  },
  bar: {
    xData: ["周一", "二", "三", "四", "五", "六", "日"],
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        name: "money",
        type: "bar"
      }
    ],
    title: "柱状图"
  },
  bar2: {
    xData: ["周一", "二", "三", "四", "五", "六", "日"],
    series: [
      {
        data: [5, 1, 4, 6, 7, 9, 4],
        name: "新增用户",
        type: "bar"
      },
      {
        data: [2, 1, 5, 6, 6, 7, 4],
        name: "活跃用户",
        type: "bar"
      }
    ],
    title: "柱状图"
  },
  pie: {
    legendData: ["1", "2", "3", "4", "5", "6"],
    series: [
      {
        data: [
          {
            name: "1",
            value: 1
          },
          {
            name: "2",
            value: 2
          },
          {
            name: "3",
            value: 3
          },
          {
            name: "4",
            value: 4
          },
          {
            name: "5",
            value: 5
          },
          {
            name: "6",
            value: 6
          }
        ],
        type: "pie"
      }
    ],
    title: "饼图"
  },
  pie2: {
    legendData: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center"
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "30",
            fontWeight: "bold"
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 335, name: "直接访问" },
          { value: 310, name: "邮件营销" },
          { value: 234, name: "联盟广告" },
          { value: 135, name: "视频广告" },
          { value: 1548, name: "搜索引擎" }
        ]
      }
    ],
    title: "空心 饼图"
  },
  stepLine: {
    series: [
      {
        name: "Step Start",
        type: "line",
        step: "start",
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: "Step Middle",
        type: "line",
        step: "middle",
        data: [220, 282, 201, 234, 290, 430, 410]
      },
      {
        name: "Step End",
        type: "line",
        step: "end",
        data: [450, 432, 401, 454, 590, 530, 510]
      }
    ],
    title: "step Line",
    xData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  }
};

export default {
  chartData
};
