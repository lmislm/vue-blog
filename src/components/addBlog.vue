<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submitted">
      <label>博客标题:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>博客内容:</label>
      <textarea v-model.lazy.trim="blog.content"></textarea>
      <div id="checkboxes">
        <p>博客分类:</p>
        <label>张三</label>
        <input type="checkbox" value="张三" v-model="blog.categories" />
        <label>李四</label>
        <input type="checkbox" value="李四" v-model="blog.categories" />
        <label>王麻子</label>
        <input type="checkbox" value="王麻子" v-model="blog.categories" />
        <label>赵五</label>
        <input type="checkbox" value="赵五" v-model="blog.categories" />
      </div>
      <label>作者:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>
      <button v-on:click.prevent="post">添加博客</button>
    </form>
    <div v-if="!submitted"><h3>已添加</h3></div>
    <div id="preview">
      <h3>预览博客</h3>
      <p>博客标题: {{ blog.title }}</p>
      <p>博客内容:</p>
      <p style="white-space: pre">{{ blog.content }}</p>
      <p>博客分类:</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>作者: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
  // Imports
  export default {
    data () {
      return {
        blog: {
          title: '',
          content: '',
          categories: [],
          author: ''
        },
        authors: ['张三', '李四', '王麻子', '赵五', '王六'],
        submitted: false,
      }
    },
    methods: {
      post:function () {
        // http://jsonplaceholder.typicode.com/posts
        this.$http.post('https://vue-blog-simple.firebaseio.com/posts.json',
          this.blog
          // {
          // title: this.blog.title,
          // body: this.blog.content
          // // userId: 1
        // }
        ).then(function (data) {
          console.log(data);
          this.submitted = true;
        });
      }
    }
  }
</script>

<style>
  #add-blog *{
    box-sizing: border-box;
  }
  #add-blog{
    margin: 20px auto;
    max-width: 500px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
  }
  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
  #checkboxes input{
    display: inline-block;
    margin-right: 10px;
  }
  #checkboxes label{
    display: inline-block;
    margin-top: 0;
  }
</style>
