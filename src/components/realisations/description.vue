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
  gap: var(--content-padding);
  margin-bottom: var(--content-margin);

  :slotted(section) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;

    div {
      z-index: 1;
      background-color: rgba(200, 200, 200, 0.6);
      border-radius: var(--border-radius);
      backdrop-filter: blur(var(--blur));
      padding: 2rem;
      width: 100%;
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
      object-fit: cover;
      width: 100%;
      height: 360px;
      border-radius: var(--border-radius);
      box-shadow: none;
    }

    @media (min-width: 900px) {
      flex-direction: row;
      align-items: center;
      position: relative;
      height: 600px;
      gap: unset;

      &:nth-of-type(odd) {
        flex-direction: row-reverse;

        img {
          left: 0;
          border-radius: 40% 60% / 63% 60% 40% 37%;
        }
      }

      div {
        width: 56%;
      }

      img {
        position: absolute;
        right: 2rem;
        width: 56%;
        height: inherit;
        border-radius: 61% 39% 58% 42% / 75% 58% 42% 25%;
        box-shadow: 28px 28px var(--primary-bg-color);
      }
    }
  }
}
</style>
