<template>
  <Banniere titre="Pendules" image="pendules/banner.webp" />

  <Description>
    <section>
      <div>
        <p>
          Le pendule est un objet très personnel. Il ne se prête pas car
          imprégné de vos vibrations. Il doit être purifié et rechargé le plus
          souvent possible.
        </p>
        <h3>De nombreuses utilisations pour votre pendule.</h3>
        <ul>
          <li>Purifier et recharger les pierres ;</li>
          <li>La radiesthésie ;</li>
          <li>La géobiologie ;</li>
          <li>Pratiquer des soins ;</li>
          <li>Calculer son taux vibratoire et celui d'une maison ;</li>
          <li>Retrouver un objet perdu ;</li>
          <li>Connaître le sexe d'un futur bébé.</li>
        </ul>
      </div>
      <i />
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
      <i />
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
          Afin de comprendre les réponses du pendules, vous allez devoir établir
          un code. Ce code restera immuable. Pour cela, demandez lui de vous
          indiquer un "oui". Le pendule tournera dans un sens. Un "non" tournera
          inévitablement dans le sens inverse. S'il ne connaît pas la réponse à
          votre question ou ne souhaite pas y répondre, il se balancera de
          manière différente. Vous pouvez poser n'importe quelle question à
          condition que ce soit une question fermée, ce qui implique une réponse
          qui sera automatiquement oui, non ou je ne sais pas.<br />
          Une fois ce code établit, vous pouvez utiliser votre pendule.
        </p>
      </div>
      <i />
      <img
        class="blob"
        src="@/assets/img/pendules/description_3.jpg"
        alt="Pendule"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <p>
          Votre pendule peut servir à purifier et recharger, pour cela placer le
          au-dessus de votre pierre ou bracelet et demandez lui de purifier.<br />
          Lorsque le pendule s'arrête de lui-même, demandez-lui alors de
          recharger. Quand le pendule s'arrête à nouveau, c'est que le travail
          est terminé et vous pouvez le remercier.
        </p>
      </div>
      <i />
      <img
        class="blob"
        src="@/assets/img/pendules/description_4.jpg"
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
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "DSC06800.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "DSC06804.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "DSC06814.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "DSC06822.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "DSC06829.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "DSC06834.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_140940.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_140946.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_140950.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_141245.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_141814.jpg",
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
