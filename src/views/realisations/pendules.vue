<template>
  <Banniere titre="Pendules" image="pendules/banner.webp" />

  <Description>
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
        src="@/assets/pendules/description_1.webp"
        alt="Pendule"
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
        src="@/assets/pendules/description_2.webp"
        alt="Pendule"
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
  name: "pendulesView",
  title() {
    return "Pendules";
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
