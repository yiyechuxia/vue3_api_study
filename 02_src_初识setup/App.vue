<template>
  <h1>vue3 HelloWorld</h1>
  <h1>人名：{{ name }}</h1>
  <h1>年龄：{{ age }}</h1>
  <button @click="sayHello">sayHello</button>
</template>

<script>
// ！！！！vue2框架与vue3框架不要混着用
export default {
  name: "App",
  setup(){
    // 数据
    let name = '张三'
    let age = 18

    // 方法
    function sayHello(){
      alert(`我叫${name}，今年${age}岁`)
    }

    sayHello()

    return {
      name,
      age,
      sayHello
    }
  }
};
</script>

<style></style>
