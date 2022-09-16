<template>
  <article id="banner">
    <section class="content">
      <h1>Laissez vous porter par la puissance des pierres.</h1>
    </section>
  </article>

  <article class="content" id="lithotherapie">
    <section>
      <img
        src="@/assets/lithotherapie.webp"
        alt="Pierres utilisées avec la lithothérapie"
        loading="lazy"
      />
      <div>
        <h2>Lithothérapie</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          arcu ac risus laoreet sodales. Fusce tincidunt nibh ligula, sed tempus
          justo vehicula malesuada. Aenean erat lorem, porta eu purus vitae,
          pellentesque vulputate lacus. Etiam luctus arcu sed eleifend
          convallis. Vestibulum vel mi non mi dapibus pulvinar. Nunc blandit
          nisi quis congue efficitur. Maecenas ultrices metus eu mi facilisis
          consectetur. Aliquam molestie iaculis tellus convallis eleifend. Etiam
          eu massa enim. Sed vehicula ante sem, nec bibendum purus aliquam quis.
          Vivamus tincidunt, ipsum id tempus gravida, leo leo elementum mi, nec
          iaculis quam sapien a nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          arcu ac risus laoreet sodales. Fusce tincidunt nibh ligula, sed tempus
          justo vehicula malesuada. Aenean erat lorem, porta eu purus vitae,
          pellentesque vulputate lacus. Etiam luctus arcu sed eleifend
          convallis. Vestibulum vel mi non mi dapibus pulvinar. Nunc blandit
          nisi quis congue efficitur. Maecenas ultrices metus eu mi facilisis
          consectetur.
        </p>
      </div>
    </section>
  </article>

  <article class="content" id="realisations">
    <h2>Mes réalisations</h2>
    <section>
      <router-link to="/">
        <img
          src="@/assets/realisations/chemin_de_vie.webp"
          alt="Chemin de vie"
          loading="lazy"
        />
        <h3>Chemin de vie</h3>
      </router-link>
      <router-link to="/">
        <img
          src="@/assets/realisations/pendentifs_et_colliers.webp"
          alt="Pendentifs et colliers"
          loading="lazy"
        />
        <h3>Pendentifs et colliers</h3>
      </router-link>
      <router-link :to="{ name: 'pendules' }">
        <img
          src="@/assets/realisations/pendules.webp"
          alt="Pendules"
          loading="lazy"
        />
        <h3>Pendules</h3>
      </router-link>
      <router-link to="/">
        <img
          src="@/assets/realisations/druses_et_geodes.webp"
          alt="Druses et Géodes"
          loading="lazy"
        />
        <h3>Druses et Géodes</h3>
      </router-link>
      <router-link to="/">
        <img
          src="@/assets/realisations/pierres_roulees.webp"
          alt="Pierres roulées"
          loading="lazy"
        />
        <h3>Pierres roulées</h3>
      </router-link>
      <router-link to="/">
        <img
          src="@/assets/realisations/bracelets_therapeutiques.webp"
          alt="Bracelets thérapeutiques"
          loading="lazy"
        />
        <h3>Bracelets thérapeutiques</h3>
      </router-link>
    </section>
    <section>
      <Splide :options="pierres" aria-label="Pierres">
        <SplideSlide>
          <router-link to="/">
            <img
              src="@/assets/pierres/pierre.webp"
              alt="Pierre"
              loading="lazy"
            />
            <p>Pierre</p>
          </router-link>
        </SplideSlide>
      </Splide>
    </section>
  </article>

  <article class="content" id="a-propos">
    <h2>À propos</h2>
    <section>
      <div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
            arcu ac risus laoreet sodales. Fusce tincidunt nibh ligula, sed
            tempus justo vehicula malesuada. Aenean erat lorem, porta eu purus
            vitae, pellentesque vulputate lacus. Etiam luctus arcu sed eleifend
            convallis. Vestibulum vel mi non mi dapibus pulvinar. Nunc blandit
            nisi quis congue efficitur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
            arcu ac risus laoreet sodales. Fusce tincidunt nibh ligula, sed
            tempus justo vehicula malesuada. Aenean erat lorem, porta eu purus
            vitae, pellentesque vulputate lacus. Etiam luctus arcu sed eleifend
            convallis.
          </p>
        </div>
        <div>
          <a href="#">
            <font-awesome-icon icon="fa-brands fa-instagram" fixed-width />
          </a>
          <a href="#">
            <font-awesome-icon icon="fa-solid fa-envelope" fixed-width />
          </a>
          <a href="#">
            <font-awesome-icon icon="fa-solid fa-phone" fixed-width />
          </a>
        </div>
      </div>
      <img src="@/assets/lithotherapie.webp" alt="A propos" />
    </section>
  </article>

  <article id="avis">
    <section class="content">
      <h2>Avis</h2>
      <Splide :options="avis" aria-label="Avis">
        <SplideSlide>
          <section>
            <h3>Mathis S.M.</h3>
            <div>
              <font-awesome-icon icon="fa-solid fa-star" />
              <font-awesome-icon icon="fa-solid fa-star" />
              <font-awesome-icon icon="fa-solid fa-star" />
              <font-awesome-icon icon="fa-solid fa-star" />
              <font-awesome-icon icon="fa-regular fa-star-half-stroke" />
            </div>
          </section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
            arcu ac risus laoreet sodales. Fusce tincidunt nibh ligula, sed
            tempus justo vehicula malesuada.
          </p>
        </SplideSlide>
      </Splide>
    </section>
  </article>

  <article id="contact">
    <section class="content">
      <h2>Me contacter</h2>
      <p>
        Vous avez envie d'acheter l'une de mes créations ou besoins de
        renseignements ?<br />
        N'hésitez pas à me contacter par téléphone, mail ou avec le formulaire
        disponible sur la page de contact.
      </p>
      <router-link to="/">Contacter</router-link>
    </section>
  </article>
</template>

<script>
import "@splidejs/vue-splide/css";

export default {
  name: "homeView",
  title() {
    return "Accueil";
  },
  data() {
    return {
      pierres: {
        drag: "free",
        type: "loop",
        focus: "center",
        perPage: 5.5,
        rewind: true,
        rewindByDrag: true,
        keyboard: true,
        cover: true,
        arrows: true,
        pagination: false,
        gap: "2rem",
      },
      avis: {
        type: "loop",
        perPage: 2,
        rewind: true,
        rewindByDrag: true,
        keyboard: true,
        cover: true,
        arrows: true,
        pagination: false,
        gap: "4rem",
      },
    };
  },
};
</script>

<style scoped lang="scss">
#banner {
  height: 400px;
  background-image: url("@/assets/banner.webp");
  background-size: cover;
  background-position: right -40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  h1 {
    max-width: 900px;
    font-size: 4em;
  }
}

#lithotherapie section {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 3.62rem;

  img {
    width: 430px;
    height: 550px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
      rgba(0, 0, 0, 0.25) 0 25px 50px -12px;
  }

  div {
    h2 {
      font-size: 2em;
      margin-bottom: 3rem;
    }

    p {
      margin-bottom: 1rem;
      font-size: 1.1em;
      text-align: justify;
    }
  }
}

#realisations {
  h2 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 3rem;
  }

  > section:first-of-type {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: stretch;
    gap: 4rem;
    margin-bottom: 4rem;

    a {
      aspect-ratio: 1/1;
      border-radius: 6px;
      position: relative;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
        rgba(0, 0, 0, 0.25) 0 25px 50px -12px;

      img,
      h3 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      img {
        object-fit: cover;
        object-position: center center;
        transform: scale(1.005);
        transition: transform 250ms;
      }

      h3 {
        opacity: 0;
        transition: opacity 250ms;
        background-color: rgba(255, 255, 255, 0.55);
        backdrop-filter: blur(6px);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5em;
        color: black;
      }

      &:hover {
        img {
          transform: scale(1.03);
        }

        h3 {
          opacity: 1;
        }
      }
    }
  }

  > section:last-of-type .splide__slide {
    height: 140px;
    border-radius: 6px;
    overflow: hidden;

    a {
      position: relative;
      width: 100%;
      height: 100%;

      img {
        z-index: -1;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      p {
        transition: bottom 250ms;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.8rem;
        height: 40px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -40px;
        color: white;
        font-size: 1.1em;
        font-weight: 500;
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(6px);
      }

      &:hover p {
        bottom: 0;
      }
    }
  }
}

#a-propos {
  h2 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 3rem;
  }

  section {
    margin-inline: auto;
    max-width: 1000px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 3rem;

    > div {
      text-align: right;
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-end;
      justify-content: space-between;
      gap: 2.5rem;

      > div:first-of-type {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
        font-size: 1.06em;
      }

      > div:last-of-type {
        display: flex;
        flex-flow: row nowrap;
        gap: 0.5rem;
        font-size: 1.5em;

        a {
          padding: 1rem;
          color: black;
          text-decoration: none;
          transform: scale(1.01);
          transition: transform 250ms;

          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }

    img {
      height: 400px;
      width: 320px;
      object-fit: cover;
      border-radius: 6px;
      box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
        rgba(0, 0, 0, 0.25) 0 25px 50px -12px;
    }
  }
}

#avis {
  background-color: rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 3rem;
  }

  .splide {
    padding: 0 4rem;

    .splide__slide {
      background-color: white;
      padding: 1.5rem;
      border-radius: 6px;
      overflow: hidden;
      /*box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
        rgba(0, 0, 0, 0.25) 0 25px 50px -12px;*/

      section {
        display: flex;
        flex-flow: row nowrap;
        align-items: baseline;
        justify-content: space-between;
        font-size: 1.4em;
        color: black;
        margin-bottom: 1.5rem;

        div {
          display: flex;
          flex-flow: row nowrap;
          gap: 0.2rem;
          color: orange;
        }
      }

      p {
        z-index: 0;
        padding: 0 1.4rem;
        text-align: center;
        position: relative;

        &::before,
        &::after {
          z-index: -1;
          position: absolute;
          color: rgba(0, 0, 0, 0.08);
          font-size: 5em;
          font-weight: bold;
          line-height: 0;
        }
        &::before {
          content: "\201C";
          top: 1.4rem;
          left: -0.2rem;
        }
        &::after {
          content: "\201D";
          bottom: -1rem;
          right: -0.2rem;
        }
      }
    }
  }
}

#contact {
  background-color: rgba(0, 0, 0, 0.2);

  section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 2rem;

    h2 {
      font-size: 2em;
      text-align: center;
    }

    p {
      text-align: center;
    }

    a {
      display: block;
      text-align: center;
      padding: 0.8rem 1.8rem;
      border: 2px solid black;
      background-color: white;
      border-radius: 6px;
      font-size: 1em;
      color: black;
      text-decoration: none;
      font-weight: bold;
      transform: scale(1);
      transition: transform 250ms;

      &:hover {
        transform: scale(1.06);
      }
    }
  }
}
</style>
