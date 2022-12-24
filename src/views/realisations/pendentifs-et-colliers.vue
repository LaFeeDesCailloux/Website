<template>
  <Banniere
    titre="Pendentifs et Colliers"
    image="pendentifs_et_colliers/banner.webp"
  />

  <Description>
    <section>
      <div>
        <p>
          Tout comme la
          <router-link :to="{ name: 'pierres-roulees' }">
            pierre roulée,
          </router-link>
          le pendentif et le collier sont des bijoux qui vous sont bénéfiques en
          vous apportant les énergies relatives au minéral choisi. Ils restent
          cependant plus facile à porter en restant en permanence à votre
          contact.
        </p>
        <p>
          Tout comme les autres pierres et cristaux, il doit être purifié ou
          rechargé à la lune ou au soleil en fonction de sa composition.
        </p>
      </div>
      <img
        class="blob"
        src="@/assets/img/pendentifs_et_colliers/description_1.webp"
        alt="Pendentif"
        loading="lazy"
      />
    </section>
  </Description>

  <EntretenirPierres />

  <Galerie dossier="pendentifs_et_colliers/galerie/" :images="images" />

  <Contact />
</template>

<script>
import Banniere from "@/components/realisations/banniere";
import Description from "@/components/realisations/description";
import EntretenirPierres from "@/components/realisations/entretenir-pierres";
import Galerie from "@/components/realisations/galerie";
import Contact from "@/components/global/contact";

export default {
  name: "pendentifsEtColliersView",
  title() {
    return "Pendentifs et Colliers";
  },
  components: {
    Banniere,
    Description,
    EntretenirPierres,
    Galerie,
    Contact,
  },
  data() {
    return {
      interval: null,
      images: [
        {
          src: "DSC06704.webp",
          title: "Description",
        },
        {
          src: "DSC06712.webp",
          title: "Description",
        },
        {
          src: "DSC06773.webp",
          title: "Description",
        },
        {
          src: "DSC06788.webp",
          title: "Description",
        },
        {
          src: "DSC06789.webp",
          title: "Description",
        },
        {
          src: "DSC06790.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_134130.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_152913.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_152952.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_154153.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_154209.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_154219.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_154227.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_154324.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_154404.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_154422.webp",
          title: "Description",
        },
        {
          src: "IMG_20220226_094249.webp",
          title: "Description",
        },
        {
          src: "IMG_20220226_112526.webp",
          title: "Description",
        },
        {
          src: "IMG_20220226_112540.webp",
          title: "Description",
        },
        {
          src: "IMG_20220226_112554.webp",
          title: "Description",
        },
        {
          src: "IMG_20220226_112607.webp",
          title: "Description",
        },
        {
          src: "IMG_20220226_112740.webp",
          title: "Description",
        },
        {
          src: "IMG_20220226_113003.webp",
          title: "Description",
        },
        {
          src: "IMG_20220226_113413.webp",
          title: "Description",
        },
        {
          src: "IMG_20220331_190046.webp",
          title: "Description",
        },
      ],
    };
  },
  mounted() {
    setTimeout(this.generateBlobs, 200);
    this.interval = setInterval(this.generateBlobs, 12000);
    window.addEventListener("resize", this.toggleBlobs);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.toggleBlobs);
    clearInterval(this.interval);
  },
};
</script>
