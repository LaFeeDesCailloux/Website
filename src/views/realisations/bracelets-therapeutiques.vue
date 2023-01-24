<template>
  <Banniere
    titre="Bracelets thérapeutiques"
    image="bracelets_therapeutiques/banner.webp"
  />

  <Description>
    <section>
      <div>
        <p>
          Un bracelet thérapeutique est une composition de pierres ou cristaux
          choisis pour leur propriété thérapeutique permettant de répondre à des
          besoins ou pathologies spécifiques comme, par exemple, des problèmes
          physiques ou émotionnels.
        </p>
        <p>
          Il est confectionné selon votre demande afin de répondre
          spécifiquement à vos besoins :
        </p>
        <ul>
          <li>Vous souhaitez arrêter de fumer ?</li>
          <li>Vous avez de l’eczéma ?</li>
          <li>Vous voulez prendre confiance en vous ?</li>
          <li>
            Vous désirez vous protéger des énergies négatives d’une personne ?
          </li>
          <li>Vous avez du mal à dormir ?</li>
          <li>Vous avez des bouffées de chaleur ?</li>
          <li>Vous avez une épine calcanéenne ?</li>
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
          Le bracelet thérapeutique est en mesure de répondre à ces questions en
          vous apportant les énergies nécessaires.
        </p>
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
          src: "IMG_20211023_175931.webp",
          title: "Fortifie les reins",
        },
        {
          src: "IMG_20211023_180044.webp",
          title: "Bracelet pour la mémoire",
        },
        {
          src: "IMG_20211023_180601.webp",
          title: "Bracelet contre les rhumatismes",
        },
        {
          src: "IMG_20211024_150525.webp",
          title:
            "Bracelet pour la circulation du sang et contre les hémorroïdes",
        },
        {
          src: "IMG_20211024_152214.webp",
          title: "Bracelets contre les addictions",
        },
        {
          src: "IMG_20211024_152600.webp",
          title: "Bracelet du pardon",
        },
        {
          src: "IMG_20211024_153315.webp",
          title: "Bracelet confiance, joie de vivre et abondance",
        },
        {
          src: "IMG_20211024_153438.webp",
          title: "Bracelets étudiants",
        },
        {
          src: "IMG_20211024_154502.webp",
          title: "Bracelet contre les blessures émotionnelles",
        },
        {
          src: "IMG_20211024_154509.webp",
        },
        {
          src: "IMG_20211024_154548.webp",
          title: "Bracelet contre les phlébites",
        },
        {
          src: "IMG_20211024_154622.webp",
          title: "Bracelet contre les épines calcanéennes",
        },
        {
          src: "IMG_20211024_154715.webp",
          title: "Bracelet de vitalité masculine",
        },
        {
          src: "IMG_20211024_154802.webp",
        },
        {
          src: "IMG_20211024_154839.webp",
          title: "Bracelet de confiance en soi",
        },
        {
          src: "IMG_20211024_155020.webp",
          title: "Bracelet contre les bouffées de chaleur",
        },
        {
          src: "IMG_20211024_155131.webp",
          title: "Bracelet apaisant",
        },
        {
          src: "IMG_20211024_155203.webp",
          title: "Bracelet anti-stress",
        },
        {
          src: "IMG_20211024_155215.webp",
          title: "Bracelet contre les allergies",
        },
        {
          src: "IMG_20211024_155356.webp",
        },
        {
          src: "IMG_20211024_155444.webp",
          title: "Bracelet d'introspection",
        },
        {
          src: "IMG_20211024_155702.webp",
          title: "Ancrage et protection",
        },
        {
          src: "IMG_20211024_155716.webp",
          title: "Renforce la mémoire",
        },
        {
          src: "IMG_20221226_150443.webp",
          title: "Bracelet de protection",
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
