<template>
  <article id="entretenir-ses-pierres">
    <img
      src="@/assets/img/entretenir-pierres.webp"
      alt="Entretenir ses pierres"
    />
    <section class="content">
      <h2>Entretenir ses pierres</h2>
      <p>
        Chaque pierre demande une attention particulière, certaines règles sont
        à respecter. Vous retrouverez sur cette page quelques conseils pour
        obtenir le meilleur de vos pierres.
      </p>
      <router-link :to="{ name: 'entretenir-ses-pierres' }">
        Voir les conseils
      </router-link>
      <img src="@/assets/svg/fee.svg" alt="Fée" />
    </section>
  </article>
</template>

<script>
export default {
  name: "entretenirPierresComponent",
};
</script>

<style scoped lang="scss">
article {
  padding: var(--content-padding) 0;
  position: relative;
  background-color: var(--primary-bg-color-alt);
  overflow: hidden;

  > img {
    z-index: -1;
    position: absolute;
    top: -2rem;
    left: -2rem;
    bottom: -2rem;
    right: -2rem;
    width: calc(100% + 4rem);
    height: calc(100% + 4rem);
    object-fit: cover;
    filter: blur(var(--blur));
  }

  .content {
    z-index: 1;
    position: relative;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
    color: white;

    h2 {
      margin-bottom: 0;
      text-shadow: 0 3px 7px rgba(0, 0, 0, 0.5);
    }

    p {
      width: min(100% - 2rem, 700px);
      text-shadow: 0 3px 7px rgba(0, 0, 0, 0.5);
    }

    a {
      z-index: 1;
      display: block;
      text-align: center;
      padding: 0.8rem 2rem;
      border: 2px solid white;
      border-radius: var(--border-radius);
      color: white;
      text-decoration: none;
      font-weight: bold;
      transform: scale(1.005);
      transition: transform 400ms;

      &:hover {
        transform: scale(1.04);
      }
    }

    img {
      opacity: 0.5;
      z-index: -1;
      position: absolute;
      transform: scaleX(-1) rotate(10deg);
      right: -100px;
      bottom: -100px;
      height: 320px;

      @media (min-width: 1200px) {
        opacity: 1;
        right: 0;
      }
    }
  }
}
</style>
