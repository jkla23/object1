<template>
  <div class="pageone" style="overflow:auto;height:360px">
      备注详情：
      <ul>
        <!-- <li v-for=""></li> -->
        <!-- <li style="margin:10px 0" v-for="i in 10" :key="i"><span style="font-size:18px;display:inline-block;width:100px;text-align:right">&nbsp;&nbsp;&nbsp;&nbsp;{{texts[i].name}}</span>:&nbsp;&nbsp;&nbsp;&nbsp;<p style="display:inline-block;border-bottom:1px black solid;font-size:16px">{{texts[i].text}}</p>
            <p style="font-size:16px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{texts[i+1].name}}评论：<span style="color:red">123</span></p>
        </li> -->
          <li style="margin:10px 0" v-for="(item,index) in array" :key="index">
              <p style="font-size:16px;"><span>{{item.name}}:{{item.text}}</span><el-button @click="dialogVisible = true" class="el-icon-edit-outline" style="display:block;float:right"></el-button></p>
              <p  style="font-size:16px;" v-for="(ject,i) in item.other" :key="i">
                   <span>{{ject.name}}回复:{{ject.text}}</span>
              </p>
          </li>
      </ul>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>

  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
        array:[],
        dialogVisible: false
    };
  },
  mounted() {
     this.axios({
        url:'http://localhost:3000/array',
        methods:'get'
      }).then(res=>{
        this.array=res.data[0]
        console.log(res.data[0])
      })
    // this.axios({
    //   url: `${this.host}v1/product/fee/orders/total`,
    //   method: "post",
    //   headers: {
    //     "X-Token": localStorage.getItem("token")
    //   }
    // }).then(res => {
    //   if (res.data.error == 0) {
    //     this.today_money = res.data.result.today_money;
    //     this.month_money = res.data.result.month_money;
    //     this.jidu_money = res.data.result.jidu_money;
    //     this.year_money = res.data.result.year_money;
    //     this.listData[0] = res.data.result.three_money;
    //     this.listData[1] = res.data.result.front_money;
    //     this.listData[2] = res.data.result.month_money;
    //     this.initChart();
    //   } else if (res.data.error == 401) {
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("user");
    //     localStorage.removeItem("routeList");
    //     this.$notify({
    //       showClose: true,
    //       title: "错误",
    //       message: "登录过期",
    //       type: "error"
    //     });
    //     this.$router.go(0);
    //   }
    // });
  },
  
  methods: {
    getdata(){
      this.axios({
        url:'http://localhost:3000/shop',
        methods:'get'
      }).then(res=>{
         for(var i=0;i<res.data.length;i++){
            this.texts.push(res.data[i])
         }
      })
    },
    handleClose(done) {
      done()
    }
    // subtext(name,text){
    //   this.axios({
    //     url:'http://localhost:3000/array',
    //     methods:'post',
    //     data:{name:name,text:text}
    //   })
    // }
    
  }
};
</script>

<style lang="scss" scoped>
   .pageone{
      padding: 20px 0;
      color: black
    }
</style>
