<template>
  <Banniere titre="Pierres roulées" image="pierres_roulees/banner.webp" />

  <Description>
    <section>
      <div>
        <p>
          La pierre roulée est la forme la plus primaire de la pierre,
          c'est-à-dire qu'elle n'a pas été taillé pour pouvoir être utilisé dans
          un collier ou un pendentif. De ce fait, les pierres roulées sont
          destiné à être glissé dans votre poche ou placé à un endroit de votre
          choix.
        </p>
        <p>
          Tout comme les autres formes, la pierre vous apporte ses bienfaits
          afin d'influencer positivement vos énergies ou l'environment autour
          d'elle.
        </p>
        <p>
          Faites-vous confiance pour le choix. Si une pierre vous attire, elle
          est pour vous, sinon demandez conseil pour orienter votre choix. Il va
          de soit que plus la pierre est volumineuse, plus elle est chargée
          énergétiquement.
        </p>
      </div>
      <img
        class="blob"
        src="@/assets/img/pierres_roulees/description_1.webp"
        alt="Pierre roulée"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <h3>Quelques exemples de leurs utilisations :</h3>
        <ul>
          <li>
            Protéger votre maison en plaçant un œil de tigre au-dessus de votre
            porte d’entrée ;
          </li>
          <li>
            Vous avez des hémorroïdes, glissez une hématite dans la poche
            arrière de votre pantalon ;
          </li>
          <li>
            Vous manquez d’argent, attirez l’abondance en glissant une citrine
            dans votre porte-monnaie ;
          </li>
          <li>Etc.</li>
        </ul>
      </div>
      <img
        class="blob"
        src="@/assets/img/pierres_roulees/description_2.webp"
        alt="Pierre roulée"
        loading="lazy"
      />
    </section>
  </Description>

  <EntretenirPierres />

  <Galerie dossier="pierres_roulees/galerie/" :images="images" />

  <Contact />
</template>

<script>
import Banniere from "@/components/realisations/banniere";
import Description from "@/components/realisations/description";
import EntretenirPierres from "@/components/realisations/entretenir-pierres";
import Galerie from "@/components/realisations/galerie";
import Contact from "@/components/global/contact";

export default {
  name: "pierresRouleesView",
  title() {
    return "Pierres roulées";
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
          src: "DSC06714.webp",
          title: "Topazes",
        },
        {
          src: "DSC06728.webp",
          title: "Pyrite",
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
