<template>
    <article id="galerie">
        <section class="content">
            <h2>Galerie</h2>
            <div>
                <div v-for="(image, index) in images" :key="index"
                    @click="() => showLightbox(index)">
                    <img :src="image.src" :alt="image.title" :title="image.title" />
                    <div v-if="image.title">
                        <h3>{{ image.title }}</h3>
                        <font-awesome-icon icon="fa-solid fa-info" />
                    </div>
                </div>
            </div>
        </section>
    </article>

    <Lightbox
        :visible="visible"
        :imgs="images"
        :index="currentIndex"
        @hide="hideLightbox"
    />
</template>

<script setup lang="ts">
    import { ref, computed } from "vue"
    import Lightbox from "vue-easy-lightbox"
    import type { GalleryImage } from "@types"

    const props = defineProps<{
        dossier: string,
        images: GalleryImage[]
    }>()

    const visible = ref(false)
    const currentIndex = ref(-1)

    const images = computed((): GalleryImage[] => {
        let array: GalleryImage[] = []
        props.images.filter((image) => {
            image.src = require("@assets/img/" + props.dossier + image.src);
            array.push(image);
        });
        return array
    })

    function showLightbox(index: number) {
        currentIndex.value = index
        visible.value = true
    }

    function hideLightbox() {
        visible.value = false
    }
</script>

<style scoped>
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
