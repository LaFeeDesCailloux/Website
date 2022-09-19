<template>
  <article>
    <h1>{{ titre }}</h1>
    <img
      :src="require('@/assets/realisations/' + image)"
      :alt="titre"
      loading="lazy"
    />
    <i />
  </article>
</template>

<script>
export default {
  name: "banniereComponent",
  props: ["titre", "image"],
};
</script>

<style scoped lang="scss">
article {
  z-index: 0;
  background-color: #070707;
  position: relative;

  h1 {
    z-index: -1;
    text-align: center;
    font-size: 8em;
    color: white;
    position: absolute;
    top: 3rem;
    left: 0;
    right: 0;
  }

  img {
    display: block;
    padding-top: 8.4rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  i {
    position: absolute;
    top: 95%;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(255, 255, 255);
    background: -moz-linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    background: -webkit-linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffffff",GradientType=1);
  }
}
</style>
