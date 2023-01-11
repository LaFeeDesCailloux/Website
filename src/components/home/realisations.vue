<template>
  <article class="content" id="mes-realisations">
    <h2>Mes réalisations</h2>
    <section>
      <router-link :to="{ name: 'chemins-de-vie' }">
        <img
          src="@/assets/img/chemins_de_vie/main.webp"
          alt="Chemin de vie"
          loading="lazy"
        />
        <div>
          <h3>Chemins de vie</h3>
          <p>
            A partir de 40€<br />
            jusqu'à 64€
          </p>
        </div>
      </router-link>
      <router-link :to="{ name: 'bracelets-therapeutiques' }">
        <img
          src="@/assets/img/bracelets_therapeutiques/main.webp"
          alt="Bracelets thérapeutiques"
          loading="lazy"
        />
        <div>
          <h3>Bracelets thérapeutiques</h3>
          <p>A partir de 18€</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'pendules' }">
        <img
          src="@/assets/img/pendules/main.webp"
          alt="Pendules"
          loading="lazy"
        />
        <div>
          <h3>Pendules</h3>
          <p>A partir de 22€</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'pendentifs-et-colliers' }">
        <img
          src="@/assets/img/pendentifs_et_colliers/main.webp"
          alt="Pendentifs et Colliers"
          loading="lazy"
        />
        <div>
          <h3>Pendentifs et Colliers</h3>
          <p>A partir de 8€</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'druses-et-geodes' }">
        <img
          src="@/assets/img/druses_et_geodes/main.webp"
          alt="Druses et Géodes"
          loading="lazy"
        />
        <div>
          <h3>Druses et Géodes</h3>
          <p>A partir de 35€</p>
        </div>
      </router-link>
      <router-link :to="{ name: 'pierres-roulees' }">
        <img
          src="@/assets/img/pierres_roulees/main.webp"
          alt="Pierres roulées"
          loading="lazy"
        />
        <div>
          <h3>Pierres roulées</h3>
          <p>A partir de 5€</p>
        </div>
      </router-link>
    </section>
  </article>
</template>

<script>
export default {
  name: "realisationsComponent",
};
</script>

<style scoped lang="scss">
section {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-items: stretch;
  gap: 2rem;

  a {
    aspect-ratio: 1.5/1;
    border-radius: var(--border-radius);
    position: relative;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
      rgba(0, 0, 0, 0.25) 0 25px 50px -12px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1.005);
      transition: transform 250ms;
    }

    div {
      height: 56px;
      backdrop-filter: blur(var(--blur));
      padding: 1.6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;

      h3 {
        font-size: 1.2em;
        font-family: var(--title-font);
      }

      p {
        display: none;
      }
    }

    &:hover {
      img {
        transform: scale(1.03);
      }

      div {
        opacity: 1;
      }
    }
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);

    a {
      aspect-ratio: 1.2/1;
    }
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);

    a div {
      transition: opacity 250ms;
      opacity: 0;
      top: 0;
      height: unset;
      background-color: rgba(255, 255, 255, 0.5);
      color: var(--global-text-color);

      h3 {
        font-size: 1.6em;
      }

      p {
        font-size: 1.22em;
        display: unset;
      }
    }
  }

  @media (min-width: 1200px) {
    gap: 3rem;
  }
}
</style>
