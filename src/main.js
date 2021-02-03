import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from '@/routes'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

// vue filters for adding custom styles to how data is displayed to the browser
Vue.filter('snippet', function(value){
  return value.slice(0,100) + '...';
})

Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
})
// custom directives
Vue.directive('rainbow',{
  bind(el, binding){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1000px"
    } else if(binding.value == 'narrow'){
      el.style.maxWidth = "560px"
    }
    if(binding.arg === 'column'){
      el.style.background = '#ddd';
      el.style.padding = '#20px';
    }
  }
});

Vue.directive('theme',{
  bind(el){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

