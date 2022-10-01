<template>
  <Banniere titre="Pierres roulées" image="pierres_roulees/banner.webp" />

  <Description>
    <section>
      <div>
        <p>
          Pierres à glisser dans sa poche ou à placer dans votre entrée pour
          protéger votre maison.
        </p>
        <p>
          Tout aussi efficaces qu’un pendentif elles vous apportent tous les
          bienfaits énergétiques que peut vous délivrer le minéral choisi.
        </p>
        <p>Plus la pierre est grosse, plus elle est chargée énergétiquement.</p>
        <p>
          Pour la choisir, faites-vous confiance surtout si vous êtes attirée
          par cette pierre sinon demandez conseil pour orienter votre choix.
        </p>
      </div>
      <i />
      <img
        src="@/assets/pierres_roulees/description_1.webp"
        alt="Pierre roulée"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <p>Petits exemples de leurs utilisations :</p>
        <ul>
          <li>
            Protéger votre maison en plaçant un œil de tigre au-dessus de votre
            porte d’entrée.
          </li>
          <li>
            Vous avez des hémorroïdes, glissez une hématite dans la poche
            arrière de votre pantalon.
          </li>
          <li>
            Vous manquez d’argent, attirez l’abondance en glissant une citrine
            dans votre porte-monnaie.
          </li>
        </ul>
      </div>
      <i />
      <img
        src="@/assets/pierres_roulees/description_2.webp"
        alt="Pierre roulée"
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

  <Galerie dossier="old/" :images="images" />

  <Contact />
</template>

<script>
import Banniere from "@/components/realisations/banniere";
import Description from "@/components/realisations/description";
import Specificites from "@/components/realisations/specificites";
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
    Specificites,
    Galerie,
    Contact,
  },
  data() {
    return {
      images: [
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "banner.webp",
        },
      ],
    };
  },
};
</script>
