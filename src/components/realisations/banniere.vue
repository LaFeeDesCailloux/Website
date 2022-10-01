<template>
  <article id="banner">
    <h1>{{ titre }}</h1>
    <p>{{ titre }}</p>
    <img :src="require('@/assets/' + image)" :alt="titre" loading="lazy" />
    <i />
  </article>
</template>

<script>
export default {
  name: "banniereComponent",
  props: ["titre", "image", "background_color", "text_color"],
  mounted() {
    let banner = document.getElementById("banner");
    if (this.background_color) {
      banner.style.backgroundColor = this.background_color;
    }
    if (this.text_color) {
      banner.children[0].style.color =
        banner.children[1].style.color =
        banner.children[1].style.webkitTextStrokeColor =
          this.text_color;
    }
  },
};
</script>

<style scoped lang="scss">
article {
  z-index: 0;
  background-color: #070707;
  position: relative;

  h1,
  p {
    margin-inline: auto;
    width: min(100%, 1200px);
    z-index: -1;
    text-align: center;
    font-size: 8em;
    color: white;
    position: absolute;
    top: 3rem;
    left: 0;
    right: 0;
    font-weight: bold;
    animation: move 6s alternate infinite ease-in-out;
    animation-fill-mode: both;
    user-select: none;

    @keyframes move {
      from {
        transform: translateY(-5px);
      }
      to {
        transform: translateY(5px);
      }
    }
  }

  p {
    display: none;
  }

  @supports (-webkit-text-stroke: 1px black) {
    p {
      display: unset;
      z-index: 1;
      -webkit-text-stroke: 1px white;
      -webkit-text-fill-color: transparent;
    }
  }

  img {
    display: block;
    padding-top: 8.4rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 600px;
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
