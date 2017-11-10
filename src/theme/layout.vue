<template>
  <div id="app">  
<app-header></app-header>
    <section class="main-section section">
      <div class="container content">
       <app-category></app-category>
      </div>

    </section>
<app-footer></app-footer>
  </div>

</template>

<script>
 import AppHeader from './AppHeader.vue'
 import AppFooter from './AppFooter.vue'
 import Category from './Category.vue'

 export default {
  components: {
    'app-header' : AppHeader,
    'app-footer' : AppFooter,
    'app-category': Category
  }
  
}

</script>

<style lang="scss">
@import '~bulma';

.columns{
  flex-wrap: wrap 
}
</style> 