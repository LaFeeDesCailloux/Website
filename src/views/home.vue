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
          Lithothérapie vient du Grec "<span>Lithos</span>" qui signifie Pierre
          et "<span>Thérapeia</span>" thérapie ou cure ; thérapie par les
          pierres.<br />
          De nombreuses civilisations très anciennes utilisaient les pierres
          pour leurs nombreuses vertues.
        </p>
        <p>
          Ces pierres et cristaux agissent sur nos organismes par les vibrations
          qu'elles dégagent. Elles agissent tant sur le plan physique, mental,
          émotionnel ou encore spirituel.<br />
          Tout est question de rééquilibrage et d'harmonisation des énergies
          vibratoires.<br />
          Chaque minéral a ses propres caractéristiques en fonction de sa
          composition.
        </p>
        <p>
          Peu importe vos croyances en leurs vertus, les pierres vous
          apporteront tous leurs bienfaits.
        </p>
        <p><strong>Fiez-vous à votre intuition.</strong></p>
      </div>
    </section>
  </article>

  <article class="content" id="realisations">
    <h2>Mes réalisations</h2>
    <section>
      <router-link :to="{ name: 'chemins-de-vie' }">
        <img
          src="@/assets/chemins_de_vie/main.webp"
          alt="Chemin de vie"
          loading="lazy"
        />
        <div>
          <h3>Chemins de vie</h3>
          <p>
            A partir de 38€<br />
            jusqu'à 62€
          </p>
        </div>
      </router-link>
      <router-link :to="{ name: 'bracelets-therapeutiques' }">
        <img
          src="@/assets/bracelets_therapeutiques/main.webp"
          alt="Bracelets thérapeutiques"
          loading="lazy"
        />
        <div>
          <h3>Bracelets thérapeutiques</h3>
          <p>A partir de 18€</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'pendules' }">
        <img src="@/assets/pendules/main.webp" alt="Pendules" loading="lazy" />
        <div>
          <h3>Pendules</h3>
          <p>A partir de 22€</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'pendentifs-et-colliers' }">
        <img
          src="@/assets/pendentifs_et_colliers/main.webp"
          alt="Pendentifs et Colliers"
          loading="lazy"
        />
        <div>
          <h3>Pendentifs et Colliers</h3>
          <p>A partir de 8€</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'druses-et-geodes' }">
        <img
          src="@/assets/druses_et_geodes/main.webp"
          alt="Druses et Géodes"
          loading="lazy"
        />
        <div>
          <h3>Druses et Géodes</h3>
          <p>A partir de 35€</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'pierres-roulees' }">
        <img
          src="@/assets/pierres_roulees/main.webp"
          alt="Pierres roulées"
          loading="lazy"
        />
        <div>
          <h3>Pierres roulées</h3>
          <p>A partir de 5€</p>
        </div>
      </router-link>
    </section>
  </article>

  <article class="content" id="a-propos">
    <h2>À propos</h2>
    <section>
      <div>
        <div>
          <p><strong>Bienvenue,</strong></p>
          <p>
            Passionnée par les pierres et leurs innombrables vertus, je suis
            praticienne en lithothérapie depuis de nombreuses années.
          </p>
          <p>
            Afin de vous apporter ma connaissance sur le sujet, je souhaite
            aider toute personne qui en fera la demande car il n’y a pas de
            hasard. Si vous faites la démarche, le moment est venu pour vous.
          </p>
          <p>
            Je confectionne les chemins de vie et les bracelets thérapeutiques,
            avec tout mon cœur et amour, en portant particulièrement attention à
            la place de chaque pierre dans le bracelet car, détail très
            important, elles ne sont pas toutes compatibles entre elles et
            peuvent même se neutraliser.
          </p>
          <p>
            Si toutefois vous souhaitez posséder une création personnalisée,
            n’hésitez pas... prenez contact avec moi.
          </p>
          <p>
            <strong>Alors ?... Prêt pour l’aventure ?</strong>
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
      <img src="@/assets/a-propos.webp" alt="A propos" />
    </section>
  </article>

  <article id="avis">
    <section class="content">
      <h2>Ils me font confiance</h2>
      <Splide :options="avis" :has-track="false" aria-label="Avis">
        <SplideTrack>
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
        </SplideTrack>

        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
          </button>
          <button class="splide__arrow splide__arrow--next">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
          </button>
        </div>
      </Splide>
    </section>
  </article>

  <Contact />
</template>

<script>
import { Splide, SplideTrack, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import Contact from "@/components/global/contact";

export default {
  name: "homeView",
  title() {
    return "Accueil";
  },
  data() {
    return {
      avis: {
        type: "loop",
        perPage: 2,
        rewind: true,
        rewindByDrag: true,
        keyboard: true,
        cover: true,
        arrows: true,
        pagination: false,
        gap: "2.5rem",
      },
    };
  },
  components: {
    Splide,
    SplideTrack,
    SplideSlide,
    Contact,
  },
};
</script>

<style scoped lang="scss">
#banner {
  height: 400px;
  background-image: url("@/assets/banner.webp");
  background-size: cover;
  background-position: right;
  background-color: #eeeff1;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  h1 {
    max-width: 900px;
    font-size: 4em;
    text-shadow: 0 0 20px white;
  }
}

#lithotherapie {
  position: relative;

  h2 {
    position: absolute;
    top: 6rem;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 2em;
  }

  section {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 3.62rem;

    img {
      height: 500px;
      width: 450px;
      object-fit: cover;
      border-radius: 6px;
      box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
        rgba(0, 0, 0, 0.25) 0 25px 50px -12px;
    }

    div p {
      font-size: 1.1em;
      text-align: justify;
      margin-bottom: 1rem;

      span {
        font-style: oblique;
      }

      &:first-of-type {
        margin-top: 2rem;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
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

    a {
      aspect-ratio: 1/1;
      border-radius: 6px;
      position: relative;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
        rgba(0, 0, 0, 0.25) 0 25px 50px -12px;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        transform: scale(1.005);
        transition: transform 250ms;
      }

      div {
        opacity: 0;
        transition: opacity 250ms;
        backdrop-filter: blur(6px);
        padding: 1rem;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.55);
        color: black;
        text-align: center;

        h3 {
          font-size: 1.6em;
        }

        p {
          font-size: 1.22em;
        }
      }

      &:hover {
        img {
          transform: scale(1.03);
        }

        div {
          opacity: 1;
        }
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
    max-width: 1100px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 3rem;

    > div {
      height: 400px;
      text-align: right;
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-end;
      justify-content: space-between;
      padding: 0.4rem 0;
      gap: 1.5rem;

      > div:first-of-type {
        display: flex;
        flex-flow: column nowrap;
        gap: 0.5rem;
        font-size: 1.06em;

        p:last-of-type {
          margin-top: 0.75rem;
          font-size: 1.05em;
        }
      }

      > div:last-of-type {
        display: flex;
        flex-flow: row nowrap;
        gap: 0.5rem;
        font-size: 1.5em;

        a {
          padding: 0.6rem 1rem 0;
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
      width: 400px;
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

    .splide__arrow {
      height: 100%;
      border-radius: unset;
      color: black;
      font-size: 1.1em;
      padding: 0 1rem;
      background-color: transparent;
    }
  }
}
</style>
