<template>
  <article>
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
  padding: var(--content-padding) 0;

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
