<template>
  <article id="galerie">
    <section class="content">
      <h2>Galerie</h2>
      <div>
        <div v-for="image in images" :key="image.chemin">
          <img
            @click="showLightbox(image.chemin)"
            :src="require('@/' + dossier + image.chemin)"
            :alt="image.description"
            :title="image.description"
          />
          <div>
            <h3>{{ image.description }}</h3>
            <font-awesome-icon icon="fa-solid fa-info" />
          </div>
        </div>
      </div>
    </section>
  </article>

  <lightbox
    id="mylightbox"
    ref="myLightbox"
    :images="images"
    :timeout-duration="1200"
    :close-on-backdrop-click="true"
    :current-image-name="currentImage"
    @on-lightbox-close="onLightboxClose"
  />
</template>

<script>
import Lightbox from "vue-my-photos";
// import disableScroll from "disable-scroll";

export default {
  name: "galerieComponent",
  props: ["dossier", "images"],
  components: {
    Lightbox,
  },
  data() {
    return {
      body: document.getElementsByTagName("body")[0],
      currentImage: "",
    };
  },
  methods: {
    showLightbox(image) {
      console.log("show " + image);
      // disableScroll.on();
      // this.body.style.overflow = "hidden";
      this.currentImage = image;
    },
    onLightboxClose(image) {
      this.currentImage = image;
      console.log("close");
      // disableScroll.off();
      // this.body.style.overflow = "overlay";
    },
  },
};
</script>

<style scoped lang="scss">
article {
  margin: var(--content-margin) 0;

  .content {
    margin-top: 0;

    > div {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      > div {
        flex: 1 1 100%;
        border-radius: var(--border-radius);
        overflow: hidden;
        position: relative;
        cursor: pointer;
        height: 250px;
        box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
          rgba(0, 0, 0, 0.25) 0 25px 50px -12px;

        &:hover div {
          bottom: 0;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        > div {
          transition: bottom 250ms;
          height: 50px;
          position: absolute;
          bottom: -50px;
          left: 0;
          right: 0;
          padding: 0 1.2rem;
          background-color: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;

          h3 {
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }

          svg {
            width: 14px !important;
            height: 14px !important;
            padding: 0.3rem;
            border-radius: 50%;
            border: 1px solid black;
          }
        }

        @media (min-width: 500px) {
          height: 280px;
          flex: 1 1 calc(100% / 2 - 2rem);
          max-width: calc(100% / 2 - 2rem);
        }

        @media (min-width: 900px) {
          height: 300px;
          flex: 1 1 calc(100% / 3 - 2rem);
          max-width: calc(100% / 3 - 2rem);
        }
      }
    }
  }
}
</style>
