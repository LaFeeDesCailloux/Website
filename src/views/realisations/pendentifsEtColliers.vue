<template>
  <Banniere
    titre="Pendentifs et Colliers"
    image="pendentifs_et_colliers/banner.webp"
    text_color="black"
    background_color="#faf6f5"
  />

  <Description>
    <section>
      <div>
        <p>
          Le pendentif apporte autant de bienfaits qu'une pierre roulée tout en
          étant en permanence à votre contact. Il doit être purifié ou rechargé
          à la lune ou au soleil en fonction de la pierre.
        </p>
      </div>
      <i />
      <img
        src="@/assets/pendentifs_et_colliers/description_1.webp"
        alt="Pendentif"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non arcu
        arcu ac risus laoreet sodales. Fusce tincidunt nibh ligula, sed tempus
        justo vehicula malesuada. Aenean erat lorem, porta eu purus vitae,
        pellentesque vulputate lacus. Etiam luctus arcu sed eleifend convallis.
        Vestibulum vel mi non mi dapibus pulvinar. Nunc blandit nisi quis congue
        efficitur. Maecenas ultrices metus eu mi facilisis consectetur. Aliquam
        molestie iaculis tellus convallis eleifend. Etiam eu massa enim. Sed
        vehicula ante sem, nec bibendum purus aliquam quis. Vivamus tincidunt,
        ipsum id tempus gravida, leo leo elementum mi, nec iaculis quam sapien a
        nisi.
      </div>
      <i />
      <img
        src="@/assets/pendentifs_et_colliers/description_2.webp"
        alt="Collier"
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

  <Galerie dossier="pendentifs_et_colliers/galerie/" :images="images" />

  <Contact />
</template>

<script>
import Banniere from "@/components/realisations/banniere";
import Description from "@/components/realisations/description";
import Specificites from "@/components/realisations/specificites";
import Galerie from "@/components/realisations/galerie";
import Contact from "@/components/global/contact";

export default {
  name: "pendentifsEtColliersView",
  title() {
    return "Pendentifs et Colliers";
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
          chemin: "DSC06704.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "DSC06712.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "DSC06773.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "DSC06788.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "DSC06789.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "DSC06790.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_134130.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_152913.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_152952.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154153.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154209.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154219.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154227.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154324.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154404.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20211024_154422.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220226_094249.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220226_112526.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220226_112540.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220226_112554.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220226_112607.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220226_112740.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220226_113003.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220226_113413.jpg",
        },
        {
          titre: "Titre",
          description: "Lorem ipsum",
          chemin: "IMG_20220331_190046.jpg",
        },
      ],
    };
  },
};
</script>
