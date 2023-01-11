<template>
  <article class="content legal-text">
    <h1>Plan du site</h1>
    <section>
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">Accueil</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'bracelets-therapeutiques' }">
            Bracelets thérapeutiques
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'chemins-de-vie' }">
            Chemins de vie
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'cgu' }">
            Conditions générales d'utilisation
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'druses-et-geodes' }">
            Druses et Géodes
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'entretenir-ses-pierres' }">
            Entretenir ses pierres
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contact' }">Me contacter</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'mentions-legales' }">
            Mentions légales
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'pendentifs-et-colliers' }">
            Pendentifs et Colliers
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'pendules' }">Pendules</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'pierres-roulees' }">
            Pierres roulées
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'plan-du-site' }">Plan du site</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'politique-de-confidentialite' }">
            Politique de confidentialité
          </router-link>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: "mentionsLegalesView",
  title() {
    return "Mentions légales";
  },
  data() {
    return {
      interval: null,
    };
  },
};
</script>
