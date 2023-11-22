<template>
  <div id="container"></div>
</template>

<script setup>

  import {onMounted} from 'vue'
  import {start} from 'qiankun'
  onMounted(()=>{
    console.log("启动微应用加载");
    if(!window.qiankunStarted){
      window.qiankunStarted = true
      start()
    }
  })

</script>