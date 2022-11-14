<template>
  <Banniere />

  <Lithotherapie />

  <Realisations />

  <APropos />

  <Avis />

  <Contact />
</template>

<script>
import Banniere from "@/components/home/banniere";
import Lithotherapie from "@/components/home/lithotherapie";
import Realisations from "@/components/home/realisations";
import APropos from "@/components/home/a-propos";
import Avis from "@/components/home/avis";
import Contact from "@/components/global/contact";

export default {
  name: "homeView",
  title() {
    return "Accueil";
  },
  data() {
    return {
      interval: null,
    };
  },
  components: {
    Banniere,
    Lithotherapie,
    Realisations,
    APropos,
    Avis,
    Contact,
  },
  mounted() {
    this.generateBlobs();
    this.interval = setInterval(this.generateBlobs, 12000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>
