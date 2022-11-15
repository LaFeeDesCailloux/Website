<template>
  <Banniere
    titre="Entretenir ses pierres"
    image="entretenir_ses_pierres/banner.webp"
  />

  <Description>
    <section>
      <div>
        <p>
          Tout aussi efficaces qu’un pendentif elles vous apportent tous les
          bienfaits énergétiques que peut vous délivrer le minéral choisi.
        </p>
        <p>
          Les pierres sont à glisser dans sa poche ou à placer dans votre entrée
          pour protéger votre maison.
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
        src="@/assets/img/entretenir_ses_pierres/description_1.webp"
        alt="Pierre"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <p>Quelques exemples de leurs utilisations :</p>
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
        src="@/assets/img/entretenir_ses_pierres/description_2.webp"
        alt="Pierre"
        loading="lazy"
      />
    </section>
  </Description>

  <Specificites>
    <div>
      <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non arcu
        ac risus laoreet sodales.
      </p>
    </div>
    <div>
      <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non arcu
        ac risus laoreet sodales.
      </p>
    </div>
    <div>
      <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non arcu
        ac risus laoreet sodales.
      </p>
    </div>
    <div>
      <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non arcu
        ac risus laoreet sodales.
      </p>
    </div>
  </Specificites>

  <Galerie dossier="entretenir_ses_pierres/galerie/" :images="images" />

  <Contact />
</template>

<script>
import Banniere from "@/components/realisations/banniere";
import Description from "@/components/realisations/description";
import Specificites from "@/components/realisations/specificites";
import Galerie from "@/components/realisations/galerie";
import Contact from "@/components/global/contact";

export default {
  name: "entretenirSesPierresView",
  title() {
    return "Entretenir ses pierres";
  },
  components: {
    Banniere,
    Description,
    Specificites,
    Galerie,
    Contact,
  },
  data() {
    return {
      interval: null,
      images: [
        {
          titre: "Pierre",
          description: "Lorem ipsum",
          chemin: "DSC06714.jpg",
        },
        {
          titre: "Pierre",
          description: "Lorem ipsum",
          chemin: "DSC06728.jpg",
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
