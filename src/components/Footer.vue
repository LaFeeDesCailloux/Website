<template>
  <footer>
    <p>© Tous droits réservés.</p>
    <router-link :to="{ name: 'home' }">LaFeeDesCailloux.fr</router-link>
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
  flex-flow: column nowrap;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9em;

  a {
    text-decoration: none;
    color: black;
  }
}
</style>
