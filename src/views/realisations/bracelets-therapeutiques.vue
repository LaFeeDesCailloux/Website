<template>
  <Banniere
    titre="Bracelets thérapeutiques"
    image="bracelets_therapeutiques/banner.webp"
  />

  <Description>
    <section>
      <div>
        <p>
          Le bracelet thérapeutique est différent du chemin de vie.<br />
          Il est confectionné selon votre demande et, bien entendu, selon vos
          besoins ou pathologies :
        </p>
        <ul>
          <li>Vous souhaitez arrêter de fumer ;</li>
          <li>Vous avez de l’eczéma ;</li>
          <li>Vous avez une épine calcanéenne ;</li>
          <li>Vous voulez prendre confiance en vous ;</li>
          <li>
            Vous désirez vous protéger des énergies négatives d’une personne ;
          </li>
          <li>Vous avez du mal à dormir ;</li>
          <li>Vous avez des bouffées de chaleur ;</li>
          <li>Etc.</li>
        </ul>
      </div>
      <img
        class="blob"
        src="@/assets/img/bracelets_therapeutiques/description_1.webp"
        alt="Bracelet thérapeutique"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <p>
          Beaucoup de pathologies sont déclenchées par l’inconscient, il y a
          toujours une raison cachée. Nous étudierons cela ensemble lors de
          notre échange.
        </p>
        <p>
          Faites-en la demande par téléphone, SMS ou par le biais de la page de
          contact et je vous confectionnerai votre bracelet.
        </p>
        <p>
          <strong>
            Prenez soin de votre bracelet, il prendra soin de vous.
          </strong>
        </p>
      </div>
      <img
        class="blob"
        src="@/assets/img/bracelets_therapeutiques/description_2.webp"
        alt="Bracelet thérapeutique"
        loading="lazy"
      />
    </section>
  </Description>

  <EntretenirPierres />

  <Galerie dossier="bracelets_therapeutiques/galerie/" :images="images" />

  <Contact />
</template>

<script>
import Banniere from "@/components/realisations/banniere";
import Description from "@/components/realisations/description";
import EntretenirPierres from "@/components/realisations/entretenir-pierres";
import Galerie from "@/components/realisations/galerie";
import Contact from "@/components/global/contact";

export default {
  name: "braceletsTherapeutiquesView",
  title() {
    return "Bracelets thérapeutiques";
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
          src: "DSC03822.webp",
          title: "Description",
        },
        {
          src: "DSC03823.webp",
          title: "Description",
        },
        {
          src: "DSC03831.webp",
          title: "Description",
        },
        {
          src: "IMG_20211023_175535.webp",
          title: "Description",
        },
        {
          src: "IMG_20211023_175812.webp",
          title: "Description",
        },
        {
          src: "IMG_20211023_175931.webp",
          title: "Description",
        },
        {
          src: "IMG_20211023_180044.webp",
          title: "Description",
        },
        {
          src: "IMG_20211023_180601.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_150525.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_152214.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_152600.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_153315.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_153438.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_153821.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_154502.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_154509.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_154515.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_154548.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_154622.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_154715.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_154740.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_154802.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_154833.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_154839.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155007.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155020.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155109.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155120.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155131.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155203.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155215.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155302.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155356.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155426.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155439.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155444.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155522.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155530.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155535.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155658.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155702.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155716.webp",
          title: "Description",
        },
        {
          src: "IMG_20211024_155727.webp",
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
