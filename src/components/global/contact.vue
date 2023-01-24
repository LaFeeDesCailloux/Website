<template>
  <article id="contact">
    <section class="content">
      <h2>Me contacter</h2>
      <p>
        Vous souhaitez acheter des bracelets et pierres de lithothérapie pour
        améliorer votre bien-être et votre équilibre émotionnel ou avez
        simplement besoin de renseignements supplémentaires ?
        <br />
        N'hésitez pas à me contacter par téléphone, mail ou avec le formulaire
        disponible sur la page de contact.
      </p>
      <router-link class="button" :to="{ name: 'contact' }">
        Contacter
      </router-link>
      <img src="@/assets/svg/cristaux.svg" alt="Cristaux" />
    </section>
  </article>
</template>

<script>
export default {
  name: "contactComponent",
};
</script>

<style scoped lang="scss">
article {
  background-color: var(--secondary-bg-color);
  overflow: hidden;

  section {
    position: relative;
    margin-top: 0;
    padding: var(--content-padding) 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 2.2rem;

    h2 {
      z-index: 1;
      margin-bottom: 0;
    }

    p {
      z-index: 1;
      text-align: center;
      font-size: 1.1em;
      max-width: 900px;
    }

    img {
      height: 136%;
      opacity: 0.6;
      position: absolute;
      top: 2em;
      left: -20px;
      transform: rotate(14deg);
      mix-blend-mode: screen;

      @media (max-width: 500px) {
        left: -100px;
      }
    }
  }
}
</style>
