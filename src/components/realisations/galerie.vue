<template>
  <article>
    <section class="content">
      <h2>Galerie</h2>
      <div>
        <div v-for="image in images" :key="image.chemin">
          <img
            loading="lazy"
            @click="showLightbox(image.chemin)"
            :src="require('@/assets/' + dossier + image.chemin)"
            :alt="image.description"
            :title="image.titre"
          />
          <div>
            <h3>{{ image.titre }}</h3>
            <font-awesome-icon icon="fa-solid fa-info" fixed-width />
          </div>
        </div>
      </div>
    </section>
  </article>

  <lightbox
    id="lightbox"
    ref="lightbox"
    :images="images"
    :current-image-name="currentImage"
    :timeout-duration="1200"
    :close-on-backdrop-click="true"
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
      this.$refs.lightbox.show(image);
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
  h2 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 3rem;
  }

  section > div {
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;

    > div {
      flex: 1 1 33%;
      border-radius: 6px;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      max-height: 260px;
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

        svg {
          width: 14px;
          height: 14px;
          padding: 0.3rem;
          border-radius: 50%;
          border: 1px solid black;
        }
      }
    }
  }
}
</style>
