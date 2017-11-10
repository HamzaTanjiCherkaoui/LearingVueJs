<template>
	<nav class="nav has-shadow">
      <div class="container">
        <router-link to="/" exact>
          <img src="http://bit.ly/vue-img"
          alt="Vue SPA" />
        </router-link>
        <router-link to="/" exact class="nav-item is-tab">
          Home
        </router-link>
        <router-link to="/login" class="nav-item is-tab">
          Login
        </router-link>
      </div>
    </nav>
</template>
<script>
	export default {

	}
</script>