<template>
  <div class="columns">
    <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
      <app-post :link="post.rest_api_enabler.Link">
       <h3 slot="title" v-html="post.title.rendered"> </h3>
       <span slot="content" v-html="post.excerpt.rendered"></span>
     </app-post>
   </div>
 </div>
</template>

<script >
	import Post from './Post.vue'
  import appService from '../app.service'

  export default{
    components : {
     'app-post':Post
   },
   data() {

     return {
      posts: this.loadPosts()
    }
  },
  methods: {

    loadPosts() {
       appService.getPosts(2)
                .then(data => {
                  this.posts = data
                })
  
    }
  }

}
</script>