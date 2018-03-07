<template>
    <!--<div v-theme:column="'narrow'" id="show-blogs">-->
      <div id="show-blogs">
        <h1>博客文章</h1>
        <input type="text" v-model="search" placeholder="搜索 文章"/>
        <div v-for="blog in filteredBlogs" class="single-blog">
          <router-link v-bind:to="'/blog/' + blog.id">
            <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
          </router-link>
          <article>{{ blog.content | snippet }}</article>
        </div>
      </div>
    <!--</div>-->
</template>

<script>
  import searchMixin from "../mixins/searchMixin";

  export default {
    data () {
      return {
        blogs:[],
        search:''
      }
    },
    methods: {

    },
    created(){
      // this.$http.get('https://vue-blog-simple.firebaseio.com/posts.json').then(function (data) {
      this.$http.get('https://wd0088899390nsjhzr.wilddogio.com/posts.json').then(function (data) {
        return data.json();
        // this.blogs = data.body.slice(0,10);
      }).then(function (data) {
        var blogsArray = [];
        for(let key in data){
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        // console.log(data);
        this.blogs = blogsArray;
      })
    },
    computed:{
      // filteredBlogs:function () {
      //   return this.blogs.filter((blog) => {
      //     return blog.title.match(this.search);
      //   });
      // }
    },
    filters:{
      toUppercase(value){
        return value.toUpperCase()
      }
    },
    directives:{
      'rainbow':{
        bind(el,binding,vnode){
          el.style.color = "#" + Math.random().toString().slice(2,8);
        }
      }
    },
    mixins:[searchMixin]
  }
</script>

<style>
#show-blogs {
  max-width: 60rem;
  margin: 0 auto;
}
.single-blog {
  padding: 1rem;
  margin: 1rem auto;
  box-sizing: border-box;
  background: #eeeeee;
}
</style>
