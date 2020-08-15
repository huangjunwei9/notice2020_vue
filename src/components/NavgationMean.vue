<template>
  <div class="navgation">
    <h1>导航菜单</h1>    
    <el-button>element按钮</el-button>
    <el-button type="primary">element按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'navgation',
  data () {
    return {
      msg: 'Navgation Mean'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
