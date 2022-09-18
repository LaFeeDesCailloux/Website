<template>
  <article id="banner">
    <h1>Pendules</h1>
    <img
      src="@/assets/realisations/pendules/header_pendule.webp"
      alt="Pendule"
      loading="lazy"
    />
    <i />
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
      <i />
      <img
        src="@/assets/realisations/pendules/DSC06813.jpg"
        alt="Pendule"
        loading="lazy"
      />
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
      <i />
      <img src="@/assets/lithotherapie.webp" alt="Pendule" loading="lazy" />
    </section>
  </article>

  <article id="plus">
    <section class="content">
      <h2>Les plus</h2>
      <div>
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
      </div>
    </section>
  </article>
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

  i {
    position: absolute;
    top: 95%;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(255, 255, 255);
    background: -moz-linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    background: -webkit-linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffffff",GradientType=1);
  }
}

#description {
  display: flex;
  flex-flow: column nowrap;
  gap: 5rem 3rem;

  section {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    width: min(100%, 1200px);
    margin-inline: auto;

    &:last-of-type {
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
      max-width: 450px;
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
      max-height: 500px;
    }
  }
}

#plus {
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

    > div {
      padding: 1.3rem;
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
