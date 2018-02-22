import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
//Http request
Vue.use(VueResource);



//过滤器
// Vue.filter('to-uppercase', function (value) {
//   return value.toUpperCase()
// });
Vue.filter('snippet', function (value) {
  return value.slice(0,100) + " ...";
});

// 自定义指令
// Vue.directive('rainbow',{
//     bind(el, binding, vnode){
//       el.style.color = "#" + Math.random().toString().slice(2,8);
//     }
// });

Vue.directive('theme',{
  bind(el, binding, vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "80rem";
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = '50rem'
    }
    if(binding.arg == 'column') {
      el.style.background = '#dddddd';
      el.style.padding = '1rem';
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
