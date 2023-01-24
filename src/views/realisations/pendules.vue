<template>
  <Banniere titre="Pendules" image="pendules/banner.webp" />

  <Description>
    <section>
      <div>
        <p>
          Le pendule est un objet permettant de purifier vos pierres, obtenir
          des réponses à des questions et détecter ou mesurer des champs
          énergétiques.
          <br />
          Tout comme le chemin de vie, le pendule ne se prête pas car il est
          imprégné par vos vibrations. Il doit être purifié et rechargé le plus
          souvent possible.
        </p>
        <h3>
          Quelques utilisations que vous pouvez effectuer avec votre pendule :
        </h3>
        <ul>
          <li>Purifier et recharger vos pierres ;</li>
          <li>Pratiquer la radiesthésie ;</li>
          <li>Pratiquer la géobiologie ;</li>
          <li>Pratiquer des soins ;</li>
          <li>Calculer son taux vibratoire et celui d'une maison ;</li>
          <li>Retrouver un objet perdu ;</li>
          <li>Connaître le sexe d'un futur bébé ;</li>
          <li>Etc.</li>
        </ul>
      </div>
      <img
        class="blob"
        src="@/assets/img/pendules/description_1.webp"
        alt="Pendule"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <h3>Utilisation du pendule</h3>
        <p>
          Purifiez et rechargez votre pendule avant la première utilisation.
          Portez-le le plus souvent possible afin qu'il s'imprègne de vos
          vibrations et augmenter son efficacité.
        </p>
        <p>
          <strong>
            Avant chaque utilisation, n'oubliez surtout pas de bien lui demander
            s'il veut travailler avec vous.
          </strong>
          Si ce n'est pas le cas, sollicitez-le plus tard.
        </p>
        <p>
          Pour bien utiliser son pendule, tenez la chaîne entre le pouce et
          l'index de votre main dominante et laissez la pendre une dizaine de
          centimètres environ.
        </p>
      </div>
      <img
        class="blob"
        src="@/assets/img/pendules/description_2.webp"
        alt="Pendule"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <p>
          Afin de comprendre les réponses du pendule, vous allez devoir établir
          un code. Ce code restera immuable.
        </p>
        <p>
          Pour cela, demandez lui de vous indiquer un "oui". Le pendule tournera
          dans un sens. Un "non" tournera inévitablement dans le sens inverse.
          S'il ne connaît pas la réponse à votre question ou ne souhaite pas y
          répondre, il se balancera de manière différente.
        </p>
        <p>
          Vous pouvez poser n'importe quelle question à condition que ce soit
          une question fermée, ce qui implique une réponse qui sera
          automatiquement oui, non ou je ne sais pas.
        </p>
        <p>Une fois ce code établi, vous pouvez utiliser votre pendule.</p>
      </div>
      <img
        class="blob"
        src="@/assets/img/pendules/description_3.webp"
        alt="Pendule"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <p>
          Votre pendule peut servir à purifier et recharger, pour cela placez le
          au-dessus de votre pierre ou bracelet et demandez lui de purifier.
        </p>
        <p>
          Lorsque le pendule s'arrête de lui-même, demandez-lui alors de
          recharger. Quand le pendule s'arrête à nouveau, c'est que le travail
          est terminé et vous pouvez le remercier.
        </p>
      </div>
      <img
        class="blob"
        src="@/assets/img/pendules/description_4.webp"
        alt="Pendule"
        loading="lazy"
      />
    </section>
  </Description>

  <EntretenirPierres />

  <Galerie dossier="pendules/galerie/" :images="images" />

  <Contact />
</template>

<script>
import Banniere from "@/components/realisations/banniere";
import Description from "@/components/realisations/description";
import EntretenirPierres from "@/components/realisations/entretenir-pierres";
import Galerie from "@/components/realisations/galerie";
import Contact from "@/components/global/contact";

export default {
  name: "pendulesView",
  title() {
    return "Pendules";
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
          src: "DSC06800.webp",
        },
        {
          src: "DSC06804.webp",
          title: "Quartz rose",
        },
        {
          src: "DSC06814.webp",
          title: "Cristal de roche",
        },
        {
          src: "DSC06822.webp",
          title: "Opale",
        },
        {
          src: "DSC06829.webp",
          title: "Œil de taureau",
        },
        {
          src: "DSC06834.webp",
          title: "Obsidienne œil céleste",
        },
        {
          src: "IMG_20211024_140940.webp",
          title: "Cristal de roche",
        },
        {
          src: "IMG_20211024_140946.webp",
          title: "Jaspe rouge",
        },
        {
          src: "IMG_20211024_140950.webp",
          title: "Lapis lazuli",
        },
        {
          src: "IMG_20211024_141245.webp",
          title: "Lapis lazuli",
        },
        {
          src: "IMG_20211024_141814.webp",
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
