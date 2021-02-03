<template>
  <div>
    <!-- <add-blog></add-blog>
    <show-blogs></show-blogs>
    <list-blogs> </list-blogs> -->
    <add-header></add-header>
    <router-view></router-view>

  </div>
</template>

<script>
// import addBlog from './components/addBlog.vue';
// import showBlogs from './components/showBlogs.vue';
// import listBlogs from './components/listBlogs.vue';
import header from '@/components/header'

export default {
  components: {
    'add-header': header
  //   'add-blog': addBlog,
  //   'show-blogs': showBlogs,
  //   'list-blogs': listBlogs
  },
  data(){

  }
}
</script>

<style>
#app {
  font-family: 'Nunito SemiBold';
  margin: 0;
}
</style>
