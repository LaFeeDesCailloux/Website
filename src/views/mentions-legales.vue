<template>
  <article class="content legal-text">
    <h1>Mentions légales</h1>

    <section>
      <h2>Éditeur</h2>
      <p>
        Le site
        <router-link :to="{ name: 'home' }">lafeedescailloux.fr</router-link>
        est édité par Catherine Maniecki, entreprise individuelle immatriculée
        sous le numéro 922560966.
      </p>
      <p>
        Siège social : <br />
        <span>6 Rue des Frigoulieres, 30720 Ribaute-les-Tavernes</span>
      </p>
      <p>
        Téléphone : <br />
        <span><a href="tel:+33620495045"></a>06 20 49 50 45</span>
      </p>
      <p>
        E-mail : <br />
        <span>
          <a href="mailto:contact@lafeedescailloux.fr">
            contact@lafeedescailloux.fr
          </a>
        </span>
      </p>
      <p>
        Directeur de publication : <br />
        <span>Catherine Maniecki</span>
      </p>
    </section>

    <section>
      <h2>Hébergeur</h2>
      <p>
        CLOUDFLARE, INC. <br />
        101 Townsend St, San Francisco, CA 94107, États-Unis <br />
        <a href="tel:+33757905273">+33 75 7 90 52 73</a>
      </p>
    </section>

    <section>
      <h2>Crédits</h2>
      <p>
        Conception et réalisation du site : <br />
        <span>
          <a href="https://github.com/Minarox">Mathis Serrieres Maniecki</a>
        </span>
      </p>
      <p>Dépôts de codes sources relatifs au site web :</p>
      <ul>
        <li>
          <a href="https://github.com/LaFeeDesCailloux/Website">
            https://github.com/LaFeeDesCailloux/Website
          </a>
        </li>
        <li>
          <a href="https://github.com/LaFeeDesCailloux/API">
            https://github.com/LaFeeDesCailloux/API
          </a>
        </li>
        <li>
          <a href="https://github.com/LaFeeDesCailloux/Maintenance">
            https://github.com/LaFeeDesCailloux/Maintenance
          </a>
        </li>
      </ul>
    </section>

    <section>
      <h2>Propriété intellectuelle</h2>
      <p>
        L’ensemble du site, y compris sa structure et son contenu (textes,
        tableaux, graphiques, images, photographies, vidéos, sons, bases de
        données, applications et logiciels), est protégé par le droit d’auteur
        et de propriété intellectuelle de l’éditeur ou de ses fournisseurs et
        prestataires.
      </p>
    </section>

    <section>
      <h2>Données personnelles</h2>
      <p>
        L’éditeur du site s’engage à mettre en œuvre un traitement de vos
        données personnelles respectueux de votre vie privée et conforme à la
        législation française et européenne en vigueur.
      </p>
      <p>
        Plus d’informations sur le traitement de vos données sont disponibles à
        cette adresse : <br />
        <span>
          <router-link :to="{ name: 'politique-de-confidentialite' }">
            https://lafeedescailloux.fr/politique-de-confidentialite
          </router-link>
        </span>
      </p>
      <p>
        Vous reconnaissez en avoir pris connaissance préalablement à toute
        utilisation du site.
      </p>
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
