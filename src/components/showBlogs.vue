<template>
    <!--<div v-theme:column="'narrow'" id="show-blogs">-->
      <div id="show-blogs">
        <h1>博客文章</h1>
        <input type="text" v-model="search" placeholder="搜索 文章"/>
        <div v-for="blog in filteredBlogs" class="single-blog">
          <router-link v-bind:to="'/blog/' + blog.id">
            <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
          </router-link>
          <article>{{ blog.body | snippet }}</article>
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
      this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function (data) {
        console.log(data);
        this.blogs = data.body.slice(0,10);
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
