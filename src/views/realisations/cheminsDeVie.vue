<template>
  <Banniere titre="Chemins de vie" image="chemins_de_vie/banner.webp" />

  <Description id="description">
    <section>
      <div>
        <p>
          Un chemin de vie est un bracelet constitué de pierres semi-précieuses.
          Il vous est propre car personnalisé et ne doit en aucun cas être prêté
          ou donné.
        </p>
        <p>Il est composé de 8 pierres parmi 33 :</p>
        <ul>
          <li><strong>La pierre de base</strong> représente nos racines ;</li>
          <li>
            <strong>La pierre de sommet</strong> représente notre réalisation
            spirituelle ;
          </li>
          <li>
            <strong>Le chemin de vie</strong> fait sauter les verrous et donne
            la piste à suivre ;
          </li>
          <li>
            <strong>La pierre d’appel</strong> nous pousse et nous bouscule
            symbolisant nos émotions profondes ;
          </li>
          <li>
            <strong>La pierre de personnalité</strong> représente le mental,
            l’intelligence, l’expression, la dualité ;
          </li>
          <li>
            <strong>La pierre d’expression</strong> représente la communication
            ;
          </li>
          <li>
            <strong>La pierre de touche</strong> représente les possibilités en
            permettant d’ouvrir des portes ;
          </li>
          <li>
            <strong>La pierre de vœux</strong> représente la sensibilité
            intérieure de l’être.
          </li>
        </ul>
      </div>
      <i />
      <img
        src="@/assets/chemins_de_vie/description_1.webp"
        alt="Chemin de vie"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <p>
          Monté sur un fil élastique, il vous est facile de le porter et le
          retirer à votre aise.
        </p>
        <p>
          Les 8 pierres déterminent votre personnalité. Elles permettent des
          améliorations tant sur le plan physique, mental et spirituel tout en
          vous apportant tout au long de votre vie une aide précieuse en faisant
          partie de vous.
        </p>
        <p>
          Chaque pierre, composées d’oligo-éléments, possède des propriétés
          énergétiques. Les changements se feront en douceur, en profondeur et
          dans la durée. Vous remarquerez petit à petit une évolution efficace
          sur tous les plans, au point de vue physique, au niveau de vos
          émotions ou en qualité de vie.
        </p>
        <p>
          <strong>
            Il est très important de bien s’occuper de votre bracelet et
            celui-ci vous le rendra au centuple.
          </strong>
        </p>
      </div>
      <i />
      <img
        src="@/assets/chemins_de_vie/description_2.webp"
        alt="Chemin de vie"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <p>
          Le chemin de vie allie numérologie et lithothérapie, il est calculé
          précisément à l’aide :
        </p>
        <ul>
          <li>De tous vos prénoms ;</li>
          <li>Du nom de famille de votre père ;</li>
          <li>Du nom de jeune fille de votre mère ;</li>
          <li>De votre date de naissance ;</li>
          <li>De votre tour de poignet.</li>
        </ul>
        <p>Il peut faire l’objet d’un cadeau personnalisé, puisque unique.</p>
        <p>
          Votre chemin de vie peut vous être envoyé par voie postale ou remis en
          main propre, purifié et rechargé.
        </p>
        <p>
          Afin de compléter l’expérience de votre chemin de vie, je vous
          communiquerai oralement l’interprétation de celui-ci, ce qu’il peut
          vous apporter, votre caractère ou tout autre ressenti.
        </p>
      </div>
      <i />
      <img
        src="@/assets/chemins_de_vie/description_3.webp"
        alt="Chemin de vie"
        loading="lazy"
      />
    </section>
  </Description>

  <p class="content">
    <strong>Un véritable bijou dans tous les sens du terme.</strong>
  </p>

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
  name: "cheminsDeVieView",
  title() {
    return "Chemins de vie";
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
#description section:last-of-type {
  p:first-of-type {
    margin-bottom: 0;
  }

  ul {
    margin-bottom: 1rem;
  }
}

p.content {
  padding-top: 0;
  text-align: center;
  font-size: 1.3em;
}
</style>
