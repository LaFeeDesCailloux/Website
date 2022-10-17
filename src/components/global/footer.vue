<template>
  <footer>
    <section>
      <p>
        © Tous droits réservés |
        <router-link :to="{ name: 'home' }">LaFeeDesCailloux.fr</router-link>
      </p>
      <p>
        Site Web réalisé par <a href="https://github.com/Minarox">Mathis</a>.
      </p>
    </section>
  </footer>
</template>

<script>
export default {
  name: "footerComponent",
};
</script>

<style scoped lang="scss">
footer {
  padding: 1rem;
  background-color: var(--secondary-bg-color);
  display: flex;
  justify-content: center;
  font-size: 0.8em;

  section {
    width: min(100%, var(--max-width-global));
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    a {
      text-decoration: none;
      color: black;
    }
  }
}
</style>
