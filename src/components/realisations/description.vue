<template>
  <article class="content">
    <slot />
  </article>
</template>

<script>
export default {
  name: "descriptionComponent",
};
</script>

<style scoped lang="scss">
article {
  display: flex;
  flex-flow: column nowrap;
  gap: calc(var(--content-padding) / 1.5);
  margin-bottom: var(--content-margin);

  :slotted(section) {
    width: 100%;
    display: inline-flex;
    align-items: center;
    position: relative;
    height: 600px;

    &:nth-of-type(odd) {
      flex-direction: row-reverse;

      img {
        left: 0;
        border-radius: 40% 60% / 63% 60% 40% 37%;
      }
    }

    div {
      z-index: 1;
      background-color: rgba(200, 200, 200, 0.6);
      border-radius: var(--border-radius);
      backdrop-filter: blur(var(--blur));
      padding: 2rem;
      width: 800px;
      text-align: justify;
      font-size: 1.1em;
      box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
        rgba(0, 0, 0, 0.25) 0 25px 50px -12px;

      h2 {
        font-size: 1.1em;
        margin-top: 1.6rem;
      }

      p {
        margin-bottom: 1rem;

        &:last-of-type {
          margin-bottom: 0;
        }
      }

      li {
        text-align: start;
        margin: 0.4rem 0 0.4rem 1rem;
      }
    }

    img {
      position: absolute;
      right: 2rem;
      object-fit: cover;
      width: 760px;
      height: inherit;
      border-radius: 61% 39% 58% 42% / 75% 58% 42% 25%;
    }
  }
}
</style>
