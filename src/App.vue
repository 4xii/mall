<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//import storage from './storage/index'
  export default {
    name:'app',
    components : {

    },
    data(){
      return {
        res:{}
      }
    },
    mounted(){
      //本地加载请求静态json文件的形式
      this.axios.get('/mock/user/login.json').then((res)=>{
        this.res = res;
      });
    }
  };
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
