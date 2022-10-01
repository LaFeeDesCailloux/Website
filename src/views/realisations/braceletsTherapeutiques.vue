<template>
  <Banniere
    titre="Bracelets thérapeutiques"
    image="bracelets_therapeutiques/banner.webp"
    background_color="#8497eb"
  />

  <Description>
    <section>
      <div>
        <p>
          Le bracelet thérapeutique est différent du chemin de vie.<br />
          Il est confectionné selon votre demande et, bien entendu, selon vos
          besoins ou pathologies.
        </p>
        <p>Quelques exemples :</p>
        <ul>
          <li>Vous souhaitez arrêter de fumer ;</li>
          <li>Vous avez de l’eczéma ;</li>
          <li>Vous avez une épine calcanéenne ;</li>
          <li>Vous voulez prendre confiance en vous ;</li>
          <li>
            Vous désirez vous protéger des énergies négatives d’une personne ;
          </li>
          <li>Vous avez du mal à dormir ;</li>
          <li>Vous avez des bouffées de chaleur.</li>
        </ul>
      </div>
      <i />
      <img
        src="@/assets/bracelets_therapeutiques/description_1.webp"
        alt="Bracelet thérapeutique"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <p>
          Faites-en la demande par téléphone, SMS ou par le biais de la page de
          contact et je vous confectionnerai votre bracelet.
        </p>
        <p>
          Beaucoup de pathologies sont déclenchées par l’inconscient, il y a
          toujours une raison cachée. Nous étudierons cela ensemble lors de
          notre échange.
        </p>
        <p>
          <strong>
            Prenez soin de votre bracelet, il prendra soin de vous.
          </strong>
        </p>
      </div>
      <i />
      <img
        src="@/assets/bracelets_therapeutiques/description_2.webp"
        alt="Bracelet thérapeutique"
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

  <Galerie dossier="bracelets_therapeutiques/galerie/" :images="images" />

  <Contact />
</template>

<script>
import Banniere from "@/components/realisations/banniere";
import Description from "@/components/realisations/description";
import Specificites from "@/components/realisations/specificites";
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
    Specificites,
    Galerie,
    Contact,
  },
  data() {
    return {
      images: [
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "DSC03822.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "DSC03823.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "DSC03831.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211023_175535.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211023_175812.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211023_175931.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211023_180044.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211023_180601.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_150525.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_152214.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_152600.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_153315.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_153438.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_153821.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154502.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154509.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154515.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154548.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154622.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154715.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154740.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154802.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154833.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154839.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155007.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155020.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155109.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155120.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155131.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155203.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155215.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155302.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155356.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155426.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155439.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155444.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155522.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155530.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155535.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155658.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155702.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155716.jpg",
        },
        {
          titre: "Bracelet",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_155727.jpg",
        },
      ],
    };
  },
};
</script>
