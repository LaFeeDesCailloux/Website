<template>
  <article class="content" id="lithotherapie">
    <h2>Lithothérapie</h2>
    <section>
      <img
        class="blob"
        src="@/assets/img/lithotherapie.webp"
        alt="Pierres utilisées avec la lithothérapie"
        loading="lazy"
      />
      <div>
        <p>
          La lithothérapie est une pratique qui utilise des pierres et des
          cristaux pour promouvoir la santé et le bien-être physique et
          émotionnel. Il est important de rappeler que cette pratique n'est pas
          considérée comme une forme de traitement médical reconnue et qu'elle
          ne doit pas être utilisée à la place d'un traitement médical
          conventionnel. Il semble indéniable que chaque pierre possède des
          propriétés curatives uniques et que leur utilisation peut aider à
          rééquilibrer l'énergie du corps et de l'esprit. Beaucoup de
          civilisations très anciennes les utilisaient déjà pour leurs
          nombreuses vertues.
        </p>
        <p>
          Il existe de nombreuses manières d'utiliser les pierres en
          lithothérapie. Certaines personnes portent des bijoux en pierres
          précieuses ou semi-précieuses, d'autres les placent dans leur
          environnement et profitent de leurs bienfaits.
          <br />
          Certains utilisent également des pierres en méditation ou les posent
          sur des points précis du corps pour rééquilibrer les chakras. Elles
          agissent sur nos organismes par les vibrations qu'elles dégagent, tant
          sur le plan physique, mental, émotionnel ou encore spirituel.
        </p>
        <p>
          Tout est question de rééquilibrage et d'harmonisation des énergies
          vibratoires.
        </p>
        <p>
          Peu importe vos croyances en leurs vertus, les pierres vous
          apporteront tous leurs bienfaits.
        </p>
        <p><strong>Fiez-vous à votre intuition.</strong></p>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "lithotherapieComponent",
};
</script>

<style scoped lang="scss">
article {
  position: relative;
  margin-top: calc(var(--content-margin) / 3);

  section {
    img {
      display: none;
    }

    div p {
      font-size: 1.1em;
      text-align: center;
      margin-bottom: 1rem;

      span {
        font-style: oblique;
      }

      &:last-of-type {
        margin-top: 3rem;
        margin-bottom: 0;
      }
    }

    @media (min-width: 900px) {
      display: grid;
      grid-template-columns: 0.65fr 1.35fr;
      align-items: center;
      gap: 5rem;

      img {
        display: unset;
        border-radius: 71% 29% 27% 73% / 69% 56% 44% 31%;
        height: 400px;
        width: 100%;
        object-fit: cover;
      }

      div p {
        text-align: justify;
      }
    }
  }
}
</style>
