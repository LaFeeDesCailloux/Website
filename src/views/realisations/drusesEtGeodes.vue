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
          Elles vous permettent de recharger après quelques heures vos pierres
          quelles qu’elles soient :
        </p>
        <ul>
          <li>Vos bracelets ;</li>
          <li>Vos pierres roulées ;</li>
          <li>Pendules ;</li>
          <li>Pendentifs...</li>
        </ul>
        <p>Il suffit d’y déposer vos minéraux.</p>
      </div>
      <i />
      <img
        src="@/assets/druses_et_geodes/description_1.webp"
        alt="Druse"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <p>
          Les Géodes sont creuses et peuvent recevoir vos bracelets et pierres
          tout comme les druses.<br />
          Cependant, ces dernières sont quant à elles tapissées de cristaux sur
          leur dessus.
        </p>
        <h2>Exemples :</h2>
        <ul>
          <li>
            Une druse en améthyste permet d’apporter de la sérénité à la pièce
            dans laquelle elle est exposée.
          </li>
          <li>
            Les géodes en cristal de roche peuvent aussi bien purifier que
            recharger vos différentes pierres. Elles permettent également de
            purifier un lieu.
          </li>
        </ul>
      </div>
      <i />
      <img
        src="@/assets/druses_et_geodes/description_2.webp"
        alt="Géode"
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
  name: "drusesEtGeodesView",
  title() {
    return "Druses et Géodes";
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
