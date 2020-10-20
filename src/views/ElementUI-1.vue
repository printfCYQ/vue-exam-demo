<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>日历</span>
          </div>
          <el-calendar v-model="value"></el-calendar>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>时间线</span>
          </div>
          <div class="block">
            <el-timeline>
              <el-timeline-item
                v-for="item in timelineData"
                :key="item.id"
                :timestamp="item.time"
                placement="top"
              >
                <el-card>
                  <h4>{{ item.tip }}</h4>
                  <p>{{ item.msg }}</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>走马灯</span>
          </div>
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
      timelineData: [
        {
          id: "0",
          time: "2018/4/12",
          tip: "更新 Github 模板",
          msg: "王小虎 提交于 2018/4/12 20:46"
        },
        {
          id: "1",
          time: "2018/4/13",
          tip: "更新 Github 模板",
          msg: "王小虎 提交于 2018/4/13 20:46"
        },
        {
          id: "2",
          time: "2018/4/14",
          tip: "更新 Github 模板",
          msg: "王小虎 提交于 2018/4/14 20:46"
        }
      ]
    };
  }
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
