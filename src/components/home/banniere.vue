<template>
  <article>
    <img id="stones" src="@/assets/img/banner.webp" alt="Pierres" />
    <img id="stars" src="@/assets/svg/etoiles-realisations.svg" alt="Étoiles" />
    <img id="fee" src="@/assets/svg/fee.svg" alt="Fée" />
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
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  width: 100%;
  height: 550px;

  #stones {
    opacity: 0.16;
    position: absolute;
    top: -500px;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
    height: 900px;
  }

  #stars {
    position: absolute;
    top: 60px;
    height: 300px;
    left: 50%;
    transform: translateX(-50%);
  }

  #fee,
  #separator {
    display: none;
  }

  .content {
    text-align: center;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;

    h1 {
      z-index: 1;
      position: relative;
      font-size: clamp(2.4em, 6.4vw, 4.3em);
      text-align: center;
      margin-bottom: 1.5rem;
      text-shadow: 0 0 20px #ffffff;
    }

    a {
      z-index: 1;
      position: relative;
      font-size: 1.1em;
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
      opacity: 0.7;
      z-index: 0;
      position: absolute;
      top: -40px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 120%;
      clip-path: inset(0 0 30px 0);
    }
  }

  @media (min-width: 900px) {
    height: 740px;

    #stones {
      opacity: 1;
      height: 570px;
      top: unset;
      padding-right: 1150px;
      transform: translateX(-50%) scaleX(-1);
    }

    #fee {
      display: unset !important;
      padding-left: 180px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(14deg);
      top: 80px;
      height: 280px;
      filter: drop-shadow(0 0 12px #eeeff1);
    }

    #separator {
      display: unset !important;
      height: inherit;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      filter: drop-shadow(0 -20px 20px rgb(0, 0, 0, 0.15));
      clip-path: inset(0 1px 1px 1px);
    }

    #stars {
      display: none;
    }

    .content {
      text-align: left;
      top: 160px;

      h1 {
        text-align: left;
      }

      a {
        font-size: 1.4em;
      }

      img {
        opacity: 0.3;
        left: 192px;
        transform: rotate(20deg) translateX(-80px) translateY(28px);

        @media (min-width: 1050px) {
          transform: rotate(20deg);
        }
      }
    }
  }

  @media (min-width: 700px) and (max-width: 900px) {
    .content h1 {
      font-size: 3.8em;
    }
  }

  @media (min-width: 450px) and (max-width: 700px) {
    .content h1 {
      font-size: 2.8em;
    }
  }
}
</style>
