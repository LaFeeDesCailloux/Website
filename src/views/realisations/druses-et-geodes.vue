<template>
  <Banniere titre="Druses et Géodes" image="druses_et_geodes/banner.webp" />

  <Description>
    <section>
      <div id="description">
        <p>
          Outre leurs beautés, les géodes et les druses sont également bien
          utiles.
        </p>
        <p>
          Elles vous permettent de recharger en quelques heures vos pierres :
        </p>
        <ul>
          <li>Bracelets ;</li>
          <li>Pierres roulées ;</li>
          <li>Pendules ;</li>
          <li>Pendentifs ;</li>
          <li>Etc.</li>
        </ul>
        <p>Il suffit d’y déposer vos minéraux à l'intérieur.</p>
      </div>
      <img
        class="blob"
        src="@/assets/img/druses_et_geodes/description_1.webp"
        alt="Druse"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <p>
          Les Géodes sont creuses et peuvent recevoir vos bracelets et pierres,
          tout comme les druses.<br />
          Cependant, ces dernières sont tapissées de cristaux sur leur dessus
          permettant d'autres types d'utilisations.
        </p>
        <h3>Quelques exemples :</h3>
        <ul>
          <li>
            Une druse en améthyste permet d’apporter de la sérénité à la pièce
            dans laquelle elle est exposée ;
          </li>
          <li>
            Les géodes en cristal de roche peuvent purifier et recharger vos
            différentes pierres ;
          </li>
          <li>Les géodes en cristal de roche peuvent purifier un lieu ;</li>
          <li>Etc.</li>
        </ul>
      </div>
      <img
        class="blob"
        src="@/assets/img/druses_et_geodes/description_2.webp"
        alt="Géode"
        loading="lazy"
      />
    </section>
  </Description>

  <EntretenirPierres />

  <Galerie dossier="druses_et_geodes/galerie/" :images="images" />

  <Contact />
</template>

<script>
import Banniere from "@/components/realisations/banniere";
import Description from "@/components/realisations/description";
import EntretenirPierres from "@/components/realisations/entretenir-pierres";
import Galerie from "@/components/realisations/galerie";
import Contact from "@/components/global/contact";

export default {
  name: "drusesEtGeodesView",
  title() {
    return "Druses et Géodes";
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
          src: "DSC06737.webp",
          title: "Cristal de roche",
        },
        {
          src: "IMG_20211023_174234.webp",
          title: "Améthyste",
        },
        {
          src: "IMG_20211023_180852.webp",
          title: "Cristal de roche",
        },
        {
          src: "IMG_20211024_150807.webp",
          title: "Améthyste",
        },
        {
          src: "IMG_20211024_151152.webp",
          title: "Cristal de roche",
        },
        {
          src: "IMG_20211024_153524.webp",
          title: "Cristal de roche",
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

<style scoped lang="scss">
#description {
  p:nth-of-type(2) {
    margin-bottom: 0;
  }

  p:last-of-type {
    margin-top: 1rem;
  }
}
</style>
