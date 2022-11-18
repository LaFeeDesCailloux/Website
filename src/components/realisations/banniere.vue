<template>
  <article id="banniere">
    <section class="content">
      <div>
        <h1>{{ titre }}</h1>
        <p>{{ titre }}</p>
      </div>
      <img
        id="stars"
        src="@/assets/svg/etoiles-realisations.svg"
        alt="Étoiles"
        loading="lazy"
      />
      <img
        id="product"
        :src="require('@/assets/img/' + image)"
        :alt="titre"
        loading="lazy"
      />
    </section>
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
  padding-top: 5.6rem;

  .content {
    margin-top: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      position: absolute;
      top: 2rem;
      left: 0;
      right: 0;

      h1,
      p {
        z-index: 0;
        margin-inline: auto;
        width: min(100%, 1200px);
        text-align: center;
        font-size: 8em;
        color: var(--global-text-color);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        font-weight: bold;
        animation: move 6s alternate infinite ease-in-out;
        animation-fill-mode: both;
        user-select: none;
        font-family: var(--title-font);

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

      @supports (-webkit-text-stroke: 1px var(--global-text-color)) {
        p {
          z-index: 1;
          display: unset;
          -webkit-text-stroke: 1px var(--global-text-color);
          -webkit-text-fill-color: transparent;
        }
      }
    }

    #product {
      position: relative;
      max-height: 450px;
    }

    #stars {
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
    }
  }
}
</style>
