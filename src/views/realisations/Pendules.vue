<template>
  <article id="banner">
    <h1>Pendules</h1>
    <img
      src="@/assets/realisations/pendules/header_pendule.webp"
      alt="Pendule"
      loading="lazy"
    />
  </article>

  <article class="content" id="description">
    <section>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non arcu
        arcu ac risus laoreet sodales. Fusce tincidunt nibh ligula, sed tempus
        justo vehicula malesuada. Aenean erat lorem, porta eu purus vitae,
        pellentesque vulputate lacus. Etiam luctus arcu sed eleifend convallis.
        Vestibulum vel mi non mi dapibus pulvinar. Nunc blandit nisi quis congue
        efficitur. Maecenas ultrices metus eu mi facilisis consectetur. Aliquam
        molestie iaculis tellus convallis eleifend. Etiam eu massa enim. Sed
        vehicula ante sem, nec bibendum purus aliquam quis. Vivamus tincidunt,
        ipsum id tempus gravida, leo leo elementum mi, nec iaculis quam sapien a
        nisi.
      </div>
      <img src="@/assets/lithotherapie.webp" alt="Pendule" loading="lazy" />
    </section>
    <section>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non arcu
        arcu ac risus laoreet sodales. Fusce tincidunt nibh ligula, sed tempus
        justo vehicula malesuada. Aenean erat lorem, porta eu purus vitae,
        pellentesque vulputate lacus. Etiam luctus arcu sed eleifend convallis.
        Vestibulum vel mi non mi dapibus pulvinar. Nunc blandit nisi quis congue
        efficitur. Maecenas ultrices metus eu mi facilisis consectetur. Aliquam
        molestie iaculis tellus convallis eleifend. Etiam eu massa enim. Sed
        vehicula ante sem, nec bibendum purus aliquam quis. Vivamus tincidunt,
        ipsum id tempus gravida, leo leo elementum mi, nec iaculis quam sapien a
        nisi.
      </div>
      <img src="@/assets/lithotherapie.webp" alt="Pendule" loading="lazy" />
    </section>
  </article>

  <!--<article class="content" id="plus">
    <hr />
    <h2>Les plus</h2>
    <section>
      <div>
        <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          arcu ac risus laoreet sodales.
        </p>
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          arcu ac risus laoreet sodales.
        </p>
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          arcu ac risus laoreet sodales.
        </p>
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          arcu ac risus laoreet sodales.
        </p>
      </div>
    </section>
  </article>-->
</template>

<script>
export default {
  name: "pendulesView",
  title() {
    return "Pendules";
  },
};
</script>

<style scoped lang="scss">
#banner {
  z-index: 0;
  background-color: #070707;
  position: relative;

  h1 {
    z-index: -1;
    text-align: center;
    font-size: 8em;
    color: white;
    position: absolute;
    top: 3rem;
    left: 0;
    right: 0;
  }

  img {
    display: block;
    padding-top: 8.4rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

#description {
  display: flex;
  flex-flow: column nowrap;
  gap: 3rem;

  section {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    border-radius: 6px;
    overflow: hidden;

    &:last-of-type {
      flex-direction: row-reverse;

      div {
        left: unset;
        right: 0;
      }
    }

    div {
      position: absolute;
      left: 0;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      backdrop-filter: blur(8px);
      padding: 2rem;
      max-width: 550px;
      text-align: justify;
      font-size: 1.05em;
    }

    img {
      object-fit: cover;
    }
  }
}
</style>
