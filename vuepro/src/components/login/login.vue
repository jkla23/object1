<template>
<!-- 登录页面 在此页面中通过后台返回的数据，进行路由权限的判定 -->
  <div  class="login">
    <div class="login-con">
      <div icon="log-in" title="欢迎登录" :bordered="true">
        <div class="form-con">
          <div class="mobliebox" style="background:rgba(0,0,0,0.5);">
            <h1 style="text-align:center;color:#fff;font-size:25px;padding-top:30px">需求查询系统</h1>
            <el-form
              status-icon
              label-width="100px"
              class="demo-ruleForm"
              style="padding: 50px 50px 30px 0px"
            >
              <el-form-item label="用户名" prop="user">
                <el-input type="text" v-model="ruleForm2.user_name"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.passwd"></el-input>
              </el-form-item>
              <p style="padding-left:110px;color:red;font-weight:bold">{{logintxt}}</p>
              <el-form-item style="padding:30px 0 0 80px">
                <el-button type="primary" @click="submitForm()">提交</el-button>
                <el-button>重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import  {userrouter,people,dismake}   from '../../route.js'
export default {
  data() {
    return {
      ruleForm2: {
        user_name: "",
        passwd: ""
      },
      logintxt: ""
    };
  },
  methods: {
    // 提交表单，进行账号验证
    submitForm() {
      this.axios({
        url: `http://192.168.2.51:3000/user`,
        method:"get"
        // method: "post",
        // data: this.ruleForm2
      }).then(res => {
        // if (res.data.error == 0) {
        //   localStorage.setItem("user", res.data.result.user_name);
        //   localStorage.setItem(
        //     "routeList",
        //     JSON.stringify(res.data.result.permissions)
        //   );
        //   this.logintxt = "";
        //   localStorage.setItem("token", res.data.result.token);
        //   this.$notify({
        //     showClose: true,
        //     title: "成功",
        //     message: "登录成功",
        //     type: "success"
        //   });
        //   setTimeout(() => {
        //     this.$router.push({ path: "/" });
        //   }, 500);
        // } else if (res.data.error == 400) {
        //   this.logintxt = "用户名或密码错误";
        // } else if (res.data.error == 500) {
        //   this.$notify.error({
        //     showClose: true,
        //     title: "失败",
        //     message: "服务器异常"
        //   });
        // }
        // 判断账号密码的正确性，获取路由权限
        // for(var i=0;i<res.data[0].length;i++){
        //     if(res.data[0][i].email==this.ruleForm2.user_name && res.data[0][i].password==this.ruleForm2.passwd){
        //       localStorage.setItem("user", res.data[0][i].email);
        //       localStorage.setItem("routerlist",res.data[0][i].router)
        //         if(res.data[0][i].router=='user'){
        //         this.$router.addRoutes(userrouter)
        //         this.$router.addRoutes(dismake)
        //       }else{
        //         this.$router.addRoutes(people)
        //         this.$router.addRoutes(dismake)
        //       }
        //       setTimeout(() => {
        //       this.$router.push({ path: "/layout" });
        //     }, 500)
        //     }
        // }
        for(var i=0;i<res.data[0].length;i++){
            if(res.data[0][i].email==this.ruleForm2.user_name && res.data[0][i].password==this.ruleForm2.passwd){
              localStorage.setItem("user", res.data[0][i].email)
              setTimeout(() => {
              this.$router.push({ path: "/layout" });
            }, 500)
            }
         }
      });
    }
  }
};
</script>

<style lang="scss">
.el-form-item__label {
  text-align: right;
  float: left;
  font-size: 14px;
  color: #fff;
  line-height: 40px;
  padding: 0 12px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.login-con{
width: 500px; height:500px; margin:auto;
}
.form-con{
  width:500px;height:500px;padding: 30% 0 0 0 ; 
}
@media screen and (max-width:1000px) {
  /* Remove the padding we set earlier */
  // .mobliebox,
  // .login-con,
  // .log-in,
   
}
</style>
