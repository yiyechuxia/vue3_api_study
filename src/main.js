// 引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
// 创建应用实例对象（类似与之前vue2中的vm，但app比vm更轻），通过mount挂载
createApp(App).mount('#app')
