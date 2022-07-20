<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.webp" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped lang="scss">
img {
  margin-top: 30px;
  max-height: 150px;
}
</style>
