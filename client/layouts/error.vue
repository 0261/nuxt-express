<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1> 
    <!-- 404에러가 났을 경우 이 페이지가 작동함 -->
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'], // # props로 error을 받음.
}
</script>

<style>

</style>
