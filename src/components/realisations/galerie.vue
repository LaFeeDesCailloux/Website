<template>
  <article id="galerie">
    <section class="content">
      <h2>Galerie</h2>
      <div>
        <div
          v-for="(image, index) in imgs"
          :key="index"
          @click="() => showLightbox(index)"
        >
          <img :src="image.src" :alt="image.title" :title="image.title" />
          <div v-if="image.title">
            <h3>{{ image.title }}</h3>
            <font-awesome-icon icon="fa-solid fa-info" />
          </div>
        </div>
      </div>
    </section>
  </article>

  <lightbox
    :visible="visible"
    :imgs="imgs"
    :index="current_index"
    @hide="hideLightbox"
  />
</template>

<script>
import Lightbox from "vue-easy-lightbox";

export default {
  name: "galerieComponent",
  props: ["dossier", "images"],
  components: {
    Lightbox,
  },
  data() {
    return {
      visible: false,
      current_index: "",
    };
  },
  computed: {
    imgs() {
      let array = [];
      this.images.filter((image) => {
        image.src = require("@/assets/img/" + this.dossier + image.src);
        array.push(image);
      });
      return array;
    },
  },
  methods: {
    showLightbox(index) {
      this.current_index = index;
      this.visible = true;
    },
    hideLightbox() {
      this.visible = false;
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
