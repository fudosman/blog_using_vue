export default{
  // mixins are used to externalize popular pieces of codes
  computed: {
    filteredBlogs: function (){
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      })
    }
  }
}