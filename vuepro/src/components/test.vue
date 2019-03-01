<template>
  <div class="pageone">
      <el-form :label-position="labelPosition" label  :model="formLabelAlign">
        <el-form-item>
          <span>标题：</span>
          <input  v-model="formLabelAlign.name" type="text" style="border:none;border-bottom:1px solid #dcdfe6;padding:0 12px 0 0">
        </el-form-item>
        <el-form-item>
          <span>详情:</span>
          <input  v-model="formLabelAlign.details" type="text" style="border:none;border-bottom:1px solid #dcdfe6;padding:0 12px 0 0">
        </el-form-item>
        <el-form-item >
          <span>项目:</span>
          <input v-model="formLabelAlign.project" type="text" style="border:none;border-bottom:1px solid #dcdfe6;padding:0 12px 0 0">
        </el-form-item>
        <el-form-item>
           <span>发起人:</span>
          <input v-model="formLabelAlign.user" type="text" style="border:none;border-bottom:1px solid #dcdfe6;padding:0 12px 0 0">
        </el-form-item>
         <el-form-item>
           <span>备注:</span>
          <input v-model="formLabelAlign.somesay" type="text" style="border:none;border-bottom:1px solid #dcdfe6;padding:0 12px 0 0">
        </el-form-item>
      </el-form>
      <button @click="callback">返回</button>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  props:['routerValue'],
  data() {
    return {
      arrayname:'',
      labelPosition:'right',
      data:'',
      currentDate: new Date(),
      value:'',
      formLabelAlign: {
          name: this.routerValue,
          details: '财神到修改',
          project: '捕鱼玩法新增',
          user:'张艺兴',
          somesay:'项目具体备注'
      }
    };
  },
  mounted() {
      // this.axios({
      //   url:'http://localhost:3000/shop',
      //   methods:'get'
      // }).then(res=>{
      //   this.data=res.data
      // })
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    getroutervalue(){
      console.log(this.data)
    },
    swiperleft: function () {
      // this.$router.push({'path':'/layout'});
      // window.location.reload();
      alert('123')
    },
    callback:function(){
      // this.$router.push({'path':'/layout'});
      // window.location.reload();
      // console.log(localStorage.getItem('user'))
       this.$emit("eventFromChild02",'')
    }
  },
  watch:{
    routerValue(val){
        this.formLabelAlign.name=this.routerValue
    }
  }
};
</script>

<style lang="css" scoped>
.pageone{
  padding: 20px 0;
  color: black
}
  .time {
    font-size: 13px;
    color: #999;
  }
 
  .pageone .el-input .el-input__inner{
    border: none;
    border-bottom: 2px black solid;
    background-color: black
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .el-input__inner{
    color: black
  }
  .clearfix:after {
      clear: both
  } 
  .el-form-item__label{
    color: black !important;
  }
  @media screen and (min-height:300px) and (max-height:800px){
    .pageone{
      padding: 10px 0;
      color: black
    }
    .pageone .el-form-item {
      margin-bottom: 0
    }
    .pageone .el-form-item__content span,.pageone .el-form-item__content input{
      font-size: 12px
    }
    .pageone .el-form-item__content{
      line-height:30px
    }
  }
</style>


