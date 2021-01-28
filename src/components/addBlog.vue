<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted" action="">
      <label for=""></label>
      <input type="text" v-model.lazy="blog.title" name="" id="" />
      <label for=""></label>
      <textarea name="" v-model.lazy="blog.content" id="" cols="30" rows="10">
        
      </textarea>
      <div id="checkboxes">
        <label for="">Ninjas</label>
        <input type="checkbox" name="" value="Ninjas" id="" v-model="blog.categories">
        <label for="">Wizards</label>
        <input type="checkbox" name="" value="Wizards" id="" v-model="blog.categories">
        <label for="">Mario</label>
        <input type="checkbox" name="" value="Mario" id="" v-model="blog.categories">
        <label for="">Cheese</label>          
        <input type="checkbox" name="" value="Cheese" id="" v-model="blog.categories">
      </div>
      <label for="">
        <select name="" id="" v-model="blog.author">
          <option v-for="author in authors" :key="author">{{author}}</option>
        </select>
      </label>
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">
          {{category}}
        </li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author:""
      },
      authors:['the Net Ninja','the Angular Avenger', 'the Vue vindicator'],
      submitted: false,
    };
  },
  methods: {
    post: function(){
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then(function(data){
        console.log(data);
        this.submitted = true;
      })
    }
  },
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  display: inline-block;
}
</style>
