<template>
  <Banniere
    titre="Pendentifs et Colliers"
    image="pendentifs_et_colliers/banner.webp"
  />

  <Description>
    <section>
      <div>
        <p>
          Le pendentif apporte autant de bienfaits qu'une pierre roulée tout en
          étant en permanence à votre contact. Il doit être purifié ou rechargé
          à la lune ou au soleil en fonction de la pierre.
        </p>
      </div>
      <img
        class="blob"
        src="@/assets/img/pendentifs_et_colliers/description_1.webp"
        alt="Pendentif"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <p>
          Je confectionne également des bracelets de cheville, chemins de vie,
          bracelets thérapeutiques, pierres de votre choix sur simple demande.
        </p>
      </div>
      <img
        class="blob"
        src="@/assets/img/pendentifs_et_colliers/description_2.jpg"
        alt="Collier"
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
          src: "DSC06704.jpg",
          title: "Description",
        },
        {
          src: "DSC06712.jpg",
          title: "Description",
        },
        {
          src: "DSC06773.jpg",
          title: "Description",
        },
        {
          src: "DSC06788.jpg",
          title: "Description",
        },
        {
          src: "DSC06789.jpg",
          title: "Description",
        },
        {
          src: "DSC06790.jpg",
          title: "Description",
        },
        {
          src: "IMG_20211024_134130.jpg",
          title: "Description",
        },
        {
          src: "IMG_20211024_152913.jpg",
          title: "Description",
        },
        {
          src: "IMG_20211024_152952.jpg",
          title: "Description",
        },
        {
          src: "IMG_20211024_154153.jpg",
          title: "Description",
        },
        {
          src: "IMG_20211024_154209.jpg",
          title: "Description",
        },
        {
          src: "IMG_20211024_154219.jpg",
          title: "Description",
        },
        {
          src: "IMG_20211024_154227.jpg",
          title: "Description",
        },
        {
          src: "IMG_20211024_154324.jpg",
          title: "Description",
        },
        {
          src: "IMG_20211024_154404.jpg",
          title: "Description",
        },
        {
          src: "IMG_20211024_154422.jpg",
          title: "Description",
        },
        {
          src: "IMG_20220226_094249.jpg",
          title: "Description",
        },
        {
          src: "IMG_20220226_112526.jpg",
          title: "Description",
        },
        {
          src: "IMG_20220226_112540.jpg",
          title: "Description",
        },
        {
          src: "IMG_20220226_112554.jpg",
          title: "Description",
        },
        {
          src: "IMG_20220226_112607.jpg",
          title: "Description",
        },
        {
          src: "IMG_20220226_112740.jpg",
          title: "Description",
        },
        {
          src: "IMG_20220226_113003.jpg",
          title: "Description",
        },
        {
          src: "IMG_20220226_113413.jpg",
          title: "Description",
        },
        {
          src: "IMG_20220331_190046.jpg",
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
