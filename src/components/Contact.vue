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
      <router-link to="/">Contacter</router-link>
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
  background-color: rgba(0, 0, 0, 0.2);

  section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 2rem;

    h2 {
      font-size: 2em;
      text-align: center;
    }

    p {
      text-align: center;
    }

    a {
      display: block;
      text-align: center;
      padding: 0.7rem 1.8rem;
      border: 2px solid black;
      border-radius: 6px;
      font-size: 0.9em;
      color: black;
      text-decoration: none;
      font-weight: bold;
      transform: scale(1);
      transition: transform 400ms;

      &:hover {
        transform: scale(1.04);
      }
    }
  }
}
</style>
