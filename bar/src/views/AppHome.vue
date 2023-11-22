<template>
  <div>
    <h1>我是Bar微应用,vite+vue3</h1>
    <button @click="handleBack">返回上一页</button>
    <button @click="handleHome">返回主应用首页</button>
    <button @click="handleChange">跳转到子应用Foo</button>
  </div>
</template>

<script setup>
  const handleBack = () => {
    history.back()
  }
  const handleHome = () => {
    history.pushState({},'','/#/')
  }
  const handleChange = () => {
    history.pushState({},'','/#/micro/foo')
  }
</script>