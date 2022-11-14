<template>
  <article id="contact">
    <section class="content">
      <h2>Me contacter</h2>
      <p>
        Vous avez envie d'acheter l'une de mes créations ou besoins de
        renseignements ?<br />
        N'hésitez pas à me contacter par téléphone, mail ou avec le formulaire
        disponible sur la page de contact.
      </p>
      <router-link :to="{ name: 'contact' }">Contacter</router-link>
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
#contact {
  background-color: var(--secondary-bg-color);

  section {
    position: relative;
    margin-top: 0;
    padding: var(--content-padding) 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 2.2rem;
    overflow: hidden;

    h2 {
      z-index: 1;
      margin-bottom: 0;
    }

    p {
      z-index: 1;
      text-align: center;
      font-size: 1.1em;
    }

    a {
      z-index: 1;
      display: block;
      text-align: center;
      padding: 0.8rem 2rem;
      border: 2px solid black;
      border-radius: var(--border-radius);
      color: black;
      text-decoration: none;
      font-weight: bold;
      transform: scale(1.005);
      transition: transform 400ms;

      &:hover {
        transform: scale(1.04);
      }
    }

    img {
      opacity: 0.6;
      position: absolute;
      left: 4rem;
      bottom: -260px;
      transform: rotate(14deg);
      mix-blend-mode: screen;
      height: 620px;
    }
  }
}
</style>
