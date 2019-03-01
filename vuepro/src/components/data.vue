<template>
  <div class="pageone">
      <div id="editor">
        <mavon-editor style="height: 100%;width: 100%;" v-model="value"></mavon-editor>
      </div>
      <el-button style="float:right" round>按钮上传<i class="el-icon-upload el-icon--right"></i></el-button>
  </div>
</template>
<script>
import echarts from "echarts";
import { mavonEditor } from 'mavon-editor';
  import 'mavon-editor/dist/css/index.css';
export default {
  data() {
    return {
     
    };
  },
  components:{
     mavonEditor
  },
  mounted() {
    var mditor =  Mditor.fromTextarea(document.getElementById('editor'));
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    
    
  }
};
</script>

<style lang="scss" scoped>
 
</style>