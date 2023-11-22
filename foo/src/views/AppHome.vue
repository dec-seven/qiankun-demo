<template>
  <div>
     <h2>这是基于vue-cli搭建的vue2子应用</h2>

     <button @click="handleBack">返回上一页</button>
     <button @click="handleHome">返回主应用首页</button>
     <button @click="handleChange">跳转到子应用Bar</button>
  </div>
</template>

<script>
  export default {
    methods:{
      handleBack(){
        history.back()
      },
      handleHome(){
        history.pushState({},'','/#/')
      },
      handleChange(){
        history.pushState({},'','/#/micro/bar')
      }
    }
  }
</script>