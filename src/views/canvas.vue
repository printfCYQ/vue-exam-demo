<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <canvas width="300" height="300" id="canvas"></canvas>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <canvas width="300" height="300" id="canvas1"></canvas>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // deg:305
      deg: 340
      // deg:20
      // deg:55
    };
  },
  mounted() {
    this.run();
    setInterval(this.run, 1000);

    this.run1(this.deg);
  },
  methods: {
    run() {
      let canvas = document.getElementById("canvas1");
      let clock = canvas.getContext("2d");
      // 获取时间
      let date = new Date();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let hours = date.getHours();
      hours = hours + minutes / 60;

      clock.clearRect(0, 0, 300, 300); //清空画布
      clock.strokeStyle = "#325FA2"; //边框颜色
      clock.lineWidth = "14"; //边框宽度
      clock.beginPath();
      clock.arc(150, 150, 140, 0, 2 * Math.PI); //画圆
      clock.closePath();
      clock.stroke();

      // 时
      for (let i = 0; i < 12; i++) {
        clock.save(); //保存当前环境的状态
        clock.beginPath();
        clock.lineWidth = "8";
        clock.lineJoin = "round"; //两条线相交时，所创建的拐角类型
        clock.strokeStyle = "black";
        clock.translate(150, 150); //重新映射画布上的 (0,0) 位置
        clock.rotate((i * 30 * Math.PI) / 180);
        clock.beginPath();
        clock.moveTo(0, -120);
        clock.lineTo(0, -100);
        clock.closePath();
        clock.stroke();
        clock.restore(); //返回之前保存过的路径状态和属性
      }

      //分
      for (let i = 0; i < 60; i++) {
        clock.save();
        clock.lineWidth = "4";
        clock.strokeStyle = "black";
        clock.lineJoin = "round";
        clock.translate(150, 150);
        clock.rotate((i * 6 * Math.PI) / 180);
        clock.beginPath();
        clock.moveTo(0, -120);
        clock.lineTo(0, -117);
        clock.closePath();
        clock.stroke();
        clock.restore();
      }

      // 时针
      clock.save();
      clock.lineWidth = "14";
      clock.strokeStyle = "black";
      clock.lineJoin = "round";
      clock.translate(150, 150);
      clock.rotate((hours * 30 * Math.PI) / 180);
      clock.beginPath();
      clock.moveTo(0, -80);
      clock.lineTo(0, 20);
      clock.closePath();
      clock.stroke();
      clock.restore();

      // 分针
      clock.save();
      clock.lineWidth = 10;
      clock.strokeStyle = "black";
      clock.lineJoin = "round";
      clock.translate(150, 150);
      clock.rotate((minutes * 6 * Math.PI) / 180);
      clock.beginPath();
      clock.moveTo(0, -112);
      clock.lineTo(0, 28);
      clock.closePath();
      clock.stroke();
      clock.restore();

      //秒针
      clock.save();
      clock.lineWidth = 6;
      clock.strokeStyle = "red";
      clock.translate(150, 150);
      clock.rotate((seconds * 6 * Math.PI) / 180);
      clock.beginPath();
      clock.moveTo(0, -83);
      clock.lineTo(0, 30);
      clock.closePath();
      clock.stroke();

      clock.fillStyle = "red";
      clock.lineJoin = "round";
      clock.beginPath();
      clock.arc(0, 0, 10, 0, 360, false);
      clock.closePath();
      clock.fill();
      clock.stroke();
      clock.beginPath();
      clock.arc(0, -96, 10, 0, 360, false);
      clock.closePath();
      clock.stroke();
      clock.restore();
    },

    run1(deg) {
      let canvas = document.getElementById("canvas");
      let clock = canvas.getContext("2d");
      clock.clearRect(0, 0, 300, 300); //清空画布
      clock.strokeStyle = "#028E0D"; //边框颜色
      clock.lineWidth = "30"; //边框宽度
      clock.shadowBlur = 1;
      clock.shadowColor = "black";
      clock.beginPath();

      clock.arc(150, 180, 140, 1.17 * Math.PI, 1.34 * Math.PI); //画圆
      clock.stroke();
      clock.save();

      clock.strokeStyle = "#1DEF2E"; //边框颜色
      clock.lineWidth = "30"; //边框宽度
      clock.beginPath();
      clock.arc(150, 180, 140, 1.34 * Math.PI, 1.5 * Math.PI); //画圆
      clock.stroke();
      clock.save();

      clock.strokeStyle = "#EEF20B"; //边框颜色
      clock.lineWidth = "30"; //边框宽度
      clock.beginPath();
      clock.arc(150, 180, 140, 1.5 * Math.PI, 1.67 * Math.PI); //画圆
      clock.stroke();
      clock.save();

      clock.strokeStyle = "#EE8F1B"; //边框颜色
      clock.lineWidth = "30"; //边框宽度
      clock.beginPath();
      clock.arc(150, 180, 140, 1.67 * Math.PI, 1.83 * Math.PI); //画圆
      clock.stroke();
      clock.save();

      clock.font = "20px Arial";
      clock.fillText("优", 44, 85);
      clock.fillText("良", 110, 52);
      clock.fillText("较差", 165, 52);
      clock.fillText("差", 234, 85);
      clock.save();
      //秒针
      clock.lineWidth = 6;
      clock.strokeStyle = "red";
      clock.translate(150, 150);
      clock.rotate((deg * Math.PI) / 180);
      clock.beginPath();
      clock.moveTo(0, -70);
      clock.lineTo(0, 30);
      clock.closePath();
      clock.stroke();

      clock.fillStyle = "red";
      clock.lineJoin = "round";
      clock.beginPath();
      clock.arc(0, 0, 10, 0, 360, false);
      clock.closePath();
      clock.fill();
      clock.stroke();
      clock.beginPath();
      clock.arc(0, -83, 10, 0, 360, false);
      clock.closePath();
      clock.stroke();
      clock.restore();
    }
  }
};
</script>
