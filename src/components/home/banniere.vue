<template>
  <article>
    <section class="content">
      <h1>Laissez vous porter par la puissance des pierres.</h1>
    </section>
  </article>
</template>

<script>
export default {
  name: "banniereComponent",
};
</script>

<style scoped lang="scss">
article {
  height: 400px;
  background-image: url("@/assets/img/banner.webp");
  background-size: cover;
  background-position: right;
  background-color: #eeeff1;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  h1 {
    max-width: 900px;
    font-size: 4em;
    text-shadow: 0 0 20px white;
  }
}
</style>
