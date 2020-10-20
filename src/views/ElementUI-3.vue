<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>颜色选择器</span>
          </div>
          <el-color-picker v-model="color" show-alpha></el-color-picker>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>步骤条</span>
          </div>
          <el-steps :active="active" finish-status="success">
            <el-step title="提交"></el-step>
            <el-step title="审核"></el-step>
            <el-step title="通过"></el-step>
          </el-steps>
        </el-card>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>单选框</span>
          </div>
          <div>
            <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
            <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
            <el-radio v-model="radio1" label="3" border>备选项3</el-radio>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>多选框</span>
          </div>
          <el-checkbox
            style="margin-left: 20px"
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
            >全选</el-checkbox
          >
          <!-- <div style="margin: 15px 0;"></div> -->
          <el-checkbox-group
            style="float:left"
            v-model="checkedCities"
            @change="handleCheckedCitiesChange"
          >
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{
              city
            }}</el-checkbox>
          </el-checkbox-group>
        </el-card>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>Switch 开关</span>
          </div>
          <el-switch
            style="display: block"
            v-model="switchValue"
            active-color="#409EFF"
            inactive-color="#409EFF"
            active-text="按月付费"
            inactive-text="按年付费"
          ></el-switch>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>评分</span>
          </div>
          <el-rate v-model="value" show-score></el-rate>
        </el-card>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>进度条</span>
          </div>
          <el-progress :percentage="100" status="success"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>图片</span>
          </div>
          <div
            style="margin:10px; float:left"
            v-for="(item, index) in list"
            :key="index"
          >
            <el-image
              :alt="item.url"
              :fit="fits"
              :preview-src-list="srcList"
              style="width:200px;height:170px"
              :src="item.url"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      color: "rgba(19, 206, 102, 0.8)",
      active: 2,
      value: null,
      radio1: "1",
      // --------------
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
      switchValue: true,
      // --------------------
      fits: "contain",
      list: [
        {
          url:
            "https://www.zykhome.club/group1/M00/00/08/rBofMl9t1DOAcYlNABbaBmtQhMI710.jpg"
        },
        {
          url:
            "https://www.zykhome.club/group1/M00/00/08/rBofMl9tqB-AdhfbAABgcmQtpiw605.jpg"
        },
        {
          url:
            "https://www.zykhome.club/group1/M00/00/08/rBofMl9taWqAKp_HAAFW4Z6iMOk563.jpg"
        },
        {
          url:
            "https://www.zykhome.club/group1/M00/00/07/rBofMl9pss2ABPDSAAGH-Eb4C9Q718.jpg"
        },
        {
          url:
            "https://www.zykhome.club/group1/M00/00/04/rBofMl8isPeAS7nWAAINO9norO0639.png"
        },
        {
          url:
            "https://www.zykhome.club/group1/M00/00/04/rBofMl8ict-Ac0JBAACy613D6RI333.png"
        },
        {
          url:
            "https://www.zykhome.club/group1/M00/00/04/rBofMl8SuG2AcXYuAABYuZfMqM4129.jpg"
        },
        {
          url:
            "https://www.zykhome.club/group1/M00/00/03/rBofMl8MGmKAVM-rAABpX0rvZbw670.jpg"
        }
      ],
      srcList: [
        "https://www.zykhome.club/group1/M00/00/08/rBofMl9t1DOAcYlNABbaBmtQhMI710.jpg",
        "https://www.zykhome.club/group1/M00/00/08/rBofMl9tqB-AdhfbAABgcmQtpiw605.jpg",
        "https://www.zykhome.club/group1/M00/00/08/rBofMl9taWqAKp_HAAFW4Z6iMOk563.jpg",
        "https://www.zykhome.club/group1/M00/00/07/rBofMl9pss2ABPDSAAGH-Eb4C9Q718.jpg",
        "https://www.zykhome.club/group1/M00/00/04/rBofMl8isPeAS7nWAAINO9norO0639.png",
        "https://www.zykhome.club/group1/M00/00/04/rBofMl8ict-Ac0JBAACy613D6RI333.png",
        "https://www.zykhome.club/group1/M00/00/04/rBofMl8SuG2AcXYuAABYuZfMqM4129.jpg",
        "https://www.zykhome.club/group1/M00/00/03/rBofMl8MGmKAVM-rAABpX0rvZbw670.jpg"
      ]
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>
