<template>
  <article>
    <section class="content" id="avis">
      <h2>Ils me font confiance</h2>
      <Splide :options="avis" :has-track="false" aria-label="Avis">
        <SplideTrack>
          <SplideSlide>
            <section>
              <h3>Nathalie B.</h3>
              <div>
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <!--<font-awesome-icon icon="fa-regular fa-star-half-stroke" />-->
              </div>
            </section>
            <p>
              Je porte un bracelet et une pierre en collier, depuis plusieurs
              mois, et ceci font preuve d'une grande efficacité et en plus, sont
              très jolis à porter.
              <br />
              Je vous recommande de vous rapprocher de Cathy qui sera bien vous
              conseiller.
            </p>
          </SplideSlide>
          <SplideSlide>
            <section>
              <h3>Nathalie</h3>
              <div>
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
              </div>
            </section>
            <p>
              J'ai commandé deux bracelets pour différentes utilisations. J'ai
              été contente des produits et des explications de Cathy qui est à
              l'écoute. <br />
              Je l'ai recommandée à plusieurs personnes, je lui donne 5 étoiles.
            </p>
          </SplideSlide>
          <SplideSlide>
            <section>
              <h3>Isabelle</h3>
              <div>
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
              </div>
            </section>
            <p>Personne agréable et à l'écoute.</p>
          </SplideSlide>
          <SplideSlide>
            <section>
              <h3>Marie A.</h3>
              <div>
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
              </div>
            </section>
            <p>
              Ravie de mon chemin de vie, que je porte tous les jours.
              Confection rapide et sur mesure. <br />
              Cathy est quelqu'un qui est à l'écoute et professionnelle, qui
              prend le temps de nous expliquer chaque pierre qui le compose, ses
              vertus, ses bienfaits et bien sûr son entretien.
              <br />
              Ce bracelet me reflète parfaitement et je me sens plus apaisée
              depuis.
            </p>
          </SplideSlide>
        </SplideTrack>

        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev">
            <font-awesome-icon icon="fa-solid fa-caret-right" />
          </button>
          <button class="splide__arrow splide__arrow--next">
            <font-awesome-icon icon="fa-solid fa-caret-right" />
          </button>
        </div>
      </Splide>
    </section>
  </article>
</template>

<script>
import { Splide, SplideTrack, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

export default {
  name: "avisComponent",
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
  },
};
</script>

<style scoped lang="scss">
article {
  margin: var(--content-margin) 0;

  .content {
    margin-top: 0;

    .splide {
      padding: 0 3rem;

      .splide__slide {
        background-color: white;
        padding: 1.6rem;
        border-radius: var(--border-radius);
        border: 2px solid black;
        /*box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
          rgba(0, 0, 0, 0.25) 0 25px 50px -12px;*/

        section {
          display: flex;
          flex-flow: row nowrap;
          align-items: baseline;
          justify-content: space-between;
          font-size: 1.4em;
          color: black;
          margin-bottom: 1.6rem;

          div {
            display: flex;
            flex-flow: row nowrap;
            gap: 0.2rem;
            color: var(--stars-color);
          }
        }

        p {
          z-index: 0;
          padding: 0 1.4rem;
          text-align: center;
          position: relative;
          font-size: 1.1em;

          &::before,
          &::after {
            z-index: -1;
            position: absolute;
            color: rgba(0, 0, 0, 0.08);
            font-size: 5em;
            line-height: 0;
            font-family: var(--title-font);
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
        font-size: 1.5em;
        opacity: 1;
        width: 40px;
        background-color: transparent;

        &.splide__arrow--prev {
          left: 0;
        }

        &.splide__arrow--next {
          right: 0;
        }
      }
    }
  }
}
</style>
