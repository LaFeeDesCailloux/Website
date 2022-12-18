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

  <Galerie
    dossier="assets/img/pendentifs_et_colliers/galerie/"
    :images="images"
  />

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
          description: "Description",
          chemin: "DSC06704.jpg",
        },
        {
          description: "Description",
          chemin: "DSC06712.jpg",
        },
        {
          description: "Description",
          chemin: "DSC06773.jpg",
        },
        {
          description: "Description",
          chemin: "DSC06788.jpg",
        },
        {
          description: "Description",
          chemin: "DSC06789.jpg",
        },
        {
          description: "Description",
          chemin: "DSC06790.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20211024_134130.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20211024_152913.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20211024_152952.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20211024_154153.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20211024_154209.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20211024_154219.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20211024_154227.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20211024_154324.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20211024_154404.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20211024_154422.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20220226_094249.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20220226_112526.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20220226_112540.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20220226_112554.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20220226_112607.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20220226_112740.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20220226_113003.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20220226_113413.jpg",
        },
        {
          description: "Description",
          chemin: "IMG_20220331_190046.jpg",
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
