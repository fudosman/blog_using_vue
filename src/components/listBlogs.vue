<template>
  <div>
    <div v-theme:column="'wide'" id="show-blogs">
      <h1>List Blog Titles</h1>
      <input type="text" name="" v-model="search" placeholder="search blogs" id="">
      <div v-for="blog in filteredBlogs" :key="blog" class="single-blog">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import searchMixin from '@/mixins/searchMixin'
export default {
  data(){
    return{
      blogs: [],
      search: ''
    }
  },
  methods:{

  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      console.log(data);
      this.blogs = data.body.slice(0,10);
    })
      
  },
  computed:{
    
  },
  // for registering filters locally
  filters:{
    toUpperCase(value){
      return value.toUpperCase();
    }
  },
  // for directives registered locally
  directives:{
    'rainbow': {
      bind(el){
        el.style.color = "#" + Math.random().toString(16).slice(2,8);
      }
    }
  },
  mixins:[
    searchMixin
  ]
}
</script>

<style scoped>
  #show-blogs{
    max-width: 800px;
    margin: 0 auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: #eeeeee;
  }
</style>

