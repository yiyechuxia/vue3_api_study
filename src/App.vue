<template>
  <h1>vue3 HelloWorld</h1>
  <h1>人名：{{ name }}</h1>
  <h1>年龄：{{ age }}</h1>
  <h1>工作种类：{{ job.type }}</h1>
  <h1>薪资：{{ job.salary }}</h1>
  <button @click="changeData">点击修改数据</button>
</template>

<script>
// ！！！！vue2框架与vue3框架不要混着用

import {ref} from 'vue';
export default {
  name: "App",
  setup() {
    // 数据
    let name = ref( "张三");
    let age = ref(18) ;
    let job = ref({
      type:"前端工程师",
      salary:"30K"
    })

    function changeData(){
      name.value = '李四'
      age.value = 20
      job.value.type = 'UI设计师'
      job.value.salary = '31K'
      // console.log(job);
    }
    return {
      name,
      age,
      job,
      changeData
    };
  },
};
</script>

<style></style>
