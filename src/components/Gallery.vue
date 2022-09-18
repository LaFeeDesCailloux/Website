<template>
  <transition-group name="thumbnailfade" tag="div">
    <img
      loading="lazy"
      v-for="image in images"
      :key="image.chemin"
      @click="showLightbox(image.chemin)"
      :src="require('@/assets/' + dossier + image.chemin)"
      :alt="image.description"
      :title="image.titre"
    />
  </transition-group>

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
  name: "galleryComponent",
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
div {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 2rem;

  img {
    flex: 1 1 20%;
    width: 270px;
    height: 200px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    object-fit: cover;
    object-position: center center;
  }
}

.thumbnailfade-leave-active,
.thumbnailfade-enter-active {
  transition: all 0.4s ease;
}

.thumbnailfade-enter-active {
  transition-delay: 0.4s;
}

.thumbnailfade-enter,
.thumbnailfade-leave-to {
  opacity: 0;
}
</style>
