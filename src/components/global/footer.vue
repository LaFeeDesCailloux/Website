<template>
  <footer>
    <p>
      © {{ current_year }} - Tous droits réservés &nbsp;|&nbsp;
      <router-link :to="{ name: 'home' }">LaFeeDesCailloux.fr</router-link>
    </p>
    <p>Site Web réalisé par <a href="https://github.com/Minarox">Mathis</a>.</p>
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
  padding: 1.5rem 2rem;
  display: flex;
  flex-flow: row wrap;
  width: min(100%, var(--content-max-width));
  margin-inline: auto;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8em;
  opacity: 0.9;
  gap: 0.5rem 2rem;

  a {
    text-decoration: none;
    color: black;
  }
}
</style>
