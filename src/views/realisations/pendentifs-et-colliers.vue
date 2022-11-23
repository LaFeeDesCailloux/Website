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
      <i />
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
      <i />
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
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "DSC06704.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "DSC06712.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "DSC06773.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "DSC06788.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "DSC06789.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "DSC06790.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_134130.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_152913.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_152952.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154153.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154209.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154219.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154227.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154324.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154404.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154422.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220226_094249.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220226_112526.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220226_112540.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220226_112554.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220226_112607.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220226_112740.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220226_113003.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220226_113413.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220331_190046.jpg",
        },
      ],
    };
  },
  mounted() {
    setTimeout(this.generateBlobs, 200);
    this.interval = setInterval(this.generateBlobs, 12000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>
