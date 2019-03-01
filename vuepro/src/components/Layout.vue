<template>
<!-- 管理员主页面 -->
<div>
  <!-- 管理员pc端界面的头部 -->
  <div id="home">
    <div style="height:100%">
      <el-container class="index">
        <el-header class="header-h1">
          <header class="header" style="padding:0 50px">
            <div class="header__logo">
              <h1 style="overflow:hidden">
                <a class="header-font"  href="#">锦鲤科技</a> 
                <el-input style="margin:0 10%;display:inline-block;width:50%;float:left"
                  placeholder="请输入内容"
                  prefix-icon="el-icon-search"
                  v-model="input22"
                  @input="filterinput"
                  >
                </el-input>
              </h1>
            </div>
             <div class="moblieTag">
              <el-tag
                    class="tag-word"
                    :key="index"
                    v-for="(tag,index) in dynamicTags"
                    color="white"
                    closable
                    :disable-transitions="true"
                    @close="handleClose(tag)">
                    {{tag}}
                </el-tag>
            </div>
            <ul class="top-nav" style="position:absolute;right:0;top:0">
              <li class="dropdown">
                <p @click="showLogin">
                  <i class="el-icon-error"></i>
                </p>
              </li>
            </ul>
          </header>
        </el-header>
        
      </el-container> 
    </div>
  </div>
  <div class="homeTJ">

   <!-- 词云，便于精确搜索 -->
    <div class="tagcloud">
      <div class="marginBox" ref="marginBox">
         <div class="canvas" ref="canvas">

           <!-- 引入wordcloud模块 -->
             <wordcloud
              style="width:100%"
              :data="text"
              nameKey="name"
              valueKey="value"
              :wordPadding=wordpadding
              :showTooltip="false"
              :fontSize=[20,30]
              :wordClick="wordClickHandler"
              >
              </wordcloud>
         </div>
      </div>
      <div class="pageX" ref="pageX">

        <!-- 路由导航，包括了3个子路由 -->
       <el-header>
         <ul class="moblieUl" style="width:100%;height:70px;border-bottom:2px red solid">
           <li style="width:33%;line-height:70px;float:left;text-align:center"><router-link to="/test" active>基本信息</router-link></li>
           <li style="width:33%;line-height:70px;float:left;text-align:center"><router-link to="/home">备注</router-link></li>
           <li style="width:33%;line-height:70px;float:left;text-align:center"><router-link to="/data">数据设计</router-link></li>
         </ul><router-view   @eventFromChild02="eventFromChild02"  :router-value="routerValue"></router-view>
       </el-header>
      </div>
      
    </div>
  </div>
  </div>
</template>

<script>
import wordcloud from 'vue-wordcloud'
export default {
   components: {
    wordcloud
  },
  data() {
    return {
      flg: true,          
      input22: localStorage.getItem("routerValue"),   
      call:localStorage.getItem("routerValue"),
      wordpadding:20,                             //搜索框过滤
      routeList: [],                              //路由权限
      text:[],                                    //词云数组
      routerValue:'',                             //点击词云进行路由的传参
      user: localStorage.getItem("user"),         //获取登录用户名
      dynamicTags:  [],                          //标签数组
      inputVisible: false,
      inputValue: '',
      defaultWords: [{
          "name": "大厅调整",
          "value": 26
        },
        {
          "name": "财神到修改",
          "value": 20
        },
        {
          "name": "捕鱼玩法新增",
          "value": 25
        },
        {
          "name": "数据源调整",
          "value": 25
        },
        {
          "name": "新后台需求",
          "value": 20
        },
        {
          "name": "扫雷游戏",
          "value": 23
        },
        {
          "name": "盾调整",
          "value": 20
        },
        {
          "name": "捕鱼玩法调整",
          "value": 24
        },
        {
          "name": "大厅需求调整",
          "value": 26
        },
        {
          "name": "大厅需求调整",
          "value": 26
        },
        {
          "name": "斗地主玩法调整",
          "value": 25
        },
        {
          "name": "德州扑克玩法新增",
          "value": 25
        },
        {
          "name": "数据源调整",
          "value": 25
        }
      ]
    };
  },
  methods: { 
        //    监听tagcloud 
     wordClickHandler(name, value, vm) {
      // this.$refs.canvas.style.cssText='margin-right:0;position:absolute;left:0'
      // this.$refs.pageX.style.cssText='display:block;margin-right:3%'
      // this.$refs.marginBox.style.cssText='margin-left:0;width:60%;height:500px;position:relative'
      //   // localStorage.setItem("routerValue",name);
      //   this.routerValue=name
      //   this.dynamicTags.push(name)
      //   this.input22=name
      //   this.filterinput()
      //   this.$router.push('/test')
        if(navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)){
            this.$refs.marginBox.style.cssText='display:none';
            this.$refs.pageX.style.cssText='display:block;margin:0 auto;width:100%';
            localStorage.setItem("routerValue",name);
            this.routerValue=name
            this.dynamicTags.push(name)
            this.input22=name
            this.filterinput()
            this.$router.push('/test')
        }else{
            this.$refs.canvas.style.cssText='margin-right:0;position:absolute;left:0'
            this.$refs.pageX.style.cssText='display:block;margin-right:3%'
            this.$refs.marginBox.style.cssText='margin-left:0;width:60%;height:500px;position:relative'
            localStorage.removeItem("routerValue")
            localStorage.setItem("routerValue",name);
            console.log(localStorage.getItem("routerValue"))
            this.routerValue=name
            this.dynamicTags.push(name)
            this.input22=localStorage.getItem("routerValue")
            this.filterinput()
            this.$router.push('/test')
        };
    },
    showLogin() {
      localStorage.removeItem("user");
      setTimeout(() => {
        this.$router.go(0);
      }, 500);
    },
    handleClose(tag) {
       this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
       localStorage.setItem("routerValue",'')
       this.input22=localStorage.getItem("routerValue");
       this.filterinput()
    },
    loginOut() {
      // localStorage.removeItem("token");
      localStorage.removeItem("user");
      // localStorage.removeItem("routeList");
      // this.$notify({
      //   showClose: true,
      //   title: "成功",
      //   message: "退出成功",
      //   type: "success"
      // });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    filterinput(){
      this.text=[];
      return this.defaultWords.filter(element=>{
         if(element.name.match(this.input22)){
           this.text.push(element)
         }
         return this.text
      })
    },
     eventFromChild02(dataIf){
        this.input22='';
        this.filterinput()
      }
  },
  mounted() {
    this.text=this.defaultWords
  },
  watch:{
    input22(newvalue,oldvalue){
      console.log(newvalue)
      if(newvalue=='' && navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)){
           this.$refs.marginBox.style.cssText='display:block';
           this.$refs.pageX.style.cssText='display:none';
      }
    }
  }
};
</script>

<style lang="scss">
#home {
  width: 100%;
  height: 100%;
  .index {
    color: #333;
    height: 100%;
  }
  .header-h1 {
    .header {
      line-height: 60px;
      .header__logo {
        float: left;
        a {
          color: #fff;
          font-size: 18px;
          font-weight: 500;
        }
        a:hover {
          text-decoration: none;
        }
      }
    }
  }
  #main-nav {
    float: left;
    margin-left: 70px;
    background-color: rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    font-size: 15px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    a {
      color: #fff;
      padding: 0 10px;
    }
    a:hover {
      text-decoration: none;
    }
  }
  #main-nav:hover {
    cursor: pointer;
  }
  .top-nav {
    float: right;
    display: flex;
    li:nth-of-type(2) {
      cursor: pointer;
    }
    .school {
      color: #fff;
      margin-right: 20px;
      font-size: 13px;
    }
    .user {
      padding: 0 5px;
      line-height: 100%;
    }
  }
  .dropdown {
    i {
      padding: 10px;
      border-radius: 3px;
      transition: all 0.3s;
      color: #fff;
    }
    i:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
  .header__logo a{
    display:block;
    float:left
  }
  .user__info {
    display: flex;
    .user__img {
      width: 30px;
      height: 30px;
      margin-top: 15px;
      border-radius: 50%;
      margin-right: 8px;
    }
    .box {
      box-sizing: border-box;
      padding: 0 5px;
      display: flex;
      flex-direction: column;
      margin-top: 12px;
    }
  }
  .el-header {
    background-color: #2196f3;
    color: #333;
    padding: 0;
    // line-height: 72px;
  }
  .el-aside {
    background-color: #d3dce6;
    color: #333;
    line-height: 270px;
    width: 270px;
    text-align: left;
    height: 100%;
  }
  
}

.moblieMargin{
  margin: 0 auto
}
.mobliecanvas{
  width: 100%;
}
.marginBox{
  margin: 0 auto
}
.tagcloud {
    display: flex;
    justify-content: space-between;
    padding: 0 120px;
}
.cloudCss{
  margin: 0;
  width: 650px;
  height: 60%;
}
.pageX{
   width:40%;
   border-radius: 20px
}
.pageX li{
  font-size:18px;
}
.pageX{
  display: none;
  width: 30%
}
.canvas{
  width:100%;
  height:50%;
  margin:0 auto;
  padding-top:5%; 
}
  .el-tag + .el-tag {
      margin-left: 10px;
    }
  .tooltip{
    display:none
  }
  .wordCloud{
    display: inline-block;
    position: relative;
    width: 100%;
    height: 40%
  }
  .marginBox{
      width: 60%;
      position: relative;
    }
  @media screen and (min-width:300px) and (max-width:1000px){
    .moblieTag{
      display: none
    }
    #home .dropdown i{
      font-size:30px;
      line-height: 110px
    }
    #home .header-h1 .header .header__logo a{
      font-size:40px;
      line-height: 140px
    }
    #home .el-header{
      height: 150px !important;
    }
    .marginBox{
      width: 100%;
      position: relative;
    }
    .dropdown{
      position:absolute;
      right: 0
    }
    // #home .top-nav .user {
    //   display: none
    // }
    .tagcloud {
    display: block;
    padding: 0 120px;
    }
    // #home{
    //   display: none
    // }
    svg{
      transform:scale(1.2);
      margin-top:50%
    }
    .el-input{
     position: absolute;
     right: 0;
    }
    .el-input--prefix .el-input__inner{
      height: 60px;
      margin-top:40px;
      font-size:30px
    }
    // .homeTJ{
    //   display: none
    // }
    .canvas{
      width: 100%;
    }
    .marginBox{
      width: 100%
    }

  }
  @media screen and (min-height:300px) and (max-height:800px){
    .homeTJ .pageX{
      width: 40%;
    }
    .pageX{
      width: 40%
    }
    .homeTJ{
      display: block
    }
    .moblieUl li a{
      font-size:12px
    }
     .marginBox{
      display: block;
      height: 30%
    }
    // .pageX{
    //   position: absolute;
    //   width: 40%;
    //   top: 13%;
    //   right: 0
    // }
    .moblieRouterView{
      display:none
    }
    .wordCloud{
      height: 30%
    }
    .tagcloud {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    }
    #home{
      display: block
    }
    #moblieModule{
      display: none
    }
    #moblieHeader{
      display: none
    }
    .index{
      display: block
    }
    .homeTJ .canvas{
      transform:scale(0.7);
      // position: absolute;
      font-size:20px;
      width: 100%;
      // right: 20%;
      top: 0;
      margin: 0 auto;
      display: block
    }
  }
</style>
