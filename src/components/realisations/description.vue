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
  gap: 5rem 3rem;

  :slotted(section) {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    width: min(100%, 1200px);
    margin-inline: auto;

    &:nth-of-type(even) {
      flex-direction: row-reverse;

      div {
        left: unset;
        right: 0;
      }

      i {
        left: 50%;
        right: calc(30% - 1px);
        transform: rotate(180deg);
      }
    }

    div {
      z-index: 1;
      position: absolute;
      left: 0;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      backdrop-filter: blur(16px);
      padding: 2rem;
      max-width: 420px;
      text-align: justify;
      font-size: 1.05em;
    }

    i {
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(30% - 1px);
      right: 50%;
      background: rgb(255, 255, 255);
      background: -moz-linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      background: -webkit-linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffffff",GradientType=1);
    }

    img {
      object-fit: cover;
      width: 70%;
      max-height: 600px;
    }
  }
}
</style>
