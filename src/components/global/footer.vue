<template>
  <footer>
    <p>
      © {{ current_year }} - Tous droits réservés &nbsp;|&nbsp;
      <router-link :to="{ name: 'home' }">LaFeeDesCailloux.fr</router-link>
    </p>
    <p>
      Site Web réalisé par <a href="https://github.com/Minarox">Mathis SM</a>.
    </p>
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
  padding: 1.5rem 2rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem 2rem;
  font-size: 0.8em;
  text-align: center;

  @media (min-width: 580px) {
    flex-direction: row;
  }

  a {
    text-decoration: none;
    color: black;
  }
}
</style>
