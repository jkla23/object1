<template>

<!-- 用户界面 -->
<div>

  <!-- 用户界面头部栏 -->
  <header>
     <h1 style="height:60px;background-color:#2196f3;padding:0 8%">
        <a style="display:block;float:left;line-height:60px;color:white;font-size: 18px;font-weight: 500;" href="#">锦鲤科技</a> 
        <div class="user" style="float:right">
                  <div class="box">
                      <div class="user__name" style="color:white;line-height:60px;font-size: 16px;font-weight: 500;">您好，{{user}} 
                        &nbsp; &nbsp; &nbsp; &nbsp;<span @click="loginout" style="cursor:pointer">注销</span>
                      </div>
                  </div>
          </div>
     </h1>
  </header>

  <!-- element ui 布局 -->
<el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: white">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>我的项目</template>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>项目详情</template>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>备注修改</template>
      </el-submenu>
    </el-menu>
  </el-aside>

  <!-- element ui 表格 -->
  <el-container>
    <el-table
    :data="tableData"
    border
    style="width: 100%;height:100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small" @click="modify(scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  </el-container>
</el-container>



<!-- 分页 -->
<el-pagination
  style="text-align:center"
  background
  layout="prev, pager, next"
  :total="100">
</el-pagination>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
>
  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
    <el-form-item label="名称">
      <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="具体住址">
      <el-input v-model="formLabelAlign.region"></el-input>
    </el-form-item>
    <el-form-item label="提交时间">
      <el-input v-model="formLabelAlign.type"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submit">确 定</el-button>
  </span>
</el-dialog>
 
</div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      return {
       dialogVisible: false,
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: '',
          array:[],
          textarray:[]
        },
         user: localStorage.getItem("user"),
         tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    methods:{

      //    用户退出函数
      loginout(){
        localStorage.removeItem("user");
        setTimeout(() => {
        this.$router.go(0);
      }, 500);
      },
      handleClick(row){
        this.$alert(`具体住址：${row.address} <br/> 邮政编码：${row.address}<br/>提交日期：${row.date}`, `姓名:${row.name}`, {
          dangerouslyUseHTMLString: true,
          confirmButtonText: '确定'
        })
      },
      callback(data){
          if(data.other){
            this.callback(data.other)
          }
          this.textarray.push(data.text)
          this.array.push(data.name)
          
      },
      modify(row){
        this.formLabelAlign.name=row.name
        this.formLabelAlign.region=row.address
        this.formLabelAlign.type=row.date
        this.dialogVisible=true
      },
      submit(){
        console.log(123)
      }
    }
  };
</script>
<style lang="css">
  .el-form-item__label{
    color:black
  }
</style>

