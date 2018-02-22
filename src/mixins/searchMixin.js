/**
 * Created by lmislm on 2018/2/22- 20:25.
 */
export default {
  computed:{
    filteredBlogs:function () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    }
  }
}
