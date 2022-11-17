<template>
  <article>
    <img id="stones" src="@/assets/img/banner.webp" alt="Bannière" />
    <img id="fee" src="@/assets/svg/fée.svg" alt="Fée" />
    <img id="separator" src="@/assets/svg/main-banner.svg" alt="Séparateur" />
    <section class="content">
      <h1>
        Laissez vous porter<br />
        par la puissance des pierres.
      </h1>
      <a @click.prevent="scrollToRealisation">Découvrir mon travail</a>
      <img src="@/assets/svg/cristaux.svg" alt="Cristaux" />
    </section>
  </article>
</template>

<script>
export default {
  name: "banniereComponent",
  methods: {
    scrollToRealisation() {
      window.scrollTo({
        top:
          document.getElementById("mes-realisations").getBoundingClientRect()
            .top +
          window.pageYOffset -
          100,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped lang="scss">
article {
  position: relative;
  height: 660px;
  background-color: #eeeff1;

  #stones {
    position: absolute;
    right: 0;
    height: inherit;
    transform: scaleX(-1);
  }

  #fee {
    position: absolute;
    right: 0;
    left: 4rem;
    top: 90px;
    margin-inline: auto;
    height: 300px;
    transform: rotate(14deg);
    filter: drop-shadow(0 0 12px #eeeff1);
  }

  #separator {
    position: absolute;
    top: 180px;
    width: 100%;
    filter: drop-shadow(0 -20px 10px rgb(0, 0, 0, 0.1));
  }

  .content {
    position: absolute;
    top: 180px;
    left: 0;
    right: 0;

    h1 {
      z-index: 1;
      position: relative;
      font-size: 3.8em;
      text-align: left;
      margin-bottom: 1.5rem;
    }

    a {
      z-index: 1;
      position: relative;
      font-size: 1.4em;
      display: inline-block;
      text-align: center;
      padding: 0.6rem 4rem;
      border: 3px solid var(--special-text-color);
      border-radius: var(--border-radius);
      color: var(--special-text-color);
      background-color: var(--global-bg-color);
      text-decoration: none;
      font-weight: bold;
      transform: scale(1.005) translateX(0);
      transition: transform 400ms;
      cursor: pointer;

      &:hover {
        transform: scale(1.04) translateX(6px);
      }
    }

    img {
      opacity: 0.3;
      z-index: 0;
      position: absolute;
      bottom: 0;
      left: 192px;
      height: 300px;
      transform: rotate(20deg);
    }
  }
}
</style>
