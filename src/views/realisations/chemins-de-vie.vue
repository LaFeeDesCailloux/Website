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
        <p>
          Il est composé de 8 pierres parmi 33, définit en fonction de critères
          prédéterminés principalement par votre état civil :
        </p>
        <ul>
          <li><strong>La pierre de base</strong> représente vos racines ;</li>
          <li>
            <strong>La pierre de sommet</strong> représente votre réalisation
            spirituelle ;
          </li>
          <li>
            <strong>Le chemin de vie</strong> fait sauter vos verrous et vous
            donne la piste à suivre ;
          </li>
          <li>
            <strong>La pierre d’appel</strong> vous pousse et vous bouscule
            symbolisant vos émotions profondes ;
          </li>
          <li>
            <strong>La pierre de personnalité</strong> représente votre mental,
            votre intelligence, votre expression et votre dualité ;
          </li>
          <li>
            <strong>La pierre d’expression</strong> représente votre
            communication ;
          </li>
          <li>
            <strong>La pierre de touche</strong> représente vos possibilités en
            permettant d’ouvrir des portes ;
          </li>
          <li>
            <strong>La pierre de vœux</strong> représente votre sensibilité
            intérieure de l’être.
          </li>
        </ul>
      </div>
      <img
        class="blob"
        src="@/assets/img/chemins_de_vie/description_1.webp"
        alt="Chemin de vie"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <p>
          Les 8 pierres déterminent votre personnalité. Elles permettent des
          améliorations sur le plan physique, mental et spirituel en vous
          apportant tout au long de votre vie une aide précieuse.
        </p>
        <p>
          Chaque pierre composée d’oligo-éléments possède des propriétés
          énergétiques. Les changements se font en douceur, en profondeur et
          dans la durée. Vous remarquerez petit à petit une évolution efficace
          sur tous les plans.
        </p>
        <p>
          Monté sur un fil élastique, il vous est facile de le porter et le
          retirer à votre aise.
        </p>
        <p>
          <strong>
            Prenez soin de votre bracelet, il vous le rendra au centuple.
          </strong>
        </p>
      </div>
      <img
        class="blob"
        src="@/assets/img/chemins_de_vie/description_2.webp"
        alt="Chemin de vie"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <p>
          Le chemin de vie allie numérologie et lithothérapie.<br />
          Il est calculé précisément à l’aide :
        </p>
        <ul>
          <li>De tous vos prénoms ;</li>
          <li>Du nom de famille de votre père ;</li>
          <li>Du nom de jeune fille de votre mère ;</li>
          <li>De votre date de naissance.</li>
        </ul>
        <p>Il peut faire l’objet d’un cadeau personnalisé, puisque unique.</p>
        <p>
          Votre chemin de vie vous sera adressé par voie postale ou remis en
          main propre, purifié, rechargé et ajusté à votre tour de poignet.
        </p>
        <p>
          Afin de compléter l’expérience de votre chemin de vie, je vous
          communiquerai oralement son interprétation, ce qu’il vous apporte,
          votre caractère ou tout autre ressenti.
        </p>
      </div>
      <img
        class="blob"
        src="@/assets/img/chemins_de_vie/description_3.webp"
        alt="Chemin de vie"
        loading="lazy"
      />
    </section>
  </Description>

  <p class="content">
    <strong>Un véritable bijou dans tous les sens du terme.</strong>
  </p>

  <EntretenirPierres />

  <Galerie dossier="chemins_de_vie/galerie/" :images="images" />

  <Contact />
</template>

<script>
import Banniere from "@/components/realisations/banniere";
import Description from "@/components/realisations/description";
import EntretenirPierres from "@/components/realisations/entretenir-pierres";
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
    EntretenirPierres,
    Galerie,
    Contact,
  },
  data() {
    return {
      interval: null,
      images: [
        {
          titre: "Chemin de vie",
          description: "Lorem ipsum",
          chemin: "DSC03820.jpg",
        },
        {
          titre: "Chemin de vie",
          description: "Lorem ipsum",
          chemin: "DSC06771.jpg",
        },
        {
          titre: "Chemin de vie",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_151752.jpg",
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
  margin-bottom: var(--content-margin);
}
</style>
