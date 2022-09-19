<template>
  <article>
    <section class="content">
      <h2>Spécificités</h2>
      <div ref="wrapper">
        <slot />
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "specificitesComponent",
  mounted() {
    this.$refs.wrapper.style.gridTemplateColumns =
      "repeat(" + this.$refs.wrapper.children.length + ", 1fr)";
  },
};
</script>

<style scoped lang="scss">
article {
  background-color: rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 3rem;
  }

  section > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    :slotted(> div) {
      padding: 1.5rem;
      background-color: white;
      border-radius: 6px;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      gap: 1rem;
      text-align: center;
      box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
        rgba(0, 0, 0, 0.25) 0 25px 50px -12px;

      svg {
        font-size: 1.7em;
      }
    }
  }
}
</style>
