<template>
  <Banniere
    titre="Entretenir ses pierres"
    image="entretenir_ses_pierres/banner.webp"
  />

  <Description>
    <section>
      <div>
        <p>
          Les minéraux sont extrêmement sensibles à l’environnement et à la
          personne qui les portent. Ils se chargent d’énergies, bonnes ou
          mauvaises, il est donc très important de purifier vos pierres
          régulièrement pour éviter qu’elles ne s’épuisent et continues d’agir
          pour votre bien de façon optimale.
        </p>
        <p>Plusieurs méthodes de purification sont possibles.</p>
        <p>
          La méthode la plus classique est la purification par l’eau, il suffit
          de passer vos pierres quelques secondes sous l’eau du robinet. L’idéal
          est d’utiliser de l’eau de source.
        </p>
        <p>
          En laissant vos pierres sur une géode d’améthyste le temps de la
          purification.
        </p>
        <p>Le pendule peut être également utilisé.</p>
      </div>
      <img
        class="blob"
        src="@/assets/img/entretenir_ses_pierres/description_1.webp"
        alt="Pierre"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <p>
          Une fois purifié de toutes mauvaises énergies, il faut recharger.<br />
          Cette étape est essentielle pour que les minéraux retrouvent leur
          puissance.
        </p>
        <p>Pour cela plusieurs possibilités s’offrent à vous :</p>
        <ul>
          <li>
            <strong>Le soleil : </strong>il ne convient pas à toutes les
            pierres.<br />
            Attention, préférez une exposition douce et de préférence le matin.
          </li>
          <li>
            <strong>La lune et bien sûr la pleine lune : </strong>certaines
            pierres lui sont favorables, laissez son énergie agir en toute
            tranquillité pendant toute une nuit.
          </li>
          <li>
            <strong>Le pendule : </strong>il sera beaucoup plus rapide pour
            recharger vos minéraux.
          </li>
          <li>
            <strong>La géode ou la druse : </strong>Déposez-y vos bracelets,
            pendentifs, pierres roulées ou autres pendant quelques heures.<br />
            Attention, celles-ci doivent être également purifiées.
          </li>
          <li>
            <strong>La fleur de vie : </strong>symbole dégageant une énergie
            très puissante peut également recharger vos pierres.
          </li>
        </ul>
        <p>N'hésitez pas à me demander si vous avez la moindre question.</p>
      </div>
      <img
        class="blob"
        src="@/assets/img/entretenir_ses_pierres/description_2.webp"
        alt="Pierre"
        loading="lazy"
      />
    </section>
    <section>
      <div>
        <p>
          Si vos pierres ternissent, perdent leur éclat, changent de couleur ou
          se cassent, c’est qu’elles ne sont pas suffisamment purifiées et
          rechargées.<br />
          Je préconise de répéter le plus souvent possible ces opérations.
        </p>
        <p>
          Pour optimiser au maximum leurs effets, il est fortement recommandé de
          ne mettre aucun produit en contact avec vos pierres. Aucun parfum,
          crème, produit vaisselle ou autres.<br />
          Il est également déconseillé de le garder pour la douche et la
          baignade.
        </p>
      </div>
      <img
        class="blob"
        src="@/assets/img/entretenir_ses_pierres/description_3.webp"
        alt="Pierre"
        loading="lazy"
      />
    </section>
  </Description>

  <Contact />
</template>

<script>
import Banniere from "@/components/realisations/banniere";
import Description from "@/components/realisations/description";
import Contact from "@/components/global/contact";

export default {
  name: "entretenirSesPierresView",
  title() {
    return "Entretenir ses pierres";
  },
  components: {
    Banniere,
    Description,
    Contact,
  },
  data() {
    return {
      interval: null,
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
