<template>
  <footer>
    <p>
      © {{ current_year }} - Tous droits réservés &nbsp;|&nbsp;
      <router-link :to="{ name: 'home' }">LaFeeDesCailloux.fr</router-link>
    </p>
    <section>
      <router-link :to="{ name: 'plan-du-site' }">Plan du site</router-link>
      <router-link :to="{ name: 'mentions-legales' }">
        Mentions légales
      </router-link>
      <router-link :to="{ name: 'cgu' }">CGU</router-link>
      <router-link :to="{ name: 'politique-de-confidentialite' }">
        Politique de confidentialité
      </router-link>
    </section>
  </footer>
</template>

<script>
export default {
  name: "footerComponent",
  computed: {
    current_year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped lang="scss">
footer {
  opacity: 0.8;
  width: min(100%, var(--content-max-width));
  padding: 1.2rem 2rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem 2rem;
  font-size: 0.8em;
  text-align: center;

  @media (min-width: 900px) {
    flex-direction: row;
  }

  a {
    text-decoration: none;
    color: black;
  }

  section {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;

    a {
      padding: 0.3rem 0.9rem;
    }
  }
}
</style>
